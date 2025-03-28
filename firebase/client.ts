// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase-admin/auth';
import { getFirestore} from 'firebase/firestore'
// 
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi65VNkeHF0gPj2O2fk04pBfZ4MKGCYk4",
  authDomain: "prepbuddy-bd371.firebaseapp.com",
  projectId: "prepbuddy-bd371",
  storageBucket: "prepbuddy-bd371.firebasestorage.app",
  messagingSenderId: "453065031102",
  appId: "1:453065031102:web:f8e9a5d575cd906d434def",
  measurementId: "G-F884F68P3W"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);