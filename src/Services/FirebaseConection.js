// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLTzAe1amgmsBaJvc4cnDtQbUHnBRp_wI",
  authDomain: "my-task-list-7f887.firebaseapp.com",
  projectId: "my-task-list-7f887",
  storageBucket: "my-task-list-7f887.appspot.com",
  messagingSenderId: "144521362297",
  appId: "1:144521362297:web:f94d36c842c069c611cda8",
  measurementId: "G-2TW21TSXLN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase