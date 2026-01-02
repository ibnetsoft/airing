import React, { useState, useEffect } from 'react';
import { getClosedPnl, getWalletBalance } from '../../common/bybitService';
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
                    setWallet(walletRes.result.list[0]);
                }
            } catch (error) {
                console.error("Failed to fetch dashboard data", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [timeRange]);

    if (loading) return <div className="text-center py-5">Loading Dashboard...</div>;

    const calculateMetrics = () => {
        let total = 0;
        let today = 0;
        const now = new Date();
        const todayStr = now.toDateString();

        pnlData.forEach(item => {
            const pnl = parseFloat(item.closedPnl);
            total += pnl;
            if (new Date(parseInt(item.updatedTime)).toDateString() === todayStr) {
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

                <div className="time-filters">
                    {[7, 30, 60, 90, 180].map(days => (
                        <button
                            key={days}
                            className={`time-filter-btn ${timeRange === days ? 'active' : ''}`}
                            onClick={() => setTimeRange(days)}
                        >
                            Last {days} D
                        </button>
                    ))}
                </div>

                <div className="pnl-grid">
                    <PnlChartCard
                        title="Cumulative P&L (USD)"
                        data={pnlData}
                        dataKey="cumulativePnl"
                        color="#00c0ff"
                    />
                    <PnlChartCard
                        title="Cumulative P&L (%)"
                        data={pnlData}
                        dataKey="pnlPercent"
                        color="#23d160"
                    />
                    <div className="pnl-card">
                        <h5>Daily P&L (USD)</h5>
                        <PnlCalendar data={pnlData} />
                    </div>
                    <PnlChartCard
                        title="Total Asset Trend (USD)"
                        data={pnlData}
                        dataKey="assetTrend"
                        color="#e3b341"
                    />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
