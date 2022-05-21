import { Route, Navigate } from 'react-router-dom'
export const PrivateRouting = ({ auth, children, ...rest }) => {
    return (
        <Route {...rest} render={() => auth ? children : <Navigate to={'/login'} />} />
    )
}