import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEQ4tKtW4iJNaVViwA2Iyi7OBdAcqFCIE",
  authDomain: "dashboard-e9c18.firebaseapp.com",
  projectId: "dashboard-e9c18",
  storageBucket: "dashboard-e9c18.appspot.com",
  messagingSenderId: "143165486225",
  appId: "1:143165486225:web:ac8d7580031afa8524bb30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
