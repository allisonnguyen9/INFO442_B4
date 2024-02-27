import React from 'react';
import { Login } from './Login';
import { SignUp } from './Signup';

const AuthPage = () => {
    return (
        <div>
            <Login />
            <SignUp />
        </div>
    );
};

export default AuthPage;