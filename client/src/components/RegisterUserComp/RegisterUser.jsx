import React, { useState } from "react";
import axios from "axios";

export default function RegisterUser(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); //for å ikke refreshe sia
        try { //adressa ligger i package.json under "proxy"
            await axios.post("/users/adduser",{username, password});
            alert("User " + username + " created!");
        } catch (err) {
            console.error(err);
            alert("Failed to create user!");
        }
    }

    return (
        <div className="register-wrapper">
            <h1>Create user</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="Username" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)}/>
                <br/>
                <input placeholder="Password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                    type="password"/>
                <br/>
                <button type="submit" >Submit</button>
            </form>
        </div>
    );
};