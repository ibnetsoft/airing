import React from 'react';

const PnlHeader = ({ todayPnl, historicalPnl, totalAsset, walletCoins }) => {
    // Determine primary asset unit
    const btcCoin = walletCoins?.find(c => c.coin === 'BTC');
    const mainUnit = btcCoin && parseFloat(btcCoin.equity) > 0 ? 'BTC' : 'USD';

    // Calculate real percentages based on total historical P&L and current balance
    // Starting Balance = Current Total - Period P&L
    const currentTotal = parseFloat(totalAsset) || 0;
    const startingHistorical = currentTotal - historicalPnl;
    const historicalPercent = startingHistorical > 0 ? (historicalPnl / startingHistorical) * 100 : 0;

    // For "Today", we compare today's P&L to the balance at the start of today
    const startingToday = currentTotal - todayPnl;
    const todayPercent = startingToday > 0 ? (todayPnl / startingToday) * 100 : 0;

    return (
        <div className="pnl-summary-banner">
            <div className="summary-group">
                <div className="summary-box">
                    <div className="label">Today's P&L(USD)</div>
                    <div className={`value ${todayPnl >= 0 ? 'val-up' : 'val-down'}`}>
                        {todayPnl >= 0 ? '+' : ''}{todayPnl.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <div className={`sub-value ${todayPnl >= 0 ? 'val-up' : 'val-down'}`}>
                        {todayPnl >= 0 ? '+' : ''}{todayPercent.toFixed(2)}%
                    </div>
                </div>

                <div className="summary-box">
                    <div className="label">Historical P&L(USD)</div>
                    <div className={`value ${historicalPnl >= 0 ? 'val-up' : 'val-down'}`}>
                        {historicalPnl >= 0 ? '+' : ''}{historicalPnl.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <div className={`sub-value ${historicalPnl >= 0 ? 'val-up' : 'val-down'}`}>
                        {historicalPnl >= 0 ? '+' : ''}{historicalPercent.toFixed(2)}%
                    </div>
                </div>
            </div>

            <div className="summary-box asset-box text-right">
                <div className="label">Current Equity</div>
                <div className="value">
                    {totalAsset ? parseFloat(totalAsset).toLocaleString(undefined, { maximumFractionDigits: 8 }) : '0'}
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
