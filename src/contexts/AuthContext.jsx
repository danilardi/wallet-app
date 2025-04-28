import { createContext, useContext, useEffect, useState } from "react";
import { login } from "../../utils/api/auth";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const user = localStorage.getItem("user")
        if (user) {
            setCurrentUser(JSON.parse(user))
        }
        setLoading(false)
    }, [])

    const loginUser = async ({username, password}) => {
        await login({ username, password }).then((res) => {
            setCurrentUser(res)
            localStorage.setItem("user", JSON.stringify(res));
            return { success: true }
        }).catch((err) => {
            return { success: false, message: err.message }
        })
    }

    const logoutUser = () => {
        setCurrentUser(null)
        localStorage.removeItem("user")
    }

    const value = {
        currentUser,
        login: loginUser,
        logout: logoutUser,
        isAuthenticated: !!currentUser,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}