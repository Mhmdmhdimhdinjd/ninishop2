import React from "react";
import Signup from './Signup'
import Login from './Login';

const Profile = () => {



    const storedUser = JSON.parse(localStorage.getItem('user'));


    return (

        <>

            {storedUser ? <Login />

                :

                <Signup />

            }
        </>
    )
}

export default Profile