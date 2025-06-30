import React from "react";
import "./Layout.css";
import { Link } from "react-router-dom";
import UserStatus from "../components/UserRelatedComps/UserStatusComp/UserStatus";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/lol">LoL API</Link></li>
                <li><Link to="/Forums">Forums</Link></li>
            </ul>
            
            <ul className="navbar-right-side">
                <li><UserStatus/></li>
            </ul>
        </nav>
    )
}

export default Navbar;