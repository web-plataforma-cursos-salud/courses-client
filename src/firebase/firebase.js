// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUfWEMyVNYxWMpyaHgFFA9LNwjneMno4s",
  authDomain: "cursossalud-83753.firebaseapp.com",
  projectId: "cursossalud-83753",
  storageBucket: "cursossalud-83753.appspot.com",
  messagingSenderId: "472126299541",
  appId: "1:472126299541:web:764e74639372e04d552a9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
