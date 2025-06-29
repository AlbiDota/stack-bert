import { useEffect, useState } from "react";
import "./ForumPost.css"
import { useAuth } from "../../../utils/AuthContext";
import axios from "axios";

interface Post {
    post_id: number;
    created_at: string;
    last_edited: string;
    postcreator: string;
    title: string;
    postcontent: string;
}

export default function ForumPost() {
    const {user} = useAuth();
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(()=> {
        async function getPosts() {
            try {
                const res = await axios.get("/forum/get-all");
                console.log("Forum posts response:", res.data);
                setPosts(res.data);
            } catch(err) {
                console.error(err);
            }
        }

        getPosts();
        
    },[user])


    return (
        <div>
            {Array.isArray(posts) ? posts.map((obj) => 
                <div className="forum-post" key={obj.post_id}>
                    <div className="post-header">
                        <h2>{obj.title}</h2> <small>by: {obj.postcreator}</small>
                    </div>
                    <div className="post-body">
                        <small>Created at: <time>{obj.created_at}</time></small>
                        {obj.created_at!=obj.last_edited?
                            <small> (Edited <time>{obj.last_edited}</time>)</small>
                        :null}
                        <p>{obj.postcontent}</p>
                    </div>
                </div>
            ):<p>Loading...</p>}
        </div>
    )
}