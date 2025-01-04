import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PrivateRoute = ({ children }) => {
  const storedUser = JSON.parse(localStorage.getItem('user')) || null;
  const location = useLocation();
  const logeduser = useSelector((state) => state.auth.logeduser);


  if (storedUser === null || logeduser === null) {
    localStorage.setItem('userredirect', location.pathname);
    return <Navigate to="/ninishop2/profile" />;
  }

  return children;
};

export default PrivateRoute;
