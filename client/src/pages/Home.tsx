import "./Pages.css";
import { useState } from "react";
import UserStatus from "../components/UserRelatedComps/UserStatusComp/UserStatus";
import UserSignup from "../components/UserRelatedComps/UserSignupComp/UserSignup";
import UserLogin from "../components/UserRelatedComps/UserLoginComp/UserLogin";
import UserList from "../components/UserRelatedComps/UserListComp/UserList";


function Home() {
    const [authDisplay, setAuthDisplay] = useState<boolean>(true);

    return (
    <div className="home-wrapper">
        <div className="home-side"/>
        <div className="home-main">
            <h2>stack-bert!</h2>
            <UserStatus />
            {!authDisplay ? <UserSignup /> : <UserLogin />}
            <button onClick={()=>setAuthDisplay(!authDisplay)}>
                {!authDisplay? "Go to login" : "Create an account"}
            </button>
        </div>
        <div className="home-side">
            <UserList />
        </div>
    </div>
    );
}

export default Home;