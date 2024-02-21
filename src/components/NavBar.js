import React from 'react';
import { Link } from "react-router-dom";
import ClaimIcon from '../data/icons/basket.png'; 

function Navbar (props) {
    return (
        <nav>
            <div className="navbar">
                    <ul className="nav-container">
                        <li><Link to="/home" className="nav-contents">Home</Link></li>
                        <li><Link to="/login" className="nav-contents">Login</Link></li>
                    </ul>
                {/* <a><Link to="/claim" className="nav-claim">C</Link></a> */}
                <Link to="/claim">
                    <img src= {ClaimIcon} alt="Claim Icon" className='nav-contents' style={{ width: '24px', height: '24px' }} />
                </Link>
            </div>
        </nav>
    )
}

export { Navbar };