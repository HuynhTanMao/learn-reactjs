import React, { useEffect, useState } from 'react';

function formatData() {
    const date = new Date();
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const second = `0${date.getSeconds()}`.slice(-2);
    return `${hours}:${minutes}:${second}`;
}

function Clock(props) {

    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date();
            const newTimeString = formatData(now);
            setTimeString(newTimeString);
        }, 1000);
        return () => {
            console.log('Clock cleanup');
            clearInterval(clockInterval);
        }
    }, []);

    return (
        <div>
            <p style={{ fontSize: '42px' }}>{timeString}</p>
        </div>
    );
}

export default Clock;