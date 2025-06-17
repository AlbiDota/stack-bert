import React from "react";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <div>
            <main style={{minHeight:"100vh"}}>
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout;