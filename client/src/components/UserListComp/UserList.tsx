import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../utils/AuthContext";

type User = {
    user_id: number;
    username: string;
};

export default function UserList() {
    const [data, setData] = useState<User[]>([]);
    const {user} = useAuth();

    const refreshList = async () => {
        try {
            const response = await axios.get("/users/get-all");
            setData(response.data)
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(()=>{refreshList()},[]);
    return (
        <div><br/>
            <button onClick={refreshList}>Refresh</button>
            <h2>Registered users</h2>
            <table>
                <tr>
                    <th>User ID</th>
                    <th>Username</th>
                </tr>
                {data.map((val,key) => {
                    return (
                        <tr key={key}>
                            <td>{val.user_id}</td>
                            <td>{user && val.username==user.username?val.username + "*":val.username}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );

};