// src/components/Login.js (Updated)
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ toggleTheme }) {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const navigate = useNavigate();

const handleLogin = async () => {
    try {
    const response = await axios.post('https://gatewaybackend-rnyw.onrender.com/login', { username, password });
    console.log(response.data);  // You can set user data in the state here
    navigate('/dashboard');
    } catch (error) {
    setError('Login failed');
    }
};

return (
    <div className="login-container">
    <h1>Banking App Login</h1>
    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
    {error && <p style={{ color: 'red' }}>{error}</p>}
    <button onClick={handleLogin}>Login</button>
    <button onClick={toggleTheme}>Toggle Dark Mode</button>
    </div>
);
}

export default Login;
