import React from "react";
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ loggedIn, component: Component, ...props }) => {
    return (
        <Route {...props }>
            {loggedIn ? <Component {... props} /> : <Redirect to="/." />}
        </Route>
        
    )
}

export default ProtectedRoute;