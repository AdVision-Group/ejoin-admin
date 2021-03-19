import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth/auth.context'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...otherProps }) => {
    const { isAuthenticated } = useContext(AuthContext)

    return (
        <Route {...otherProps} render={
            (props) => {
                if (isAuthenticated) {
                    return <Component {...props} />
                } else {
                    return <Redirect to='/' />
                }
            }
        } />
    )
}

export default ProtectedRoute
