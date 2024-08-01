import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "/src/components/register.css";

export default function Register() {
    //states for registration
    const[userName, setUserName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    //states for checking for errors 
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false); 

    //Navigate
    const navigate = useNavigate(); 

    //handle the name change 
    const handleUserName = (evt) => {
        setUserName(evt.target.value);
        setSubmitted(false); 
    };

    //handle the email change 
    const handleEmail = (evt) => {
        setEmail(evt.target.value);
        setSubmitted(false); 
    };

    //handle the password change 
    const handlePassword = (evt) => {
        setPassword(evt.target.value);
        setSubmitted(false);
    };

    //handle the form submission
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (userName === '' || email === '' || password === ''){
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
            //redirect to the login page after succesful registration 
            navigate('/login')
        }
    };

    //Show a success message 
    const successMessage = () => {
        return (
            <div className="success"
                 style= {{ display: submitted ? "" : "none",}} >
                    <h3>User {userName} successfully registered!</h3>
                 </div>
        );
    };

    //Show error message 
    const errorMessage = () => {
        return (
            <div className="error"
                 style={{ display: error ? "" : "none",}} >
                    <h3>PLease fill in all fields</h3>
                 </div>
        );
    };

    return (
        <div className='form'>
            <div>
                <h1>User Sign-Up</h1>
            </div>
            {/* call methods */}
            <div className='messages'>
                {errorMessage()}
                {successMessage()}
            </div>

            <form>
                {/* form data */} 
                <label className='label'>Name</label>
                <input 
                    onChange={handleUserName}
                    className='input'
                    value={userName}
                    type='text' />
                <label className='label'>Email</label>
                <input 
                    onChange={handleEmail}
                    className='input'
                    value={email}
                    type='email' />
                <label className='label'>Password</label>
                <input 
                    onChange={handlePassword}
                    className='input'
                    value={password}
                    type='password' /> 
                <button onClick={handleSubmit} className='button' type='submit'>Submit</button>
            </form>

        </div>
    );

}