// @ts-nocheck
import { Person } from "../common/types";
import { db } from "./firebase";

const userCollectionRef = db.collection("users");

export const addPerson = async (netid: string, person: Person) => {
  const personRef = userCollectionRef.doc(netid);
  return await personRef.set(person);
};

export const getPeople = async () => {
  const snapshot = await userCollectionRef.get();
  const people = snapshot.docs.map((doc) => doc.data());
  return people;
};

export const getPerson = async (netid: string) => {
  const personRef = userCollectionRef.doc(netid);
  const snapshot = await personRef.get();
  if (snapshot.exists) {
    const person = snapshot.data();
    return person;
  }
  return null;
};

export const getCertainAge = async (age: number): Promise<Person[]> => {
  const snapshot = await userCollectionRef.where("age", "==", age).get();
  const people: Person[] = snapshot.docs.map((doc) => doc.data());
  return people;
};

export const updateAge = async (netid: string, age: number) => {
  const personRef = userCollectionRef.doc(netid);
  return await personRef.update({ age });
};

export const deletePerson = async (netid: string) => {
  const personRef = userCollectionRef.doc(netid);
  return await personRef.delete();
};
