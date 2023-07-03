import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCszAsay8KQVSskVCMvqqcaPdahhFfEg3E",
  authDomain: "star-rail-suite.firebaseapp.com",
  projectId: "star-rail-suite",
  storageBucket: "star-rail-suite.appspot.com",
  messagingSenderId: "348740891816",
  appId: "1:348740891816:web:ed1874b53eda9d34f0fe9d",
  measurementId: "G-TBKDZKG1WL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
