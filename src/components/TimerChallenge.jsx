import { useState, useRef } from "react";

export default function TimerChallenge({title, targetTime}) {
    const [isTimeExíred, setIsTimeExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);
    const timer = useRef();

    function startTimer() {
        timer.current = setTimeout(() => {
            setIsTimeExpired(true);
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    function stopTimer() {
        clearTimeout(timer.current);

        setTimerStarted(false);
    }


    return (
        <section className="challenge">
            <h2>{title}</h2>
            <p>{isTimeExíred ? "Time expired" : ""}</p>
            <p className="challenge-time">{targetTime} second{targetTime > 1 ? "s" : ""}</p>
            <button onClick={timerStarted ? stopTimer : startTimer}>{timerStarted ? "Stop" : "Start"} Challenge</button>
            <p className="active">{timerStarted ? "Timer running" : "Timer stopped"}</p>
        </section>
    );
}