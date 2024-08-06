// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiyJmrZE3NxquRKzl1Q2ZPb5Lr12c88vE",
  authDomain: "file-sharing-app-1d4b8.firebaseapp.com",
  projectId: "file-sharing-app-1d4b8",
  storageBucket: "file-sharing-app-1d4b8.appspot.com",
  messagingSenderId: "3972943786",
  appId: "1:3972943786:web:90cd9a8cc8eca88ff5a5d3",
  measurementId: "G-FE51K4NXDT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
