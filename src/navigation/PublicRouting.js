import React from 'react'
import { Route, Navigate } from 'react-router-dom'

export const PublicRouting = ({ element: Component, auth, ...rest }) => {
    return (
        <Route {...rest} render={(props) => auth ? <Navigate to='/' /> : <Component {...props} />} />
    )
}
