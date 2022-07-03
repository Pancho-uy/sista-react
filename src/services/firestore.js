// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, getDocs, getDoc, doc, collection} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1VCZhfAvImy-k9TXv6s5NoEmu6XNwg98",
  authDomain: "coderhousereact37070.firebaseapp.com",
  projectId: "coderhousereact37070",
  storageBucket: "coderhousereact37070.appspot.com",
  messagingSenderId: "281608547573",
  appId: "1:281608547573:web:3a8eec0d2a7f9ffa8da9bc",
  measurementId: "G-VR4B7R1JJZ"
};

// Inicializamos Firebase
const appFirebase = initializeApp(firebaseConfig);
// Inicializamos Firestore
const appFirestore = getFirestore(appFirebase);

// Test
export function testDatabase(){
  console.log(appFirestore);
}