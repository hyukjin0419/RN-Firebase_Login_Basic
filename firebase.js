// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_L_vZFmy7F6WpT-uvORGwssGpYRIecM0",
  authDomain: "fir-auth-a3fe6.firebaseapp.com",
  projectId: "fir-auth-a3fe6",
  storageBucket: "fir-auth-a3fe6.appspot.com",
  messagingSenderId: "555896680081",
  appId: "1:555896680081:web:1bac3546b06cffe0c6d930",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
