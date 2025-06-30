import React, { useState } from "react";
import axios from "axios";
import {useAuth} from "../../../utils/AuthContext";

export default function UserStatus() {
    const { user, logout, } = useAuth();
    
    return (
        <div style={{display:"inline"}}>
            {!user ? <div style={{color:"red"}}>Offline</div>
                :  <div style={{color:"green"}}>Online</div>}

            {user ? (
                <>
                    <span>Welcome, {user.username}</span><br/>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <span>You are not logged in</span>
            )}
        </div>
    );
};