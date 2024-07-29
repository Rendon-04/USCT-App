const Register = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // Add code to handle registration
        console.log('Username:', userName, 'Email:', email, 'Password:', password);
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={userName} onChange={(evt) => setUserName(evt.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(evt) => setEmail(evt.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={(evt) => setPassword(evt.target.value)}/>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;