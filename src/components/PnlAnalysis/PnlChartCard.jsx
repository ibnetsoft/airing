import React, { useEffect, useRef } from 'react';

const PnlChartCard = ({ title, data, dataKey, color }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.Chart && chartRef.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            const ctx = chartRef.current.getContext('2d');
            const labels = data.map(item => new Date(parseInt(item.updatedTime)).toLocaleDateString());
            const values = data.map(item => {
                if (dataKey === 'pnlPercent') return (parseFloat(item.closedPnl) / 100); // Dummy calculation
                if (dataKey === 'assetTrend') return 6000 + parseFloat(item.cumulativePnl); // Dummy trend
                return parseFloat(item[dataKey]);
            });

            chartInstance.current = new window.Chart(ctx, {
                type: 'line',
                data: {
                    labels,
                    datasets: [{
                        label: title,
                        data: values,
                        borderColor: color,
                        backgroundColor: `${color}20`,
                        borderWidth: 2,
                        pointRadius: 0,
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        x: {
                            grid: { color: '#30363d' },
                            ticks: { color: '#8b949e', maxTicksLimit: 6 }
                        },
                        y: {
                            grid: { color: '#30363d' },
                            ticks: { color: '#8b949e' }
                        }
                    }
                }
            });
        }
    }, [data, dataKey, title, color]);

    return (
        <div className="pnl-card">
            <h6 className="mb-3">{title}</h6>
            <div className="pnl-chart-container">
                <canvas ref={chartRef}></canvas>
            </div>
        </div>
    );
};

export default PnlChartCard;
