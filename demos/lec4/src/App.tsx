import { useEffect, useState } from "react";
import "./App.css";

const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [lastTime, setLastTime] = useState<number | undefined>();

    const handleRunning = () => {
        if (!isRunning) {
            // When start is clicked, set last time to when it is clicked.
            setLastTime(new Date().getTime());
        }
        setIsRunning(!isRunning);
    };

    const handleLapReset = () => {
        if (!isRunning) {
            // When reset is clicked
            setLastTime(undefined);
            setElapsedTime(0);
        }
    };

    useEffect(() => {
        const currentTime = new Date().getTime();

        // Throttle callback function to every 50 milliseconds
        setTimeout(() => {
            if (isRunning) {
                // Add to elapsed time the change in time since lastTime
                setElapsedTime(elapsedTime + currentTime - (lastTime ?? 0));
                setLastTime(currentTime);
            }
        }, 50);
    }, [elapsedTime, lastTime, isRunning]);

    return (
        <div>
            <h1>{elapsedTime / 1000}</h1>
            <button onClick={handleRunning}>
                {isRunning ? "Stop" : "Start"}
            </button>
            <button onClick={handleLapReset}>
                {isRunning ? "Lap" : "Reset"}
            </button>
        </div>
    );
};

const App = () => (
    <div>
        <Stopwatch />
    </div>
);

export default App;
