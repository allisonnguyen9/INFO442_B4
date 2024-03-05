import React, { useState } from 'react';
import { Login } from './Login';
import { SignUp } from './Signup';
import Logout from './Logout';

const AuthPage = () => {
    const [showSignUp] = useState(false);

    return (
        <div>
            <div>
                <Login />
                {showSignUp && <SignUp />}
            </div>
        </div>
    );
};

export default AuthPage;