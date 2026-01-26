import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext()

export function AuthProvider({children}){

    const [user , setUser] = useState(null)
    const [selectedRole , setSelectedRole] = useState(null)
    const [token, setToken] = useState(null)


    useEffect( ()=>{

        const u = localStorage.getItem('user')
        const t = localStorage.getItem('token')

        if(u && t) {

            setUser(JSON.parse(u))
            setToken(t)
        }

    } , [])

    const login = ({userData , jwt}) => {

        localStorage.setItem('user' , JSON.stringify(userData))
        localStorage.setItem('token' , jwt)
        setUser(userData)
        setToken(jwt)
    }

    const logout = () => {
        localStorage.clear()
        setUser(null)
        setSelectedRole(null)
        setToken(null)
    }

    return(
        <AuthContext.Provider value={{
            user,
            token,
            selectedRole,
            setSelectedRole,
            login,
            logout,
            isAuthenticated: !!token
        }}
        >
            {children}
        </AuthContext.Provider>
    )

}


export const useAuth = () => useContext(AuthContext)