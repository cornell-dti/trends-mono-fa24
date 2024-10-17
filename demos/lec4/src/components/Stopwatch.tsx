import { useEffect, useState } from "react";

type LapProps = {
    index: number;
    time: number;
    minTime: number;
    maxTime: number;
};

const Lap = ({ index, time, minTime, maxTime }: LapProps) => {
    let color = "black";
    if (time === maxTime) {
        color = "red";
    } else if (time === minTime) {
        color = "green";
    }

    return (
        <div
            style={{
                color: color,
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <p>{`Lap ${index}`}</p>
            <p>{time / 1000}</p>
        </div>
    );
};

const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [lastTime, setLastTime] = useState<number | undefined>();

    const [laps, setLaps] = useState<number[]>([]);
    const [lastLap, setLastLap] = useState(0);

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
            setLaps([]);
            setLastLap(0);
        } else {
            setLaps([elapsedTime - lastLap, ...laps]);
            setLastLap(elapsedTime);
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

    const minTime = laps.reduce((acc, lap) => Math.min(acc, lap), Infinity);
    const maxTime = laps.reduce((acc, lap) => Math.max(acc, lap), -1);

    return (
        <div>
            <h1>{elapsedTime / 1000}</h1>
            <button onClick={handleRunning}>
                {isRunning ? "Stop" : "Start"}
            </button>
            <button onClick={handleLapReset}>
                {isRunning ? "Lap" : "Reset"}
            </button>
            {laps.map((lap, index) => (
                <Lap
                    index={laps.length - index}
                    time={lap}
                    minTime={minTime}
                    maxTime={maxTime}
                />
            ))}
        </div>
    );
};

export default Stopwatch;
