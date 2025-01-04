import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login'

const Profile = () => {


    const storedUser = JSON.parse(localStorage.getItem('user')) || null;
    const logeduser = useSelector((state) => state.auth.logeduser);
    let redirectPath = localStorage.getItem('userredirect');


    if (storedUser === null) {
        return (
            <Signup />
        );
    } else if (logeduser === null) {
        return (

            <Login />
        )
    }

    return (

        

        <Navigate to={redirectPath === "/ninishop2/profile" ? '/ninishop2/home' : redirectPath} />

    )
};

export default Profile;
