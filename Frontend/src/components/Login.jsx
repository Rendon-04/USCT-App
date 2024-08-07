import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

// Login component 


export default function  Login ({ onLogin }) {
    // State variables for email and passsword 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const navigate = useNavigate() 

    const onButtonClick = () => {
        //set initial error values to be empty
        setEmailError('')
        setPasswordError('')

        //check if the user entered both fields correctly 
        if ('' === email) {
            setEmailError('Please enter your email')
            return
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError("Please enter a valid email")
            return
        }

        if ('' === password) {
            setPasswordError("Please enter your password")
            return
        }

        if (password.length < 4) {
            setPasswordError("Password must be 4 characters or longer")
            return
        }

        onLogin(email);
        navigate('/');

    };

    return (
        <div className="mainContainer">
          <div className="titleContainer">
            <div>Login</div>
          </div>
          <br />
          <div className="inputContainer">
            <input
              value={email}
              placeholder="Enter your email here"
              onChange={(evt) => setEmail(evt.target.value)}
              className="inputBox"
            />
            <label className="errorLabel">{emailError}</label>
          </div>
          <br />
          <div className="inputContainer">
            <input
              value={password}
              placeholder="Enter your password here"
              onChange={(evt) => setPassword(evt.target.value)}
              className="inputBox"
            />
            <label className="errorLabel">{passwordError}</label>
          </div>
          <br />
          <div className="inputContainer">
            <input className="inputButton" type="button" onClick={onButtonClick} value={'Log in'} />
          </div>
        </div>
      )
    }
