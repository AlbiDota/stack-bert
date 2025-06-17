import React, {useState} from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from "./pages/Home.tsx";
import MainLayout from "./layouts/MainLayout.tsx";

const App = () => {


    return (
        <BrowserRouter>

            <Routes>
                <Route element={<MainLayout />}>
                    <Route path={"/"} element={<Home />} />

                </Route>
                
            </Routes>
        </BrowserRouter>
    )
};

export default App;