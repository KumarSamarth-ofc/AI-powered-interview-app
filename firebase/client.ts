import { initializeApp, getApp, getApps } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore, initializeFirestore } from  "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8YYjE292qQEWFJTpliDW7KoyKcesffpQ",
  authDomain: "prepwise-8fb8c.firebaseapp.com",
  projectId: "prepwise-8fb8c",
  storageBucket: "prepwise-8fb8c.firebasestorage.app",
  messagingSenderId: "170049566366",
  appId: "1:170049566366:web:a0fa47f50cb6418862ed8f",
  measurementId: "G-CW1VXEN8BD",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app);
export const db = initializeFirestore(app, { ignoreUndefinedProperties: true });