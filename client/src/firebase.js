// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ebbcc.firebaseapp.com",
  projectId: "mern-estate-ebbcc",
  storageBucket: "mern-estate-ebbcc.appspot.com",
  messagingSenderId: "919544870001",
  appId: "1:919544870001:web:b4d21ff5860062566197d0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
