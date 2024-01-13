import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarComponent(props) {
    const [date, setDate] = useState(new Date(2024, 4, 12));
    return (
        <div className="calendar" style={{transform: props.width ? "scale(1)" : "scale(0.8)"}}>
            <Calendar value={date} />
        </div>
    )
}

export default CalendarComponent;