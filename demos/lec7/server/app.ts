import express, { Express, Request, Response } from "express";
import cors from "cors";
import {
  addPerson,
  getPeople,
  getPerson,
  getCertainAge,
  updateAge,
  deletePerson,
} from "./people.controller";
import { Person } from "../common/types";

const app: Express = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/api/person/:netid", async (req, res) => {
  console.log("[GET] entering 'person/:netid' endpoint");
  const netid: string = req.params.netid;
  try {
    const person = await getPerson(netid);
    if (person === null) {
      res.status(404).send({
        error: `ERROR: person with netid: ${netid} not found in Firestore`,
      });
    } else {
      res.status(200).send({
        message: `SUCCESS retrieved person with netid: ${netid} from the people collection in Firestore`,
      });
    }
  } catch (err) {
    res.status(500).json({
      error: `ERROR: an error occurred in the /api/person/:netid endpoint: ${err}`,
    });
  }
});

app.post("/api/person/:netid", async (req, res) => {
  console.log("[POST] entering '/person/:netid' endpoint");
  const netid: string = req.params.netid;
  const { first, last, age, year } = req.body;
  const person: Person = {
    first,
    last,
    age,
    year,
  };

  try {
    await addPerson(netid, person);
    res.status(200).send({
      message: `SUCCESS added person with netid: ${netid} to the people collection in Firestore`,
    });
  } catch (err) {
    res.status(500).json({
      error: `ERROR: an error occurred in the /api/people/:netid endpoint: ${err}`,
    });
  }
});

app.get("/api/people", async (req, res) => {
  console.log("[GET] entering 'people' endpoint");

  try {
    const people = await getPeople();
    res.status(200).send({
      message: `SUCCESS retrieved ${people} from the people collection in Firestore`,
      data: people,
    });
  } catch (err) {
    res.status(500).json({
      error: `ERROR: an error occurred in the /api/people endpoint: ${err}`,
    });
  }
});

app.get("/api/age/:age", async (req, res) => {
  console.log("[GET] entering 'addPerson' endpoint");
  const age: number = Number(req.params.age);

  try {
    const people = await getCertainAge(age);
    res.status(200).send({
      message: `SUCCESS retrieved all people with age: ${age} from the people collection in Firestore`,
      data: people,
    });
  } catch (err) {
    res.status(500).json({
      error: `ERROR: an error occurred in the /api/age/:age endpoint: ${err}`,
    });
  }
});

app.put("/api/age/:netid", async (req, res) => {
  console.log("[PUT] entering '/age/:age' endpoint");
  const netid: string = req.params.netid;
  const age: number = Number(req.body.age);

  try {
    await updateAge(netid, age);
    res.status(200).send({
      message: `SUCCESS updated person with netid: ${netid} to age: ${age} from the people collection in Firestore`,
    });
  } catch (err) {
    res.status(500).json({
      error: `ERROR: an error occurred in the /api/age/:netid endpoint: ${err}`,
    });
  }
});

app.delete("/api/person/:netid", async (req, res) => {
  console.log("[DELETE] entering '/person/:netid' endpoint");
  const netid: string = req.params.netid;

  try {
    await deletePerson(netid);
    res.status(200).send({
      message: `SUCCESS deleted person with netid: ${netid} from the people collection in Firestore`,
    });
  } catch (err) {
    res.status(500).json({
      error: `ERROR: an error occurred in the /api/age/:netid endpoint: ${err}`,
    });
  }
});

app.listen(port, () => {
  console.log(`SERVER listening on port ${port}`);
});
