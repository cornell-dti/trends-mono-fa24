import path from "path";
import express, { Express } from "express";
import cors from "cors";
import { WeatherResponse, WeatherData } from "../common/types";
import fetch from "node-fetch";

const app: Express = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello world!");
});

app.post("/", (req, res) => {
    const { name } = req.body;
    res.send(`Hi ${name}, this is a POST request.`);
});

// updating the user's name with the id
app.put("/user/:id", (req, res) => {
    const { newName } = req.body;
    const id = req.params.id;
    res.send(`Hi ${newName} at id: ${id}, this is a PUT endpoint.`);
});

// deletes data for some id up to some limit
app.delete("/user/:id", (req, res) => {
    const limit = req.query.limit ?? 1;
    res.send(
        `This is a DELETE request for at most ${limit} items for id ${req.params.id}`
    );
});

/** Implement GET route to get the weather from:
 * "https://api.open-meteo.com/v1/forecast?latitude=40.7411&longitude=73.9897&current=precipitation&temperature_unit=fahrenheit&windspeed_unit=mph&timezone=America%2FNew_York&forecast_days=1"
 * to see if it's raining
 * Return status code 200 if successful, 500 if unsuccessful */

app.get("/api/weather", async (req, res) => {
    console.log("[GET] you hit the /api/weather endpoint")
    try {
        const response = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=40.7411&longitude=73.9897&current=precipitation&temperature_unit=fahrenheit&windspeed_unit=mph&timezone=America%2FNew_York&forecast_days=1"
        );

        const data = (await response.json()) as WeatherData;
        const output: WeatherResponse = {
            raining: true,
        };
        res.status(200).json(output);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Something went wrong"});
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
