// Login Component
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "/src/components/login.css"

export default function Login ({ setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (evt) => {
        evt.preventDefault();

        const data = {
            email: email,
            password: password,
        };

        const response = await fetch("/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            setMessage('Invalid email or password. Please try again.');
        } else {
            setMessage('Welcome back! Login successful');
            setUser(email);
            navigate('/' , { state: { message: 'Welcome back! Login successful' } });
        }
    };

return (
    <div className="login-container">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleLogin} className="login-form">
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(evt) => setEmail(evt.target.value)}
                required
                className="login-input"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}
                required
                className="login-input"
            />
            <button type="submit" className="login-button">Login</button>
        </form>
        {message && <p className="login-message">{message}</p>}
    </div>
);
}

