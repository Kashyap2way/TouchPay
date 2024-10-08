// src/components/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ toggleTheme }) {
const navigate = useNavigate();

const handleLogin = () => {
    // For now, just redirect to the dashboard on login button click
    navigate('/dashboard');
};

return (
        <div className="login-container">
        <h1>Banking App Login</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button onClick={handleLogin}>Login</button>
        <button onClick={toggleTheme}>Toggle Dark Mode</button>
        </div>
    );
}

export default Login;
