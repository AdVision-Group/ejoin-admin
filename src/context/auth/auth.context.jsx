import React, { createContext, useState, useEffect, useContext } from "react"
import { client } from "../../index"
import jwt_decode from "jwt-decode"

export const AuthContext = createContext({
	userID: null,
	token: null,
	currentUser: null,
	isAuthenticated: false,
	isAdmin: false,
	isEditor: false,
	getToken: () => {},
	logout: () => {},
})

export const useAuthContext = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(
		localStorage.getItem("accessToken") || null
	)
	const [currentUser, setCurrentUser] = useState(null)
	const [userID, setUserID] = useState(localStorage.getItem("userId") || null)
	const [isAuthenticated, setIsAuthenticated] = useState(
		localStorage.getItem("accessToken") ? true : false
	)

	const getToken = (token) => {
		setToken(token)
		const user = jwt_decode(token)
		console.log(user)
		setUserID(user.sub)
		localStorage.setItem("userId", user.sub)
		localStorage.setItem("accessToken", token)
		setIsAuthenticated(true)
		client.resetStore()
	}

	const logout = (callback = () => {}) => {
		localStorage.removeItem("accessToken")
		localStorage.removeItem("userId")
		setCurrentUser(null)
		setIsAuthenticated(false)
		setUserID(null)
		callback()
		client.resetStore()
	}

	useEffect(() => {
		if (!token) return
		console.log("TOKEN VERIFICATION START")
		const dToken = jwt_decode(token)
		if (Date.now() >= dToken.exp * 1000) {
			console.log("TOKEN IS EXPIRED")
			return logout()
		}
		console.log("TOKEN VERIFICATION END")
	}, [token])

	// console.log(token)
	// console.log(isAuthenticated)

	return (
		<AuthContext.Provider
			value={{
				userID,
				token,
				currentUser,
				isAuthenticated,
				getToken,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
