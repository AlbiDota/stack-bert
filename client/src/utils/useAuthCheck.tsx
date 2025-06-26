import axios from "axios";
import { useEffect, useState } from "react";

export default function useAuthCheck() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("/users/me", {withCredentials:true})
        .then(
            (res)=>{setUser(res.data.user);}
        )
        .catch(
            ()=>{setUser(null)}
        )
        .finally(
            ()=>{setLoading(false)}
        )

    },[]);

    return {user, loading};

}