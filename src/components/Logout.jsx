import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const Logout = () => {
 const navigate = useNavigate();

 const handleLogout = async () => {
   try {
     const auth = getAuth();
     await signOut(auth);
     console.log('User logged out successfully');

     navigate('/home');
   } catch (error) {
     console.error('Logout failed:', error);
   }
 };

 return (
   <button className="logout-button" onClick={handleLogout}>Logout</button>
 );
};

export default Logout;