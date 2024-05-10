import { useState, useEffect } from "react";
const INTERVAL = 10;

export default function ProgressBar({timer}) {
    const [remainigTime, setRemainingTime] = useState(timer);

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

    return (
        <progress value={remainigTime} max={timer} />
    );
}