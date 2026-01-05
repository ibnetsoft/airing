import React, { useState, useEffect } from 'react';
import { getClosedPnl, getWalletBalance, processPnlForCharts } from '../../common/bybitService';
import PnlHeader from './PnlHeader';
import PnlChartCard from './PnlChartCard';
import PnlCalendar from './PnlCalendar';

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [pnlData, setPnlData] = useState([]);
    const [wallet, setWallet] = useState(null);
    const [timeRange, setTimeRange] = useState(30);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const [pnlRes, walletRes] = await Promise.all([
                    getClosedPnl(timeRange),
                    getWalletBalance()
                ]);

                if (pnlRes.retCode === 0) {
                    setPnlData(pnlRes.result.list || []);
                }

                if (walletRes.retCode === 0 && walletRes.result.list && walletRes.result.list.length > 0) {
                    const walletData = walletRes.result.list[0];
                    console.log("Bybit Wallet Data:", walletData);
                    // Ensure we have a totalEquity field, fallback to totalWalletBalance if needed
                    if (!walletData.totalEquity && walletData.totalWalletBalance) {
                        walletData.totalEquity = walletData.totalWalletBalance;
                    }
                    setWallet(walletData);
                }
            } catch (error) {
                console.error("Failed to fetch dashboard data", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [timeRange]);

    if (loading) return (
        <div className="text-center py-5" style={{ color: '#8b949e' }}>
            <div className="spinner-border text-info mb-3"></div>
            <div>Syncing with Bybit...</div>
        </div>
    );

    const processedData = processPnlForCharts(pnlData, wallet?.totalEquity || 0);

    const calculateMetrics = () => {
        let total = 0;
        let today = 0;
        const now = new Date();
        const todayUTC = now.toISOString().split('T')[0];

        pnlData.forEach(item => {
            const pnl = parseFloat(item.closedPnl);
            total += pnl;
            const itemDate = new Date(parseInt(item.updatedTime)).toISOString().split('T')[0];
            if (itemDate === todayUTC) {
                today += pnl;
            }
        });
        return { total, today };
    };

    const metrics = calculateMetrics();

    return (
        <div className="pnl-dashboard">
            <div className="pnl-container">
                <PnlHeader
                    todayPnl={metrics.today}
                    historicalPnl={metrics.total}
                    totalAsset={wallet?.totalEquity || 0}
                    walletCoins={wallet?.coin || []}
                />

                <div className="pnl-controls">
                    <div className="filter-pills">
                        {[7, 30, 60, 90, 180].map(days => (
                            <button
                                key={days}
                                className={`filter-pill ${timeRange === days ? 'active' : ''}`}
                                onClick={() => setTimeRange(days)}
                            >
                                {days}D
                            </button>
                        ))}
                    </div>
                    <div className="ms-auto d-flex align-items-center">
                        <span className="badge rounded-pill bg-success me-2" style={{ padding: '6px 12px', fontSize: '11px', opacity: 0.8 }}>● Live API</span>
                        <span className="text-muted small">Updated {new Date().toLocaleTimeString()}</span>
                    </div>
                </div>

                <div className="pnl-grid">
                    <PnlChartCard
                        title="Cumulative P&L (USD)"
                        data={processedData}
                        dataKey="cumulativePnl"
                        color="#00c0ff"
                    />
                    <PnlChartCard
                        title="Cumulative P&L (%)"
                        data={processedData}
                        dataKey="pnlPercent"
                        color="#23d160"
                    />

                    <div className="pnl-glass-card">
                        <div className="card-title">Daily Performance</div>
                        <PnlCalendar data={pnlData} />
                    </div>

                    <PnlChartCard
                        title="Total Asset Trend (USD)"
                        data={processedData}
                        dataKey="assetTrend"
                        color="#e3b341"
                    />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
