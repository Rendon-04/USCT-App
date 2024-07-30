import React from "react";

//  Register component 


function Register () {
    // State variables for username, email, and password 
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Form submission event handler 
    const handleSubmit = (evt) => {
        evt.preventDefault();
        // Add code to handle registration
        console.log('Username:', userName, 'Email:', email, 'Password:', password);
    };
    // Render the registration form 
    return (
        <div>
            <h1>Register</h1>
            {/* Set the event handler */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    {/* Update the state variable 'userName' with the new value of the input field */}
                    <input type="text" id="username" value={userName} onChange={(evt) => setUserName(evt.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    {/* Update the state variable 'email' with the new value of the input field */}
                    <input type="email" id="email" value={email} onChange={(evt) => setEmail(evt.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    {/* Update the state variable 'password' with the new value of the input field */}
                    <input type="password" id="password" value={password} onChange={(evt) => setPassword(evt.target.value)}/>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;