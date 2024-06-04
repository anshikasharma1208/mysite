// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD-iI9wX40jPGGVCODymf0JvFNWKtBmI0s",
  authDomain: "mysite01-39f88.firebaseapp.com",
  databaseURL: "https://mysite01-39f88-default-rtdb.firebaseio.com",
  projectId: "mysite01-39f88",
  storageBucket: "mysite01-39f88.appspot.com",
  messagingSenderId: "237063900359",
  appId: "1:237063900359:web:8991f3992af844197282e2",
  measurementId: "G-YC41ERP09X"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword };
