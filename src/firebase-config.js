// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8Si6Ik2F8xbIk6Zzx7T_MRDhg3R5RPG0",
  authDomain: "blog-72f9c.firebaseapp.com",
  projectId: "blog-72f9c",
  storageBucket: "blog-72f9c.appspot.com",
  messagingSenderId: "139640618254",
  appId: "1:139640618254:web:8825294abc2d9031316b5f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
