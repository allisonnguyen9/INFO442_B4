import React, { useState } from 'react';
import { app } from '../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] = useState('');
 const navigate = useNavigate();

 const handleSubmit = async (event) => {
   event.preventDefault();
   setError('');
   try {
     await signInWithEmailAndPassword(getAuth(app), email, password);
     console.log('User signed in!');
     setEmail('');
     setPassword('');
     
     navigate('/home');
   } catch (error) {
     setError("Failed to sign in: " + error.message);
   }
 };

 return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Sign In</h2>
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
        <p className="create-account-link">Don't have an account? <Link to="/signup">Create Account</Link></p>
      </div>
    </div>
  );
 };
 
 export { Login };