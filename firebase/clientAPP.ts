// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO : Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJvJsvX7L_B9jpP5tIVD3L5zamtFccGgw",
  authDomain: "chrono-453ec.firebaseapp.com",
  projectId: "chrono-453ec",
  storageBucket: "chrono-453ec.appspot.com",
  messagingSenderId: "534092618468",
  appId: "1:534092618468:web:b9823b7ab6e3fc2e706af1",
  measurementId: "G-PSVSVVMNXE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
