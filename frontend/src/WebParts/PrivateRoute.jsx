import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth0();

    console.log(isAuthenticated);

    if (isLoading) {
        return <div>Loading...</div>; 
    }

    return isAuthenticated ? children : <Navigate to="/student-dashboard" />;
};

export default PrivateRoute;