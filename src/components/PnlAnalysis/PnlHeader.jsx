import React from 'react';

const PnlHeader = ({ todayPnl, historicalPnl, totalAsset, walletCoins }) => {
    // Determine primary asset unit
    const btcCoin = walletCoins?.find(c => c.coin === 'BTC');
    const mainUnit = btcCoin && parseFloat(btcCoin.equity) > 0 ? 'BTC' : 'USD';

    // Percentages are hardcoded for now or could be calculated
    const todayPercent = "+4.57%";
    const historicalPercent = "+13.13%";

    return (
        <div className="pnl-summary-banner">
            <div className="summary-group">
                <div className="summary-box">
                    <div className="label">Today's P&L</div>
                    <div className={`value ${todayPnl >= 0 ? 'val-up' : 'val-down'}`}>
                        {todayPnl >= 0 ? '+' : ''}{todayPnl.toLocaleString()}
                    </div>
                    <div className={`sub-value ${todayPnl >= 0 ? 'val-up' : 'val-down'}`}>
                        {todayPercent}
                    </div>
                </div>

                <div className="summary-box">
                    <div className="label">Historical P&L</div>
                    <div className={`value ${historicalPnl >= 0 ? 'val-up' : 'val-down'}`}>
                        {historicalPnl >= 0 ? '+' : ''}{historicalPnl.toLocaleString()}
                    </div>
                    <div className={`sub-value ${historicalPnl >= 0 ? 'val-up' : 'val-down'}`}>
                        {historicalPercent}
                    </div>
                </div>
            </div>

            <div className="summary-box asset-box text-right">
                <div className="label">Total Assets</div>
                <div className="value">
                    {totalAsset ? parseFloat(totalAsset).toLocaleString(undefined, { maximumFractionDigits: 8 }) : '0'}
                    <span className="unit ms-2" style={{ fontSize: '16px', color: '#8b949e', fontWeight: 'normal' }}>{mainUnit}</span>
                </div>
                <div className="sub-value text-muted">
                    ≈ ${btcCoin ? (parseFloat(btcCoin.equity) * 95000).toLocaleString() : '0'} USDT
                </div>
            </div>
        </div>
    );
};

export default PnlHeader;
