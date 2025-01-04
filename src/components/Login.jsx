import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/reducers/AuthSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    let redirectPath = localStorage.getItem('userredirect');
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      dispatch(loginUser(storedUser));
      navigate(redirectPath || '/ninishop2/home');
      localStorage.removeItem('userredirect')
      redirectPath = null

    } else {
      setError('نام کاربری یا رمز عبور نادرست است');
    }ki
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4">ورود</h1>
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
      {error && <p className="text-red-500">{error}</p>}
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded">
        ورود
      </button>
    </div>
  );
};

export default Login;
