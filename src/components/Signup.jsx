import React, { useState } from 'react';
import { app } from '../firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] = useState('');
 const navigate = useNavigate();

 const handleSubmit = async (event) => {
   event.preventDefault();
   setError('');
   try {
     await createUserWithEmailAndPassword(getAuth(app), email, password);
     console.log('User account created & signed in!');
     setEmail('');
     setPassword('');

     navigate('/home');

   } catch (error) {
     setError("Failed to create an account: " + error.message);
   }
 };

 return (
    <div className="auth-container">
      <div className="auth-form">
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
 };
 
 export {SignUp};