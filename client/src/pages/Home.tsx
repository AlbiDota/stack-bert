import UserStatus from "../components/UserStatusComp/UserStatus";
import UserSignup from "../components/UserSignupComp/UserSignup";
import UserLogin from "../components/UserLoginComp/UserLogin";
import UserList from "../components/UserListComp/UserList";

function Home() {

    return (
    <div>
        <div>stack-bert!</div>
        <UserStatus/>
        <UserSignup/>
        <UserLogin/>
        <UserList/>
    </div>
    );
}

export default Home;