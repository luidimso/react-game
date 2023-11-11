import { useState, useRef, Fragment } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, targetTime}) {
    const [isTimeExíred, setIsTimeExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);
    const timer = useRef();
    const dialog = useRef();

    function startTimer() {
        timer.current = setTimeout(() => {
            setIsTimeExpired(true);
            setTimerStarted(false);
            dialog.current.open();
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    function stopTimer() {
        clearTimeout(timer.current);

        setTimerStarted(false);
    }


    return (
        <Fragment>
            <ResultModal ref={dialog} targetTime={targetTime} result="lost"></ResultModal>
            <section className="challenge">
                <h2>{title}</h2>
                <p>{isTimeExíred && !timerStarted ? "Time expired" : ""}</p>
                <p className="challenge-time">{targetTime} second{targetTime > 1 ? "s" : ""}</p>
                <button onClick={timerStarted ? stopTimer : startTimer}>{timerStarted ? "Stop" : "Start"} Challenge</button>
                <p className="active">{timerStarted ? "Timer running" : "Timer stopped"}</p>
            </section>
        </Fragment>
    );
}