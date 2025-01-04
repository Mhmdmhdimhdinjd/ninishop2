import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/reducers/AuthSlice';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = () => {
    let redirectPath = localStorage.getItem('userredirect') ;


    const user = { username, password };
    dispatch(registerUser(user));
    navigate(redirectPath || '/ninishop2/home');
    localStorage.removeItem('userredirect')
    redirectPath = null
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4">ثبت‌نام</h1>
      <input
        type="text"
        placeholder="نام کاربری"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-2 p-2 border rounded"
      />
      <input
        type="password"
        placeholder="رمز عبور"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2 p-2 border rounded"
      />
      <button onClick={handleSignup()} className="bg-blue-500 text-white p-2 rounded">
        ثبت‌نام
      </button>
    </div>
  );
};

export default Signup;
