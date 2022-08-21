// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8dmqcQQYesWzK0xZMdzhgyvoa__5SRro",
  authDomain: "netflix--clone-806d3.firebaseapp.com",
  databaseURL: "https://netflix--clone-806d3.firebaseio.com",
  projectId: "netflix--clone-806d3",
  storageBucket: "netflix--clone-806d3.appspot.com",
  messagingSenderId: "790787423746",
  appId: "1:790787423746:web:8d0bffdb690f705a59f11b",
  measurementId: "G-G3B11J36BD",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };

/* const handleGoogleSignin = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        setActive("home");
        navigate("/");
      })
      .catch((error) => alert(error.message));
  }; */
