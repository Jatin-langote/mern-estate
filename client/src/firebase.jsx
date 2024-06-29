// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-state-82bce.firebaseapp.com",
  projectId: "mern-state-82bce",
  storageBucket: "mern-state-82bce.appspot.com",
  messagingSenderId: "230216838745",
  appId: "1:230216838745:web:5bf83ac99a27140f2a4b48"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);