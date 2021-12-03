import {
    Route,
    Navigate
} from 'react-router-dom';

function PublicRoute({ children, isAuthenticated, ...rest }) {
    if (isAuthenticated) return <Navigate to="/" />
    return (
        <Route
            {...rest}
            element={children}
        />
    );
}

export default PublicRoute;