// Login Component
import React, { useState } from 'react';

export default function Login ({ setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

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
            const result = await response.json();
            setMessage(`Welcome back, ${result.message}`);
            setUser(email);
        }
    };
            
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
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
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

