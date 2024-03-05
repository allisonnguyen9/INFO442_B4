import React from 'react';
import { Link } from "react-router-dom";
import ClaimIcon from '../data/icons/basket.png';
import Logout from './Logout';

function Navbar (props) {
    


    return (
        <nav>
            <div className="navbar">
                    <ul className="nav-container">
                        <li><Link to="/home" className="nav-contents">Home</Link></li>
                        <li><Link to="/addListing" className='nav-contents'> Add Listing</Link></li>
                        <li><Link to="/claim" className="nav-contents">My Claims</Link></li>
                        <Link to="/resources" className="nav-contents">Resources</Link>
                        <li><Link to="/auth" className="nav-contents">Login</Link></li>
                    </ul>
                {/* <Link to="/claim">
                    <img src= {ClaimIcon} alt="Claim Icon" className='nav-contents' style={{ width: '24px', height: '24px' }} />
                </Link> */}
                <Logout />
            </div>
        </nav>
    )
}

export { Navbar };