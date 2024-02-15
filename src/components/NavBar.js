import React from 'react';
import { Link } from "react-router-dom";

function Navbar (props) {
    return (
        <nav>
            <div className="navbar">
                <ul className="nav-container">
                    <li><Link to="/home" className="nav-contents">Home</Link></li>
                    <li><Link to="/login" className="nav-contents">Login</Link></li>
                </ul>
            </div>
        </nav>

    )
}

export { Navbar };