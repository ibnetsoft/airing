import React from 'react';

const PnlCalendar = ({ data }) => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const todayDate = now.getDate();

    const pnlMap = {};
    data.forEach(item => {
        const d = new Date(parseInt(item.updatedTime));
        if (d.getFullYear() === currentYear && d.getMonth() === currentMonth) {
            const day = d.getDate();
            pnlMap[day] = (pnlMap[day] || 0) + parseFloat(item.closedPnl);
        }
    });

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
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
        <div className="calendar-widget">
            <div className="cal-header d-flex justify-content-between">
                <span>{currentYear}.{String(currentMonth + 1).padStart(2, '0')}</span>
            </div>
            <div className="pnl-calendar-grid">
                {weekdays.map(d => <div key={d} className="cal-weekday">{d}</div>)}
                {[...Array(firstDay)].map((_, i) => <div key={`empty-${i}`} className="cal-day empty"></div>)}
                {days.map(d => (
                    <div key={d.day} className={`cal-day ${d.isFuture ? 'future' : ''}`}>
                        <span className="d-num">{d.day}</span>
                        {!d.isFuture && d.pnl !== undefined && (
                            <span className={`d-pnl ${d.pnl >= 0 ? 'val-up' : 'val-down'}`}>
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
