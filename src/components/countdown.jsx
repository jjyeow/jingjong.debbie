import React, { useState, useEffect } from 'react';

function Countdown(props) {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    
    const secondsToDhms = (seconds) => {
        seconds = Number(seconds);
        var d = Math.floor(seconds / (3600*24));
        var h = Math.floor(seconds % (3600*24) / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var s = Math.floor(seconds % 60);

        return {
            d,
            h,
            m,
            s
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            let currentDateTime = new Date()
            let endDateTime = new Date(2024, 4, 12, 18, 0, 0)
            let newTotalTime = (endDateTime - currentDateTime) / 1000
            let result = secondsToDhms(newTotalTime)
            setSeconds(result.s)
            setMinutes(result.m)
            setHours(result.h)
            setDays(result.d)
        }, 1000);
      
        return () => clearInterval(interval);
    }, [])

    return (
        <div className="font-weight-bold countdown-1" style={{transform: props.width ? "scale(0.75)" : "scale(0.7)"}}>
            <div className="countdown-2" style={{width: props.width ? 50 : 35, height: props.width ? 50 : 35}}>
                <div className='flex-column'>
                    <div className="countdown-value">{days}</div>
                    <div className="countdown-unit">DAY(S)</div>
                </div>
            </div>
            <div className="countdown-2" style={{width: props.width ? 50 : 35, height: props.width ? 50 : 35}}>
                <div className='flex-column'>
                    <div className="countdown-value">{hours}</div>
                    <div className="countdown-unit">HOUR(S)</div>
                </div>
            </div>
            <div className="countdown-2" style={{width: props.width ? 50 : 35, height: props.width ? 50 : 35}}>
                <div className='flex-column'>
                    <div className="countdown-value">{minutes}</div>
                    <div className="countdown-unit">MINUTE(S)</div>
                </div>
            </div>
            <div className="countdown-2" style={{width: props.width ? 50 : 35, height: props.width ? 50 : 35}}>
                <div className='flex-column'>
                    <div className="countdown-value">{seconds}</div>
                    <div className="countdown-unit">SECOND(S)</div>
                </div>
            </div>
        </div>
    )
}

export default Countdown;