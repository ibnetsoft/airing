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
 * Get Closed PnL history
 */
export const getClosedPnl = async (timeRangeDays = 30) => {
  if (isMock) return getMockPnlData({ limit: timeRangeDays });

  const params = {
    category: 'linear',
    limit: 100
  };

  // If timeRangeDays is provided, calculate startTime
  // However, to ensure we always show "something" initially, 
  // we might want to fetch without startTime if the account is sparse.
  // For now, let's keep it but handle the empty result more gracefully in UI.
  if (timeRangeDays && timeRangeDays !== 'all') {
    const now = Date.now();
    params.startTime = now - (timeRangeDays * 24 * 60 * 60 * 1000);
  }

  return authenticatedFetch('/v5/position/closed-pnl', params);
};

/**
 * Get Wallet Balance
 */
export const getWalletBalance = async () => {
  if (isMock) return getMockWalletBalance();
  return authenticatedFetch('/v5/account/wallet-balance', { accountType: 'UNIFIED' });
};

/**
 * Helper to process P&L data for charts
 */
export const processPnlForCharts = (list) => {
  if (!list || list.length === 0) return [];

  // Bybit returns list in reverse chronological order (newest first)
  // We want chronological for the chart
  const sortedList = [...list].sort((a, b) => parseInt(a.updatedTime) - parseInt(b.updatedTime));

  let cumulative = 0;
  return sortedList.map(item => {
    const pnl = parseFloat(item.closedPnl);
    cumulative += pnl;
    return {
      ...item,
      pnlValue: pnl,
      cumulativePnl: cumulative,
      date: new Date(parseInt(item.updatedTime)).toLocaleDateString()
    };
  });
};
