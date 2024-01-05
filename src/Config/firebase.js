// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBePtNW5P0tvrBrlEML3V0mBGRq8dORCY8",
  authDomain: "e-commerce-31391.firebaseapp.com",
  projectId: "e-commerce-31391",
  storageBucket: "e-commerce-31391.appspot.com",
  messagingSenderId: "471878880306",
  appId: "1:471878880306:web:e793d6c835ff250afc002b",
  measurementId: "G-TLJ1ZXT09F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
export {auth , storage}