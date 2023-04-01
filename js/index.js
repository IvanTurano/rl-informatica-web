// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3ZurBUF5st7nX5-0Hyptjjs0MwO3mSvg",
  authDomain: "pag-rlinformatica.firebaseapp.com",
  projectId: "pag-rlinformatica",
  storageBucket: "pag-rlinformatica.appspot.com",
  messagingSenderId: "821571186763",
  appId: "1:821571186763:web:461aca965f0ff9313b1dce",
  measurementId: "G-2S155YQHJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log("hola mundo");