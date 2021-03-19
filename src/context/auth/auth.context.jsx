import React, { createContext, useState } from 'react'

export const AuthContext = createContext({
    currentUser: null,
    isAuthenticated: false,
    login: () => { },
    logout: () => { }
})

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const login = (callback) => {
        const user = { name: "Richard" }
        setCurrentUser(user)
        setIsAuthenticated(true)
        callback(user)
    }

    const logout = (callback) => {
        setCurrentUser(null)
        setIsAuthenticated(true)
        callback()
    }

    return (
        <AuthContext.Provider
            value={{
                currentUser,
                isAuthenticated,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider