import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();

  if (!user) {
    // ذخیره مسیر فعلی در `localStorage`
    localStorage.setItem('userredirect', location.pathname);
    // هدایت به صفحه پروفایل برای ورود یا ثبت‌نام
    return <Navigate to={'/profile'} />;
  }

  return children;
};

export default PrivateRoute;
