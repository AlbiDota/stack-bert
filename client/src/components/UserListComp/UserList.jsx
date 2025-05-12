import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserList() {
    const [data, setData] = useState([]);

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
        <div>
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
                            <td>{val.username}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );

};