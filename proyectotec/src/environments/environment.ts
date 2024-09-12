// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyD_wMl-1vAnu6tgc6nBtFNDapCx9jsymMA",
  authDomain: "semanatec-682d1.firebaseapp.com",
  databaseURL: "https://semanatec-682d1-default-rtdb.firebaseio.com",
  projectId: "semanatec-682d1",
  storageBucket: "semanatec-682d1.appspot.com",
  messagingSenderId: "754258830160",
  appId: "1:754258830160:web:6d2b49316d947632130255"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);