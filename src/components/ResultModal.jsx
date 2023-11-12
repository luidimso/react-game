import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal({timeExpired, targetTime, timeRemaining}, ref) {
    const dialog = useRef();


    useImperativeHandle(ref, () => {
        console.log(timeRemaining);

        return {
            open() {
                dialog.current.showModal();
            }
        }
    });


    return createPortal(
        <dialog ref={dialog} className="result-modal">
            <h2>You {timeRemaining <= 1 && !timeExpired ? "won" : "lost"}</h2>
            <p>The target time was <strong>{targetTime} seconds</strong>.</p>
            {timeExpired ? <p>Time expired</p> : <p>You stopped the timer with <strong>{timeRemaining} seconds left.</strong></p>}
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    , document.getElementById("modal"));
});

export default ResultModal;