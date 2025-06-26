import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

type User = {
    userId: number;
    username: string;
};

type AuthContextType = {
    user: User | null;
    loading: boolean;
    login: (username: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType|undefined>(undefined);

type AuthProviderProps = {
    children: any;
};

export function AuthProvider({children}:AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    //sjekker om vi er logga inn på render
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

    async function login(username: string, password:string) {
        await axios.post("/users/user-login",
            {username, password},{withCredentials:true}
        );

        const res = await axios.get("/users/me",{withCredentials:true});

        setUser(res.data.user);
    };

    async function logout() {
        await axios.post("/users/user-logout", {}, { withCredentials: true });
        setUser(null);
    };


    return (
        <AuthContext.Provider value={{user,login,logout,loading}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth error");
    }
    return context;
}