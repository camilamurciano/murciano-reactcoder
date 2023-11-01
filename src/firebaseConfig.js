import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0vrXojdHJ_MneskqKxDjUzR4UOGom-nQ",
  authDomain: "murciano-reactcoder.firebaseapp.com",
  projectId: "murciano-reactcoder",
  storageBucket: "murciano-reactcoder.appspot.com",
  messagingSenderId: "316265732167",
  appId: "1:316265732167:web:8837ff2fe9cf965af83962",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//esto nos enseño el profe, conviene mas
export const db = getFirestore(app);
