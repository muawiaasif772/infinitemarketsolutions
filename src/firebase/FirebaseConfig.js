
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAI2K8gMT8szU1QXZHUH4aRIq1ux6mG4AE",
  authDomain: "infinite-market-solutions.firebaseapp.com",
  projectId: "infinite-market-solutions",
  storageBucket: "infinite-market-solutions.firebasestorage.app",
  messagingSenderId: "181006072557",
  appId: "1:181006072557:web:cbbd64a6f870edee2beae4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export const db=getFirestore(app)
 