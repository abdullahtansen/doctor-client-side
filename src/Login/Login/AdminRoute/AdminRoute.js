import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const AdminRoute = ({ children }) => {
    const {user,admin,isLoading} = useAuth();
    let location = useLocation();
    
    if(isLoading){return<CircularProgress></CircularProgress>}
  
    if (!user.email && admin) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/" state={{ from: location }} replace />;
    }
  
    return children;
};

export default AdminRoute;