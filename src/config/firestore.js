import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj7vUUERa7smyYNjc3dzgcEFPpO-Oq_ck",
  authDomain: "proyecto-4-udd-c5.firebaseapp.com",
  projectId: "proyecto-4-udd-c5",
  storageBucket: "proyecto-4-udd-c5.appspot.com",
  messagingSenderId: "178749796139",
  appId: "1:178749796139:web:200625d0b007b10e331f6e"
};

const firebaseApp = initializeApp( firebaseConfig );
export const db = getFirestore( firebaseApp );