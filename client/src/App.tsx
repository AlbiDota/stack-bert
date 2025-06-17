import React, {useState} from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Summoner from "./pages/Summoner";

const App = () => {


    return (
        <BrowserRouter>

            <Routes>
                <Route element={<MainLayout />}>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/lol"} element={<Summoner />} />
                </Route>
                
            </Routes>
        </BrowserRouter>
    )
};

export default App;