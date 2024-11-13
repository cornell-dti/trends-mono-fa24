import admin, { ServiceAccount } from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import serviceAccount from "./trends-lec7-demo-4df09-firebase-adminsdk-zqh2h-023ad9edc4.json";
import { cert } from "firebase-admin/app";

const app = admin.initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
});

const db = getFirestore();

export { db };
