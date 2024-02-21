// src/SignUp.js
import React, { useState } from 'react';
import { app } from '../firebase'; // Ensure this path matches where your firebase.js is located
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] = useState('');

 const handleSubmit = async (event) => {
   event.preventDefault();
   setError('');
   try {
     await createUserWithEmailAndPassword(getAuth(app), email, password);
     console.log('User account created & signed in!');
     setEmail('');
     setPassword('');
     // Redirect to your desired page after successful sign up
   } catch (error) {
     setError("Failed to create an account: " + error.message);
   }
 };

 return (
    <div>
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
 };
 
 export {SignUp};