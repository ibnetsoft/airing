import React from 'react';

const PnlHeader = ({ todayPnl, historicalPnl, totalAsset, walletCoins }) => {
    // Determine primary asset unit and value
    // If totalAsset is extremely small but we have coins, we might be misreading the account type
    const btcCoin = walletCoins?.find(c => c.coin === 'BTC');
    const usdtCoin = walletCoins?.find(c => c.coin === 'USDT');

    // Find the coin with the largest balance to determine main unit
    // Robust check for various Bybit coin fields (equity, walletBalance, etc.)
    let primaryCoin = walletCoins && walletCoins.length > 0
        ? [...walletCoins].sort((a, b) => {
            const valA = parseFloat(a.equity || a.walletBalance || 0);
            const valB = parseFloat(b.equity || b.walletBalance || 0);
            return valB - valA;
        })[0]
        : null;

    const primaryCoinVal = primaryCoin ? parseFloat(primaryCoin.equity || primaryCoin.walletBalance || 0) : 0;
    const mainUnit = primaryCoinVal > 0 ? primaryCoin.coin : 'USD';

    // If totalAsset is 0 or very small, and we have a primary coin, use that value instead
    const totalAssetVal = parseFloat(totalAsset) || 0;
    const displayEquity = (totalAssetVal < 0.01 && primaryCoinVal > 0) ? primaryCoinVal : totalAssetVal;

    // Calculate real percentages
    const currentTotal = parseFloat(displayEquity) || 0;
    const startingHistorical = currentTotal - historicalPnl;
    const historicalPercent = startingHistorical > 0 ? (historicalPnl / startingHistorical) * 100 : 0;

    const startingToday = currentTotal - todayPnl;
    const todayPercent = startingToday > 0 ? (todayPnl / startingToday) * 100 : 0;

    // Helper to format values based on unit importance
    const formatAmount = (val) => {
        const absVal = Math.abs(val);
        const decimals = (mainUnit === 'BTC' || absVal < 1) ? 6 : 2;
        return val.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    };

    return (
        <div className="pnl-summary-banner">
            <div className="summary-group">
                <div className="summary-box">
                    <div className="label">Today's P&L({mainUnit})</div>
                    <div className={`value ${todayPnl >= 0 ? 'val-up' : 'val-down'}`}>
                        {todayPnl >= 0 ? '+' : ''}{formatAmount(todayPnl)}
                    </div>
                    <div className={`sub-value ${todayPnl >= 0 ? 'val-up' : 'val-down'}`}>
                        {todayPnl >= 0 ? '+' : ''}{todayPercent.toFixed(2)}%
                    </div>
                </div>

                <div className="summary-box">
                    <div className="label">Historical P&L({mainUnit})</div>
                    <div className={`value ${historicalPnl >= 0 ? 'val-up' : 'val-down'}`}>
                        {historicalPnl >= 0 ? '+' : ''}{formatAmount(historicalPnl)}
                    </div>
                    <div className={`sub-value ${historicalPnl >= 0 ? 'val-up' : 'val-down'}`}>
                        {historicalPnl >= 0 ? '+' : ''}{historicalPercent.toFixed(2)}%
                    </div>
                </div>
            </div>

            <div className="summary-box asset-box text-right">
                <div className="label">Current Equity</div>
                <div className="value">
                    {displayEquity ? parseFloat(displayEquity).toLocaleString(undefined, { maximumFractionDigits: 8 }) : '0'}
                    <span className="unit ms-2" style={{ fontSize: '16px', color: '#8b949e', fontWeight: 'normal' }}>{mainUnit}</span>
                </div>
                <div className="sub-value text-muted">
                    Real-time Bybit Portfolio Value
                </div>
            </div>
        </div>
    );
};

export default PnlHeader;
