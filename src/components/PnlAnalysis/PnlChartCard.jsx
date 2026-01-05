import React, { useEffect, useRef } from 'react';

const PnlChartCard = ({ title, data, dataKey, color }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.Chart && chartRef.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            if (!data || data.length === 0) return;

            const ctx = chartRef.current.getContext('2d');
            const labels = data.map(item => item.date);
            const values = data.map(item => parseFloat(item[dataKey]));

            const gradient = ctx.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, `${color}30`);
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
                    interaction: { intersect: false, mode: 'index' },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: '#1c2128',
                            titleColor: '#8b949e',
                            bodyColor: '#fff',
                            borderColor: '#30363d',
                            borderWidth: 1,
                            padding: 12,
                            displayColors: false,
                            callbacks: {
                                label: (context) => {
                                    let label = context.dataset.label || '';
                                    if (label) label += ': ';
                                    if (dataKey === 'pnlPercent') return label + context.parsed.y + '%';
                                    const rawVal = context.parsed.y;
                                    const decimals = Math.abs(rawVal) < 1 && rawVal !== 0 ? 6 : 2;
                                    return label + rawVal.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            grid: { display: false },
                            ticks: { color: '#8b949e', maxTicksLimit: 6, font: { size: 10 } }
                        },
                        y: {
                            grid: { color: 'rgba(48, 54, 61, 0.3)', drawBorder: false },
                            ticks: {
                                color: '#8b949e',
                                font: { size: 10 },
                                callback: (val) => {
                                    if (dataKey === 'pnlPercent') return val + '%';
                                    const decimals = Math.abs(val) < 1 && val !== 0 ? 4 : 0;
                                    return val.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
                                }
                            }
                        }
                    }
                }
            });
        }
    }, [data, dataKey, title, color]);

    return (
        <div className="pnl-glass-card">
            <div className="card-title">{title}</div>
            <div className="pnl-chart-wrapper">
                {(!data || data.length === 0) ? (
                    <div className="d-flex align-items-center justify-content-center h-100 text-muted small">
                        No transaction history found for this period
                    </div>
                ) : (
                    <canvas ref={chartRef}></canvas>
                )}
            </div>
        </div>
    );
};

export default PnlChartCard;
