import React, {useState} from "react";
import axios from "axios";
import UserSignup from "./components/UserSignupComp/UserSignup";
import UserList from "./components/UserListComp/UserList";
import UserStatus from "./components/UserStatusComp/UserStatus";
import UserLogin from "./components/UserLoginComp/UserLogin";

const App = () => {
  return (<>
    
    <div>stack-bert!</div>
    <UserStatus/>
    <UserSignup/>
    <UserLogin/>
    <UserList/>
  </>)
};

export default App;