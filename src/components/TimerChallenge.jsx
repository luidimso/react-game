import { useState } from "react";

export default function TimerChallenge({title, targetTime}) {
    const [isTimeExíred, setIsTimeExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);    
    function startTimer() {
        setTimeout(() => {
            setIsTimeExpired(true);
        }, targetTime * 1000);

        setTimerStarted(true);
    }


    return (
        <section className="challenge">
            <h2>{title}</h2>
            <p>{isTimeExíred ? "Time expired" : ""}</p>
            <p className="challenge-time">{targetTime} second{targetTime > 1 ? "s" : ""}</p>
            <button onClick={startTimer}>{timerStarted ? "Stop" : "Start"} Challenge</button>
            <p className="active">{timerStarted ? "Timer running" : "Timer stopped"}</p>
        </section>
    );
}