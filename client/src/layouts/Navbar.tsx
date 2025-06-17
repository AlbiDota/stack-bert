import React from "react";
import "./Layout.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nabar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/lol">LoL API</Link></li>
            </ul>

        </nav>
    )
}

export default Navbar;