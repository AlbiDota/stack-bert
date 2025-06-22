import "./Pages.css";
import { useState } from "react";
import UserStatus from "../components/UserStatusComp/UserStatus";
import UserSignup from "../components/UserAuthComp/UserSignupComp/UserSignup";
import UserLogin from "../components/UserAuthComp/UserLoginComp/UserLogin";
import UserList from "../components/UserListComp/UserList";


function Home() {
    const [authDisplay, setAuthDisplay] = useState<boolean>(true);

    return (
    <div className="home-wrapper">
        <div className="home-side"/>
        <div className="home-main">
            <h2>stack-bert!</h2>
            <UserStatus />
            {authDisplay ? <UserSignup /> : <UserLogin />}
            <button onClick={()=>setAuthDisplay(!authDisplay)}>
                {authDisplay? "Go to login" : "Create an account"}
            </button>
        </div>
        <div className="home-side">
            <UserList />
        </div>
    </div>
    );
}

export default Home;