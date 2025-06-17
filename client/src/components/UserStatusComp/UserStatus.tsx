import React, { useState } from "react";
import axios from "axios";


export default function UserStatus(user:object) {


    return (
        <div>
            {!user ? <div style={{color:"red"}}>Offline</div>
                :  <div style={{color:"green"}}>Online</div>}
        </div>
    );
};