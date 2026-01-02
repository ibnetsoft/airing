import React from 'react';

const PnlCalendar = ({ data }) => {
    // Simple mock calendar for January 2026 based on the reference image
    const days = [];
    // Dummy data for the first few days
    const dailyPnls = {
        1: -101.14,
        2: 15.2,
        3: -5.4,
    };

    for (let i = 1; i <= 31; i++) {
        days.push({
            day: i,
            pnl: dailyPnls[i] || (Math.random() - 0.5) * 50
        });
    }

    const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    return (
        <div className="pnl-calendar-container">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <span>2026-01</span>
            </div>
            <div className="pnl-calendar">
                {weekdays.map(d => <div key={d} className="text-center text-muted small">{d}</div>)}
                {/* Empty slots for start of month */}
                {[...Array(4)].map((_, i) => <div key={`empty-${i}`} className="calendar-day empty"></div>)}
                {days.map(d => (
                    <div key={d.day} className="calendar-day">
                        <span className="day-num">{d.day}</span>
                        <span className={`day-pnl small ${d.pnl >= 0 ? 'value-pos' : 'value-neg'}`}>
                            {d.pnl !== undefined ? (d.pnl > 0 ? `+${d.pnl.toFixed(0)}` : d.pnl.toFixed(0)) : ''}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PnlCalendar;
