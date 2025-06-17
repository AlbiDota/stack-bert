import React, { useState } from "react";
import axios from "axios";

export default function UserLogin(){
    //const {username, password} = req.body;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            await axios.post("/users/user-login",{username,password});
            
            
            //if (res.status===200){}

        } catch (err) {
            alert("Login credentials are wrong!!!")
        }
    }

    return (
        <div className="login-wrapper">
            <h1>Log in</h1>
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
                <button type="submit">Log in</button>
            </form>
        </div>
    );
};