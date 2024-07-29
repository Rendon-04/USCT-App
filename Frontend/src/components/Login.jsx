import React, {useState} from "react";

// Login component 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        //add code for login
        console.log('Email:', email, 'Password'. password);
    };

    return(
    <div>
            <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(evt)=> setEmail(evt.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(evt) => setPassword(evt.target.value)}/>
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
    );
};

export default Login;