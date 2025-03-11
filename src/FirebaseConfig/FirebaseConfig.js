import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVEPiPPIlnL_Qe5OIjNfCN1_QNSaAlZOw",
  authDomain: "carpool-81a9d.firebaseapp.com",
  projectId: "carpool-81a9d",
  storageBucket: "carpool-81a9d.firebasestorage.app",
  messagingSenderId: "345976923808",
  appId: "1:345976923808:web:e6a5ef9dd719777c8a0bc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth();


export {app, Auth}