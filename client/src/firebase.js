// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-eb1d4.firebaseapp.com",
    projectId: "mern-blog-eb1d4",
    storageBucket: "mern-blog-eb1d4.appspot.com",
    messagingSenderId: "539863337917",
    appId: "1:539863337917:web:d4c5e7b8e02e133d4120d4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);