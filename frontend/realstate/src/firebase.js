// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-state-e3147.firebaseapp.com",
  projectId: "real-state-e3147",
  storageBucket: "real-state-e3147.appspot.com",
  messagingSenderId: "34437617461",
  appId: "1:34437617461:web:703b3fffa64e8e14681e7c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);