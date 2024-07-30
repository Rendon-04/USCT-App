import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

// Login component 


const Login = ({ onLogin }) => {
    // State variables for email and passsword 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 
    // Form submission event handler 
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        setError(''); //clear all previous errors 

        try {
            // Send a POST request to /login with email and password 
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password }),

            });
            // Parse the JSON response from the server 
            const result = await response.json()

            if(response.ok) {
                // Handle successful login
                onLogin(result.userName)
                navigate('/');
            } else {
                setError(result.message)
            }
        }   catch (error) {
            console.error("Error during login:", error);
            setError("An error occured. Please try again.")
        }
    };
    
    // Render the Login form
    return(
    <div>
            <h1>Login</h1>
            {/* Event handler */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                {/* Update the state variable 'email' with the new value of the input field */}
                <input type="email" id="email" value={email} onChange={(evt)=> setEmail(evt.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                {/* Update the state variable 'password' with the new value of the input field */}
                <input type="password" id="password" value={password} onChange={(evt) => setPassword(evt.target.value)}/>
            </div>
            <button type="submit">Login</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    </div>
    );
};

export default Login;