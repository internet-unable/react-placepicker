import { useEffect, useState } from "react";

const TIMER = 3000;
const INTERVAL = 10;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
    const [remainigTime, setRemainingTime] = useState(TIMER);

    useEffect(() => {
        console.log('Interval set');
        const interval = setInterval(() => {
            setRemainingTime(prevState => prevState - INTERVAL);
        }, INTERVAL);

        return () => {
            console.log('Interval cleared');
            clearInterval(interval);
        }
    }, []);

    useEffect(() => {
        console.log('Timer set');
        const timer = setTimeout(() => {
            onConfirm();
        }, TIMER);

        return () => {
            console.log('Timer cleared');
            clearTimeout(timer);
        };
    }, [onConfirm]);

    return (
        <div id="delete-confirmation">
            <h2>Are you sure?</h2>
            <p>Do you really want to remove this place?</p>
            <div id="confirmation-actions">
                <button onClick={onCancel} className="button-text">
                    No
                </button>
                <button onClick={onConfirm} className="button">
                    Yes
                </button>
            </div>
            <progress value={remainigTime} max={TIMER} />
        </div>
    );
}
