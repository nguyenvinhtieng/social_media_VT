import React from 'react'
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ children, isAuthenticated, ...rest }) {
    if (!isAuthenticated) return <Navigate to="/login" />
    return (
        <Route
            {...rest}
            element={children}
        />
    );
}

export default PrivateRoute
