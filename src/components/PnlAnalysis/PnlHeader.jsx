import React from 'react';

const PnlHeader = ({ todayPnl, historicalPnl, totalAsset, walletCoins }) => {
    // Try to find USD balance, or use totalAsset if it's already in USD
    const btcCoin = walletCoins?.find(c => c.coin === 'BTC');
    const usdtCoin = walletCoins?.find(c => c.coin === 'USDT');

    return (
        <div className="pnl-header-summary row g-4 mb-30">
            <div className="col-lg-4 col-md-6">
                <div className="summary-card">
                    <div className="label">Today's P&L (USD)</div>
                    <div className={`value ${todayPnl >= 0 ? 'value-pos' : 'value-neg'}`}>
                        {todayPnl >= 0 ? '+' : ''}{todayPnl.toLocaleString()} <span className="percent">(+4.57%)</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="summary-card">
                    <div className="label">Historical P&L (USD)</div>
                    <div className={`value ${historicalPnl >= 0 ? 'value-pos' : 'value-neg'}`}>
                        {historicalPnl >= 0 ? '+' : ''}{historicalPnl.toLocaleString()} <span className="percent">(+13.13%)</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12">
                <div className="summary-card highlight">
                    <div className="label">Total Assets</div>
                    <div className="value">
                        {totalAsset ? parseFloat(totalAsset).toLocaleString(undefined, { maximumFractionDigits: 8 }) : '0'}
                        <span className="unit ms-2">{btcCoin ? 'BTC' : 'USD'}</span>
                    </div>
                    {usdtCoin && (
                        <div className="sub-value text-muted small mt-1">
                            ≈ ${parseFloat(usdtCoin.equity).toLocaleString()} USDT
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PnlHeader;
