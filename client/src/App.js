import React, {useState} from "react";
import axios from "axios";
import RegisterUser from "./components/RegisterUserComp/RegisterUser";
import UserList from "./components/UserListComp/UserList";

const App = () => {
  return (<>
    
    <div>stack-bert!</div>
    <RegisterUser/>
    <UserList/>
  </>)
};

export default App;