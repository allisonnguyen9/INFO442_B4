import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App.js';
import './components/index.css';
import SAMPLE_Food from './data/food.json';


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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App snackSwap={SAMPLE_Food}/>
  </React.StrictMode>
);