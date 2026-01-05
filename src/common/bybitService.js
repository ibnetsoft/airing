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
 * Get Closed PnL history with pagination
 */
export const getClosedPnl = async (timeRangeDays = 30) => {
  if (isMock) return getMockPnlData({ limit: timeRangeDays });

  let allResults = [];
  let cursor = '';

  const now = Date.now();
  const startTime = timeRangeDays === 'all' ? undefined : now - (timeRangeDays * 24 * 60 * 60 * 1000);

  // Fetch up to 5 pages (500 items) for better coverage of active accounts
  for (let i = 0; i < 5; i++) {
    const params = {
      category: 'linear',
      limit: 100,
      cursor
    };
    if (startTime) params.startTime = startTime;

    const res = await authenticatedFetch('/v5/position/closed-pnl', params);

    if (res.retCode === 0 && res.result.list && res.result.list.length > 0) {
      allResults = [...allResults, ...res.result.list];
      cursor = res.result.nextPageCursor;
      if (!cursor) break;
    } else {
      break;
    }
  }

  return { retCode: 0, result: { list: allResults } };
};

/**
 * Get Wallet Balance
 */
export const getWalletBalance = async () => {
  if (isMock) return getMockWalletBalance();
  return authenticatedFetch('/v5/account/wallet-balance', { accountType: 'UNIFIED' });
};

/**
 * Helper to process P&L data for charts with real mathematical derivation
 * Aggregates by UTC Date to match Bybit app's behavior
 */
export const processPnlForCharts = (list, currentEquity = 0) => {
  if (!list || list.length === 0) return [];

  // Group by UTC date (YYYY-MM-DD)
  const dailyGroups = {};
  list.forEach(item => {
    const dateObj = new Date(parseInt(item.updatedTime));
    const utcDate = dateObj.toISOString().split('T')[0]; // Format: YYYY-MM-DD

    if (!dailyGroups[utcDate]) {
      dailyGroups[utcDate] = {
        totalPnl: 0,
        lastUpdatedTime: 0
      };
    }

    dailyGroups[utcDate].totalPnl += parseFloat(item.closedPnl);
    dailyGroups[utcDate].lastUpdatedTime = Math.max(dailyGroups[utcDate].lastUpdatedTime, parseInt(item.updatedTime));
  });

  // Convert to array and sort chronologically
  const sortedDays = Object.keys(dailyGroups)
    .sort()
    .map(date => ({
      date,
      closedPnl: dailyGroups[date].totalPnl,
      updatedTime: dailyGroups[date].lastUpdatedTime
    }));

  // 1. Calculate Cumulative P&L at each point
  let cumulativePnl = 0;
  const dataWithPnl = sortedDays.map(item => {
    cumulativePnl += item.closedPnl;
    return {
      ...item,
      cumulativePnl: cumulativePnl,
    };
  });

  // 2. Derive Equity Baseline
  const totalPnlInPeriod = cumulativePnl;
  const startingEquity = (parseFloat(currentEquity) || 0) - totalPnlInPeriod;

  // 3. Final processing with ROI and Asset Trend
  return dataWithPnl.map(item => {
    const pointEquity = startingEquity + item.cumulativePnl;
    const roiPercent = startingEquity > 0 ? (item.cumulativePnl / startingEquity) * 100 : 0;

    return {
      ...item,
      assetTrend: pointEquity,
      pnlPercent: roiPercent.toFixed(2)
    };
  });
};
