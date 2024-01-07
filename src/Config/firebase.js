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
  apiKey: "AIzaSyBQCBpE21kqAULQOfT72uneiwKXUPxWUPQ",
  authDomain: "ecommerce-furn-1320.firebaseapp.com",
  projectId: "ecommerce-furn-1320",
  storageBucket: "ecommerce-furn-1320.appspot.com",
  messagingSenderId: "893789992272",
  appId: "1:893789992272:web:0d5a0d65a7edcb0b5c6855",
  measurementId: "G-NXDPR3MT18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
export {auth , storage}