import ForumPost from "../components/ForumRelatedComps/ForumPostComp/ForumPost";
import ForumSubmitPost from "../components/ForumRelatedComps/ForumPostComp/ForumSubmitPostComp/ForumSubmitPost";
import { useAuth } from "../utils/AuthContext";
import "./Pages.css";
import { useState } from "react";

const Forums = () => {
    const {user, loading} = useAuth();

    return(<div className="forums-page-wrapper">
         <div className="forums-main">{/* main content */}
            <h1>Forum!</h1>
            <ForumSubmitPost/>
            <ForumPost/>
        </div>
        <div className="forums-side">{/* side content */}

        </div>
    </div>)
}

export default Forums;