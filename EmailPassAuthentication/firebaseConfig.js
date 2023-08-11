import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBe4zmkF0OjSJkjfaHiECuC7OyOp_UjNPc",
  authDomain: "reactnative-42fd5.firebaseapp.com",
  projectId: "reactnative-42fd5",
  storageBucket: "reactnative-42fd5.appspot.com",
  messagingSenderId: "619942808504",
  appId: "1:619942808504:web:b6484dfdc8d4660e9f1d4d"
};
 
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase





