import React, { useEffect, useState } from 'react';
import './AnalogClock.css';

const AnalogClock: React.FC = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const getRotationStyle = (hand: 'hour' | 'minute' | 'second') => {
        const rotationMap = {
            hour: ((time.getHours() % 12) * 30) + (time.getMinutes() / 2),
            minute: (time.getMinutes() * 6) + (time.getSeconds() / 10),
            second: time.getSeconds() * 6
        };

        return {
            transform: `rotate(${rotationMap[hand]}deg)`
        };
    };

    return (
        <div className="analog-clock">
            <div className="clock-face">
                <div className="hour-hand" style={getRotationStyle('hour')} />
                <div className="minute-hand" style={getRotationStyle('minute')} />
                <div className="second-hand" style={getRotationStyle('second')} />
            </div>
        </div>
    );
};

export default AnalogClock;