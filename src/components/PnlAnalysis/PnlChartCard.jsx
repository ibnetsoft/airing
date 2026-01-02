import React, { useEffect, useRef } from 'react';
import { processPnlForCharts } from '../../common/bybitService';

const PnlChartCard = ({ title, data, dataKey, color }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.Chart && chartRef.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            const processed = processPnlForCharts(data);

            if (processed.length === 0) {
                return;
            }

            const ctx = chartRef.current.getContext('2d');
            const labels = processed.map(item => item.date);
            const values = processed.map(item => {
                if (dataKey === 'pnlPercent') {
                    // Semi-mocked ROI calculation for visualization
                    return (parseFloat(item.closedPnl) / 10).toFixed(2);
                }
                if (dataKey === 'assetTrend') {
                    return parseFloat(item.cumulativePnl);
                }
                return parseFloat(item[dataKey]);
            });

            const gradient = ctx.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, `${color}40`);
            gradient.addColorStop(1, `${color}00`);

            chartInstance.current = new window.Chart(ctx, {
                type: 'line',
                data: {
                    labels,
                    datasets: [{
                        label: title,
                        data: values,
                        borderColor: color,
                        backgroundColor: gradient,
                        borderWidth: 2,
                        pointRadius: 0,
                        fill: true,
                        tension: 0.3
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    interaction: {
                        intersect: false,
                        mode: 'index',
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: '#161b22',
                            titleColor: '#8b949e',
                            bodyColor: '#fff',
                            borderColor: '#30363d',
                            borderWidth: 1,
                            padding: 10,
                            displayColors: false
                        }
                    },
                    scales: {
                        x: {
                            grid: { display: false },
                            ticks: { color: '#8b949e', maxTicksLimit: 7, font: { size: 10 } }
                        },
                        y: {
                            grid: { color: 'rgba(48, 54, 61, 0.2)', drawBorder: false },
                            ticks: {
                                color: '#8b949e',
                                font: { size: 10 },
                                callback: (val) => val.toLocaleString()
                            }
                        }
                    }
                }
            });
        }
    }, [data, dataKey, title, color]);

    return (
        <div className="pnl-card">
            <h6 className="mb-4 text-white-50 fw-normal" style={{ fontSize: '14px' }}>{title}</h6>
            <div className="pnl-chart-container">
                {data.length === 0 ? (
                    <div className="d-flex align-items-center justify-content-center h-100 text-muted small">
                        No data available for this period
                    </div>
                ) : (
                    <canvas ref={chartRef}></canvas>
                )}
            </div>
        </div>
    );
};

export default PnlChartCard;
