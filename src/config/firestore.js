import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6vmI31EIbsC2lAqbs9nOgItEuuuc1UTI",
  authDomain: "p4-oficial.firebaseapp.com",
  projectId: "p4-oficial",
  storageBucket: "p4-oficial.appspot.com",
  messagingSenderId: "473218014837",
  appId: "1:473218014837:web:1a1338f6194e4a5914223c"
};

const firebaseApp = initializeApp( firebaseConfig );
export const db = getFirestore( firebaseApp );