import React from 'react';

const PnlCalendar = ({ data }) => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth(); // 0-indexed
    const todayDate = now.getDate();

    // Create map of daily P&L from real data
    const pnlMap = {};
    data.forEach(item => {
        const d = new Date(parseInt(item.updatedTime));
        if (d.getFullYear() === currentYear && d.getMonth() === currentMonth) {
            const day = d.getDate();
            pnlMap[day] = (pnlMap[day] || 0) + parseFloat(item.closedPnl);
        }
    });

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
        days.push({
            day: i,
            pnl: pnlMap[i],
            isFuture: i > todayDate && currentYear === now.getFullYear() && currentMonth === now.getMonth()
        });
    }

    const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    return (
        <div className="pnl-calendar-container">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <span className="fw-bold">{currentYear}-{String(currentMonth + 1).padStart(2, '0')}</span>
            </div>
            <div className="pnl-calendar">
                {weekdays.map(d => <div key={d} className="calendar-weekday">{d}</div>)}

                {/* Empty slots for start of month */}
                {[...Array(firstDayOfMonth)].map((_, i) => (
                    <div key={`empty-${i}`} className="calendar-day empty"></div>
                ))}

                {days.map(d => (
                    <div key={d.day} className={`calendar-day ${d.isFuture ? 'future' : ''}`}>
                        <span className="day-num">{d.day}</span>
                        {!d.isFuture && d.pnl !== undefined && (
                            <span className={`day-pnl ${d.pnl >= 0 ? 'value-pos' : 'value-neg'}`}>
                                {d.pnl > 0 ? `+${d.pnl.toFixed(0)}` : d.pnl.toFixed(0)}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PnlCalendar;
