//import logo from './logo.svg';

import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from './homePage.js';
import './index.css';

import { AddListing } from './addListing.js';


function App(props) {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SnackSwap</h1>
        </header>
        {/* <Homepage />  */}
        {/* <AddListing /> */}

      {/* For routing  */}
        <Routes> 
          <Route path="home" element={<Homepage />}/> 
          <Route path="addListing" element={<AddListing />}/>
          <Route path="*" element={<Navigate to="/home" />}/>
        </Routes>
      </div>
         
    );
}

export default App;

