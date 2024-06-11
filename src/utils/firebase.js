// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHNwKgQSkIJBWS0MFyyOzC1OjyfW20YR0",
  authDomain: "netflixgpt-ab7fe.firebaseapp.com",
  projectId: "netflixgpt-ab7fe",
  storageBucket: "netflixgpt-ab7fe.appspot.com",
  messagingSenderId: "283674224344",
  appId: "1:283674224344:web:fc2d66fa83a2cc6bbd59ad",
  measurementId: "G-C9KGY0JYW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();