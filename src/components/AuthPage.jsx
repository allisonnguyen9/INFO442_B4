import React, { useState } from 'react';
import { Login } from './Login';
import { SignUp } from './Signup';

const AuthPage = () => {
    const [showSignUp] = useState(false);

    return (
        <div>
            <Login />
            {showSignUp && <SignUp />}
        </div>
    );
};

export default AuthPage;