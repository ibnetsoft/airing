import React from 'react';

const PnlHeader = ({ todayPnl, historicalPnl, totalAsset }) => {
    return (
        <div className="pnl-header-summary">
            <div className="summary-item">
                <div className="label">Today's P&L (USD)</div>
                <div className={`value ${todayPnl >= 0 ? 'value-pos' : 'value-neg'}`}>
                    {todayPnl >= 0 ? '+' : ''}{todayPnl.toLocaleString()} (+4.57%)
                </div>
            </div>
            <div className="summary-item">
                <div className="label">Historical P&L (USD)</div>
                <div className={`value ${historicalPnl >= 0 ? 'value-pos' : 'value-neg'}`}>
                    {historicalPnl >= 0 ? '+' : ''}{historicalPnl.toLocaleString()} (+13.13%)
                </div>
            </div>
            <div className="summary-item">
                <div className="label">Total Asset Trend (USD)</div>
                <div className="value">{totalAsset.toLocaleString()}</div>
            </div>
        </div>
    );
};

export default PnlHeader;
