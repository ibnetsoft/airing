import React, { useState } from 'react';

const PnlCalendar = ({ data }) => {
    const [viewDate, setViewDate] = useState(new Date()); // Date object representing the month we are viewing

    const currentYear = viewDate.getFullYear();
    const currentMonth = viewDate.getMonth();

    const now = new Date();
    const todayDate = now.getDate();
    const isActualCurrentMonth = now.getFullYear() === currentYear && now.getMonth() === currentMonth;

    // Filter data for the specific month/year being viewed
    const pnlMap = {};
    data.forEach(item => {
        const d = new Date(parseInt(item.updatedTime));
        // Use UTC to match Bybit's daily reports
        if (d.getUTCFullYear() === currentYear && d.getUTCMonth() === currentMonth) {
            const day = d.getUTCDate();
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
            isFuture: isActualCurrentMonth && i > todayDate || (viewDate > now && !isActualCurrentMonth)
        });
    }

    const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    const changeMonth = (offset) => {
        const newDate = new Date(currentYear, currentMonth + offset, 1);
        setViewDate(newDate);
    };

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const formatPnl = (val) => {
        if (val === undefined || val === null) return '';
        const absVal = Math.abs(val);
        const decimals = absVal < 1 && absVal !== 0 ? 4 : 0;
        return val > 0 ? `+${val.toFixed(decimals)}` : val.toFixed(decimals);
    };

    return (
        <div className="calendar-widget">
            <div className="cal-header d-flex justify-content-between align-items-center mb-4">
                <span style={{ fontSize: '18px', fontWeight: '700' }}>
                    {monthNames[currentMonth]} {currentYear}
                </span>
                <div className="cal-nav d-flex gap-2">
                    <button
                        className="btn btn-sm btn-outline-secondary border-secondary text-white"
                        style={{ padding: '2px 10px', fontSize: '12px' }}
                        onClick={() => changeMonth(-1)}
                    >
                        &lt;
                    </button>
                    <button
                        className="btn btn-sm btn-outline-secondary border-secondary text-white"
                        style={{ padding: '2px 10px', fontSize: '12px' }}
                        onClick={() => changeMonth(1)}
                        disabled={viewDate >= new Date(now.getFullYear(), now.getMonth(), 1)}
                    >
                        &gt;
                    </button>
                </div>
            </div>

            <div className="pnl-calendar-grid">
                {weekdays.map(d => <div key={d} className="cal-weekday">{d}</div>)}
                {[...Array(firstDay)].map((_, i) => <div key={`empty-${i}`} className="cal-day empty"></div>)}
                {days.map(d => (
                    <div key={d.day} className={`cal-day ${d.isFuture ? 'future' : ''}`}>
                        <span className="d-num">{d.day}</span>
                        {!d.isFuture && d.pnl !== undefined && (
                            <span className={`d-pnl ${d.pnl >= 0 ? 'val-up' : 'val-down'}`}>
                                {formatPnl(d.pnl)}
                            </span>
                        )}
                        {!d.isFuture && d.pnl === undefined && Object.keys(pnlMap).length > 0 && (
                            <span className="d-pnl text-muted" style={{ fontSize: '9px', opacity: 0.5 }}>0</span>
                        )}
                    </div>
                ))}
            </div>

            {Object.keys(pnlMap).length === 0 && (
                <div className="text-center mt-3 small text-muted">
                    No trade data found for this month in the current time range.
                </div>
            )}
        </div>
    );
};

export default PnlCalendar;
