// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1VCZhfAvImy-k9TXv6s5NoEmu6XNwg98",
  authDomain: "coderhousereact37070.firebaseapp.com",
  projectId: "coderhousereact37070",
  storageBucket: "coderhousereact37070.appspot.com",
  messagingSenderId: "281608547573",
  appId: "1:281608547573:web:3a8eec0d2a7f9ffa8da9bc",
  measurementId: "G-VR4B7R1JJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);