// User Registration
import React, { useState } from 'react';
import "/src/components/login.css"

export default function Register () {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (evt) => {
        evt.preventDefault();

        // Create the data object with user inputs
        const data = {
            user_name: userName,
            email: email,
            password: password,
        };

        const response = await fetch("/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
            setMessage('Registration successful! Please log in.');
        } else {
            setMessage(result.message || 'User already exists. Please login.');
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