import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { app } from '../firebase';
import { getAuth } from 'firebase/auth'

import "../src/components/index.css";

export const Nav = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   useEffect(() => {
       // Listener for authentication state
       const unsubscribe = getAuth(app).onAuthStateChanged(user => {
           if (user) {
               // User is signed in
               setIsLoggedIn(true);
           } else {
               // User is signed out
               setIsLoggedIn(false);
           }
       });
       return () => unsubscribe();
   }, []);

   return (
    <div>
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/" className="active">Home</Link>
                </li>
                
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li> 
                {isLoggedIn ? (
                    // Show this link only if the user is logged in
                    <li>
                        <Link to="/usersonly">Users Only</Link>
                    </li>
                   
                ) : (
                    // Show this link if the user isn't logged in
                    <></>
                )}
                <li>
                        <Link to="/auth">Login</Link>
                    </li>
            </ul>
        </nav>
    </div>
);
};

