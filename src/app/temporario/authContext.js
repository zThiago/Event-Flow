import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({children}) {
    const [users, setUsers] = useState([{ email: "", senha:""}]);

    function addUser(novoUsuario){
        setUsers((users) => [...users, novoUsuario])
    }

    return (
        <AuthContext.Provider value={{ users, addUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}