// Firebase
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLPY1dmLTbhzf-5OWme7J4uWSsIgzCW7M",
  authDomain: "campuscraves-d369e.firebaseapp.com",
  projectId: "campuscraves-d369e",
  storageBucket: "campuscraves-d369e.appspot.com",
  messagingSenderId: "402361959840",
  appId: "1:402361959840:web:86f226d5315893e46210c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export {app};