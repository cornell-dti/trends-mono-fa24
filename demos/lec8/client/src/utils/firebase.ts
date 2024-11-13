// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "trends-lec7-demo-4df09.firebaseapp.com",
  projectId: "trends-lec7-demo-4df09",
  storageBucket: "trends-lec7-demo-4df09.firebasestorage.app",
  messagingSenderId: "217400141394",
  appId: "1:217400141394:web:065b4a624a799469ed218b",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
