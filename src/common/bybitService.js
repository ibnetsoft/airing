import axios from 'axios';
import CryptoJS from 'crypto-js'; // Ensure this is installed: npm install crypto-js

// Bybit API Credentials provided by user
const API_KEY = 'rmLMcCbOnLeao2CbN1';
const API_SECRET = 'hIu6woawYZC2V3n9IBRw95RKcoLsx0eRVBMj';

const isMock = false; // Set to false to use real data

const bybitApi = axios.create({
  baseURL: 'https://api.bybit.com',
});

/**
 * Generate Bybit V5 Signature
 * @param {string} timestamp 
 * @param {string} apiKey 
 * @param {string} recvWindow 
 * @param {string} queryString 
 * @returns {string}
 */
const generateSignature = (timestamp, apiKey, recvWindow, queryString) => {
  return CryptoJS.HmacSHA256(timestamp + apiKey + recvWindow + queryString, API_SECRET).toString();
};

/**
 * Generic Fetcher with Authentication
 */
const authenticatedFetch = async (endpoint, params = {}) => {
  const timestamp = Date.now().toString();
  const recvWindow = '5000';
  const queryString = Object.keys(params)
    .sort()
    .map(key => `${key}=${params[key]}`)
    .join('&');

  const signature = generateSignature(timestamp, API_KEY, recvWindow, queryString);

  try {
    const response = await bybitApi.get(endpoint, {
      params,
      headers: {
        'X-BAPI-API-KEY': API_KEY,
        'X-BAPI-SIGN': signature,
        'X-BAPI-TIMESTAMP': timestamp,
        'X-BAPI-RECV-WINDOW': recvWindow,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching from ${endpoint}:`, error);
    throw error;
  }
};

/**
 * Get Closed PnL history with pagination and category support
 */
export const getClosedPnl = async (timeRangeDays = 30) => {
  if (isMock) return getMockPnlData({ limit: timeRangeDays });

  const categories = ['linear', 'inverse', 'option'];
  let allResults = [];
  const now = Date.now();
  const startTime = (timeRangeDays === 'all' || !timeRangeDays) ? undefined : now - (timeRangeDays * 24 * 60 * 60 * 1000);

  const fetchCategory = async (category, start) => {
    let categoryResults = [];
    let cursor = '';
    // Fetch up to 10 pages per category (1000 items)
    for (let i = 0; i < 10; i++) {
      const params = { category, limit: 100, cursor };
      if (start) params.startTime = start;
      const res = await authenticatedFetch('/v5/position/closed-pnl', params);
      if (res.retCode === 0 && res.result.list && res.result.list.length > 0) {
        categoryResults = [...categoryResults, ...res.result.list];
        cursor = res.result.nextPageCursor;
        if (!cursor) break;
      } else {
        break;
      }
    }
    return categoryResults;
  };

  // Try fetching with startTime first
  const promisedResults = await Promise.all(categories.map(cat => fetchCategory(cat, startTime)));
  allResults = promisedResults.flat();

  // FALLBACK: If current range is empty, fetch most recent data WITHOUT startTime
  // to show the user "something" and confirm API is working
  if (allResults.length === 0 && startTime) {
    console.log("No data in filtered range, fetching most recent history...");
    const fallbackResults = await Promise.all(categories.map(cat => fetchCategory(cat, undefined)));
    allResults = fallbackResults.flat();
  }

  return { retCode: 0, result: { list: allResults } };
};

/**
 * Get Wallet Balance - Merges UNIFIED, CONTRACT and SPOT for a full view
 */
export const getWalletBalance = async () => {
  if (isMock) return getMockWalletBalance();

  try {
    const types = ['UNIFIED', 'CONTRACT', 'SPOT'];
    const results = await Promise.all(
      types.map(type => authenticatedFetch('/v5/account/wallet-balance', { accountType: type }).catch(() => null))
    );

    // Filter out errors and find the first one with a valid list
    const validResults = results.filter(r => r && r.retCode === 0 && r.result.list && r.result.list.length > 0);

    if (validResults.length === 0) return { retCode: 1, result: { list: [] } };

    // Combine coins from all account types
    const allCoins = [];
    let bestTotalEquity = 0;

    validResults.forEach(res => {
      const item = res.result.list[0];
      if (item.coin) {
        allCoins.push(...item.coin);
        console.log(`Detected Coins in ${res.result.list[0].accountType || 'Account'}:`, item.coin.map(c => c.coin).join(', '));
      }
      bestTotalEquity = Math.max(bestTotalEquity, parseFloat(item.totalEquity || item.totalWalletBalance || 0));
    });

    return {
      retCode: 0,
      result: {
        list: [{
          totalEquity: bestTotalEquity.toString(),
          coin: allCoins
        }]
      }
    };
  } catch (error) {
    console.error("Critical error in getWalletBalance:", error);
    return { retCode: 1, result: { list: [] } };
  }
};

/**
 * Helper to process P&L data for charts with real mathematical derivation
 */
export const processPnlForCharts = (list, currentEquity = 0) => {
  if (!list || list.length === 0) return [];

  // Group by UTC date (YYYY-MM-DD)
  const dailyGroups = {};
  list.forEach(item => {
    const dateObj = new Date(parseInt(item.updatedTime));
    const utcDate = dateObj.toISOString().split('T')[0];

    if (!dailyGroups[utcDate]) {
      dailyGroups[utcDate] = {
        totalPnl: 0,
        lastUpdatedTime: 0,
        coins: new Set()
      };
    }

    dailyGroups[utcDate].totalPnl += parseFloat(item.closedPnl);
    dailyGroups[utcDate].lastUpdatedTime = Math.max(dailyGroups[utcDate].lastUpdatedTime, parseInt(item.updatedTime));
    if (item.coin) dailyGroups[utcDate].coins.add(item.coin);
  });

  // Convert to array and sort chronologically
  const sortedDays = Object.keys(dailyGroups)
    .sort()
    .map(date => ({
      date,
      closedPnl: dailyGroups[date].totalPnl,
      updatedTime: dailyGroups[date].lastUpdatedTime,
      isBtcBase: Array.from(dailyGroups[date].coins).includes('BTC')
    }));

  let cumulativePnl = 0;
  const dataWithPnl = sortedDays.map(item => {
    cumulativePnl += item.closedPnl;
    return {
      ...item,
      cumulativePnl: cumulativePnl,
    };
  });

  const totalPnlInPeriod = cumulativePnl;
  const startingEquity = (parseFloat(currentEquity) || 0) - totalPnlInPeriod;

  return dataWithPnl.map(item => {
    const pointEquity = startingEquity + item.cumulativePnl;
    const roiPercent = startingEquity > 0 ? (item.cumulativePnl / startingEquity) * 100 : 0;

    return {
      ...item,
      assetTrend: pointEquity,
      pnlPercent: roiPercent.toFixed(2),
      // If the P&L values are extremely small, we are likely in BTC
      isSmallValue: Math.abs(item.closedPnl) < 0.1 && item.closedPnl !== 0
    };
  });
};
