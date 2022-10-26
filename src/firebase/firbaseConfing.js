// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClW_07f1lAUp7tFrMuVcV_qfznDbGPMqI",
  authDomain: "shikka-guru.firebaseapp.com",
  projectId: "shikka-guru",
  storageBucket: "shikka-guru.appspot.com",
  messagingSenderId: "671919822367",
  appId: "1:671919822367:web:b5998274839086a69a272a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;