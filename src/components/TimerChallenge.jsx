import { useState, useRef, Fragment } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, targetTime}) {
    const [isTimeExíred, setIsTimeExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);
    const timer = useRef();
    const dialog = useRef();
    const timeRemaining = useRef();
    const [totalTime, setTotalTime] = useState(targetTime - 1);
    const [timeExpired, setTimeExpired] = useState(false);

    function startTimer() {
        setTotalTime(targetTime - 1);
        setTimeExpired(false);

        timer.current = setTimeout(() => {
            setIsTimeExpired(true);
            setTimerStarted(false);
            dialog.current.open();
            clearInterval(timeRemaining.current);
            setTimeExpired(true);
        }, targetTime * 1000);

        timeRemaining.current = setInterval(() => {
            setTotalTime(previiusValue => previiusValue - 1);
        }, 1000);

        setTimerStarted(true);
    }

    function stopTimer() {
        clearInterval(timeRemaining.current);
        clearTimeout(timer.current);
        setTimerStarted(false);
        dialog.current.open();

        if(timeRemaining <= 1) {
            setResult("won")
        }
    }


    return (
        <Fragment>
            <ResultModal ref={dialog} targetTime={targetTime} timeExpired={timeExpired} timeRemaining={totalTime}></ResultModal>
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