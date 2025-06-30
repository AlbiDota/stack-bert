import ForumPost from "../components/ForumRelatedComps/ForumPostComp/ForumPost";
import ForumSubmitPost from "../components/ForumRelatedComps/ForumPostComp/ForumSubmitPostComp/ForumSubmitPost";
import UserList from "../components/UserRelatedComps/UserListComp/UserList";
import UserLogin from "../components/UserRelatedComps/UserLoginComp/UserLogin";
import { useAuth } from "../utils/AuthContext";
import "./Pages.css";
import { useState } from "react";

const Forums = () => {
    const {user, loading} = useAuth();

    return(<>
        <h1 style={{display:"flex",justifyContent:"center"}}>Forum!</h1>
        <div className="forums-page-wrapper">
            <div className="forums-main">{/* main content */}
                <ForumPost/>
            </div>
            <div className="forums-side">{/* side content */}
                {user?<ForumSubmitPost/>:<UserLogin/>}
                <UserList/>
            </div>
        </div>
    </>)
}

export default Forums;