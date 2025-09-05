// User Registration
import React, { useState } from 'react';
import "/src/components/login.css";
import API_BASE_URL from '../config';

export default function Register() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (evt) => {
        evt.preventDefault();
        setMessage(''); 

        const data = {
            user_name: userName,
            email: email,
            password: password,
        };

        try {
            const response = await fetch(`${API_BASE_URL}/api/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(data),
            });

            
            const result = await response.json().catch(() => ({}));

            if (response.ok) {
                setMessage('Registration successful! Please log in.');
                setUserName('');
                setEmail('');
                setPassword('');
            } else {
                setMessage(result.message || 'User already exists. Please login.');
            }
        } catch (error) {
            console.error('Registration error:', error);
            setMessage('Network error. Please check the server connection.');
        }
    };

    return (
        <div className="login-container">  
            <h2 className="login-title">Register</h2> 
            <form onSubmit={handleRegister} className="login-form">  
                <input
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={(evt) => setUserName(evt.target.value)}
                    required
                    className="login-input"  
                />
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
                <button type="submit" className="login-button">Register</button>  
            </form>
            {message && <p className="login-message">{message}</p>}  
        </div>
    );
}
