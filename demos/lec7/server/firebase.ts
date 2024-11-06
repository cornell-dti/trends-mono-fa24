import admin, { ServiceAccount } from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import serviceAccount from "./serviceAccountKey.json";
import { cert } from "firebase-admin/app";
