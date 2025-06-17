import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function MainLayout() {
    return (
        <div>
            <Navbar />
            <main style={{minHeight:"100vh"}}>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout;