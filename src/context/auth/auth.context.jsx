import React, { createContext, useState, useEffect, useContext } from 'react'


export const AuthContext = createContext({
    token: null,
    currentUser: null,
    isAuthenticated: false,
    isAdmin: false,
    isEditor: false,
    getToken: () => { },
    logout: () => { }
})

export const useAuthContext = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("accessToken") || null)
    const [currentUser, setCurrentUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("accessToken") ? true : false)

    const getToken = (token) => {
        setToken(token)
        localStorage.setItem("accessToken", token)
        setIsAuthenticated(true)
    }

    const logout = (callback = () => {}) => {
        localStorage.removeItem("accessToken")
        setCurrentUser(null)
        setIsAuthenticated(false)
        callback()
    }

    console.log(token)
    console.log(isAuthenticated)

    return (
        <AuthContext.Provider
            value={{
                token,
                currentUser,
                isAuthenticated,
                getToken,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider