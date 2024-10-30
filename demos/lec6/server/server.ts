import path from "path";
import express, { Express } from "express";
import cors from "cors";
import { WeatherResponse, WeatherData } from "../common/types";
import fetch from "node-fetch";

const app: Express = express();
const port = 8080;

app.use(cors());
app.use(express.json());

/** Implement GET route to get the weather from:
 * "https://api.open-meteo.com/v1/forecast?latitude=40.7411&longitude=73.9897&current=precipitation&temperature_unit=fahrenheit&windspeed_unit=mph&timezone=America%2FNew_York&forecast_days=1"
 * to see if it's raining
 * Return status code 200 if successful, 500 if unsuccessful */

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
