// User Registration
import React, { useState } from 'react';

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
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={(evt) => setUserName(evt.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(evt) => setEmail(evt.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(evt) => setPassword(evt.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}
