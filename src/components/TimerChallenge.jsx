import { useState, useRef, Fragment } from "react";
import ResultModal from "./ResultModal";

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
        <Fragment>
            {isTimeExíred && <ResultModal targetTime={targetTime} result="lost"></ResultModal>}
            <section className="challenge">
                <h2>{title}</h2>
                <p>{isTimeExíred ? "Time expired" : ""}</p>
                <p className="challenge-time">{targetTime} second{targetTime > 1 ? "s" : ""}</p>
                <button onClick={timerStarted ? stopTimer : startTimer}>{timerStarted ? "Stop" : "Start"} Challenge</button>
                <p className="active">{timerStarted ? "Timer running" : "Timer stopped"}</p>
            </section>
        </Fragment>
    );
}