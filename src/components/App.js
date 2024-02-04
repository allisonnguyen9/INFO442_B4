//import logo from './logo.svg';

import React from 'react';
import { Homepage } from './homePage.js';
//import './App.css';
import React from 'react';
import Homepage from './homePage.js';


function App(props) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>hello</h1>
          <Homepage furni={props.furni}></Homepage>
        </header>
      </div>
    );
}

export default App;

