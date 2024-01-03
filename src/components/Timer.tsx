import React, { useState, useEffect } from 'react';
import { pageView } from '../types/pageView';


// This component is currently unused and the state is skipped over

function Timer({ setView, timerDuration }: { setView: any, timerDuration: number }) {
    const [minutes, setMinutes] = useState(1);  // FIXME: change this to timerDuration?
    const [seconds, setSeconds] = useState(0);
    const [timerExpired, setTimerExpired] = useState(false);

    // Timer takes in some duration in minutes and starts counting down
    const startTimer = (duration: any) => {
        let timer = duration * 60;  // convert to seconds

        const intervalId = setInterval(() => {
            const minutes = Math.floor(timer / 60);
            const seconds = timer % 60;

            setMinutes(minutes);
            setSeconds(seconds);
            const timerElement: HTMLElement = document.getElementById('timer-text') as HTMLElement;
            timerElement.className = "";


            if (timer <= 0) {
                clearInterval(intervalId);
                setTimerExpired(true);
                timerElement.classList.add('count-over');
                
            } else {
                timer--;
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer(timerDuration);
    }, []);

    return (
        <div className='container'>
            <div id='timer-text'>
                {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
            </div>
            {timerExpired && <button onClick={() => setView(pageView.ALL_ROLES)}>See All Roles</button>}
        </div>
    );
};

export default Timer;
