import React, { useState, useEffect } from 'react';
import { pageView } from '../types/pageView';

function Timer({ setView, timerDuration }: { setView: any, timerDuration: number }) {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [timerExpired, setTimerExpired] = useState(false);
    const [isRunning, setIsRunning] = useState(false);

    // Timer takes in some duration in minutes and starts counting down
    const startTimer = (duration: any) => {
        let timer = duration * 60;

        setIsRunning(true);

        const intervalId = setInterval(() => {
            const minutes = Math.floor(timer / 60);
            const seconds = timer % 60;

            setMinutes(minutes);
            setSeconds(seconds);

            if (timer <= 0) {
                clearInterval(intervalId);
                setTimerExpired(true);
                setIsRunning(false);
            } else {
                timer--;
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer(timerDuration);
    }, []);

    return (
        <div>
            <div>
                {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
            </div>
            {timerExpired && <button onClick={() => setView(pageView.ALL_ROLES)}>See All Roles</button>}
        </div>
    );
};

export default Timer;