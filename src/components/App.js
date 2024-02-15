//import logo from './logo.svg';

import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from './homePage.js';

import './index.css';

import { AddListing } from './addListing.js';
import { Navbar } from './NavBar';
import { Login } from './Login';
import { SignUp } from './Signup';

function App(props) {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SnackSwap</h1>
        </header>
        <Navbar />
        {/* <Homepage />  */}
        {/* <AddListing /> */}

      {/* For routing  */}
        <Routes> 
          <Route path="home" element={<Homepage />}/> 
          <Route path="addListing" element={<AddListing />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Navigate to="/home" />}/>
        </Routes>
      </div>
         
    );
}

export default App;

