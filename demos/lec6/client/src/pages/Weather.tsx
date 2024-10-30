import { useEffect, useState } from "react";
import { WeatherResponse } from "../../../common/types";

/** Implement Function to get weather from endpoint of local server */
const getWeather = (): Promise<WeatherResponse> => {};

const Weather = () => {
    const [{ raining }, setRaining] = useState<WeatherResponse>({
        raining: false,
    });

    /** Load the weather when webpage initially loads */
    useEffect(() => {
        console.log("Loading weather...");

        /** Call getWeather and update state accordingly */
        
    }, []);

    return (
        <div>
            <h1>Is it raining in New York?</h1>
            <p>{raining ? "Yes" : "No"}</p>
        </div>
    );
};

export default Weather;
