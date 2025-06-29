import React, { useState } from "react";
import { useAuth } from "../../../../utils/AuthContext";
import "../ForumPost.tsx";
import axios from "axios";

interface Post {
    postcreator: string;
    title: string;
    content: string;
}

export default function ForumSubmitPost() {
    const user = useAuth();
    const [post, setPost] = useState<Post>({
        postcreator:"",
        title:"",
        content:""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setPost((prevPost : any) => ({
            ...prevPost, //forrige post fields
            [name]: value //endrer oppgitt field(name) til value(value)
        }));
    }

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post("/forum/create-post",{
                ...post, postcreator:user.user?.username});
            console.log("Post submitted: "+ post);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="forum-submit-post">
            <form onSubmit={handleSubmit}>
                <input
                    name="title"
                    type="text"
                    placeholder="title"
                    value={post.title}//||'' som fallback hvis den er null *scrapped
                    onChange={handleChange}
                />
                <textarea
                    name="content"
                    placeholder="content"
                    value={post.content}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}