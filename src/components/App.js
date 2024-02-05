//import logo from './logo.svg';

import React from 'react';
import ReactDOM from "react-dom/client";
import Homepage from './homePage.js';
import './index.css';


function App(props) {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SnackSwap</h1>
        </header>
        <Homepage snackSwap={props.snackSwap}></Homepage>

      </div>
    );
}

export default App;

