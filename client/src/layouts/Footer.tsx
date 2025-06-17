import React from "react";
import "./Layout.css";

const Footer = () => {
    
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    return (
        <div className="footer">
            <button onClick={scrollToTop}>Back to top</button>
        </div>
    )
}

export default Footer;
