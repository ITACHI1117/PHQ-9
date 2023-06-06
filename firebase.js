// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { ref } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdr4SpTUbizDrLNPb2ox7cDDCWiaSoBEE",
  authDomain: "phq-9-511f6.firebaseapp.com",
  databaseURL: "https://phq-9-511f6-default-rtdb.firebaseio.com",
  projectId: "phq-9-511f6",
  storageBucket: "phq-9-511f6.appspot.com",
  messagingSenderId: "310172291535",
  appId: "1:310172291535:web:292dddc1f495bacdcbc2ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const database = getDatabase(app);
const reference = ref;
export { app, auth, database, storage, reference };
