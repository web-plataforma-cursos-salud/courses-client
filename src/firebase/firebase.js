// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrQxonszcTSIfeC0u9ZnS0cSYzwZarfak",
  authDomain: "prueba-cursos-salud.firebaseapp.com",
  projectId: "prueba-cursos-salud",
  storageBucket: "prueba-cursos-salud.appspot.com",
  messagingSenderId: "713494026579",
  appId: "1:713494026579:web:704a0a386cb50e18cd69a6",
  measurementId: "G-Z0126JDGYX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
