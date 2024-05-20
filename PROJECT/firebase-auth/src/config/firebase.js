// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrDRl5x1TLI5jigGMEgsZL65UFk9xaxO4",
  authDomain: "fir-auth-geekster.firebaseapp.com",
  projectId: "fir-auth-geekster",
  storageBucket: "fir-auth-geekster.appspot.com",
  messagingSenderId: "154339116007",
  appId: "1:154339116007:web:af3c8dcf5148b0f50f7342"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =  getAuth(app);
export const googleProvider = new GoogleAuthProvider();
