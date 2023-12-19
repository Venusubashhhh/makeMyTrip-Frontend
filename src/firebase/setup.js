// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo3WozXWqHO0bX0SGGHuY-vqn9bF2rBVY",
  authDomain: "make-my-trip-authentication.firebaseapp.com",
  projectId: "make-my-trip-authentication",
  storageBucket: "make-my-trip-authentication.appspot.com",
  messagingSenderId: "361054346861",
  appId: "1:361054346861:web:75b494eeea49d7d417a964",
  measurementId: "G-ZT2L997K19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)