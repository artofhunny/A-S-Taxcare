// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe8b6H2kAoJhs_AlGgIg-5LSZTj1TkpnQ",
  authDomain: "amit-tax-care.firebaseapp.com",
  projectId: "amit-tax-care",
  storageBucket: "amit-tax-care.firebasestorage.app",
  messagingSenderId: "245242019836",
  appId: "1:245242019836:web:e783fd0e7007f141a77c79",
  measurementId: "G-K67HLW2J3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);