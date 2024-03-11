import React from 'react';
import { Link } from "react-router-dom";
import Logout from './Logout';

function Navbar (props) {
    
    return (
        <nav>
            <div className="navbar">
                    <ul className="nav-container">
                        <li><Link to="/home" className="nav-contents">Home</Link></li>
                        <li><Link to="/addListing" className='nav-contents'> Add Listing</Link></li>
                        <li><Link to="/claim" className="nav-contents">My Claims</Link></li>
                        <li><Link to="/resources" className="nav-contents">Resources</Link></li>
                        <li><Link to="/auth" className="nav-contents">Login</Link></li>
                    </ul>
                    <Logout />
            </div>
        </nav>
    )
}

export { Navbar };