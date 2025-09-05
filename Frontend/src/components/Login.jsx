// Login Component
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "/src/components/login.css";
import API_BASE_URL from '../config';

export default function Login({ setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (evt) => {
        evt.preventDefault();
        setMessage('');

        const data = { email, password };

        try {
            const response = await fetch(`${API_BASE_URL}/api/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const result = await response.json().catch(() => ({}));
                setMessage(result.message || 'Invalid email or password. Please try again.');
                return;
            }

            setMessage('Welcome back! Login successful');
            setUser(email);
            navigate('/', { state: { message: 'Welcome back! Login successful' } });
        } catch (err) {
            console.error('Login network error:', err);
            setMessage('Network error. Please check the server connection.');
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
