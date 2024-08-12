import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'; // Import your CSS file

export default function Navbar ({ isLoggedIn, onLogout, email }) {
   
  const navigate = useNavigate();

  const onButtonClick = () => {
    if (isLoggedIn) {
      onLogout(); // Call the logout function passed as a prop
      navigate('/'); // Navigate to the home page after logging out
    } else {
      navigate('/login'); // Navigate to the login page
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        <Link className="navbar-logo" to="/">
          <img src="/src/img/torch.png" alt="Logo" style={{ height: '30px', marginRight: '10px' }} />
          U.S. Civic Test
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/study_for_the_test">Study</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/practice_test">Practice</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/additional_resources">Resources</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/view_scores">Dashboard</Link>
            </li>
          </ul>
          <div className="primary-buttons">
            {!isLoggedIn && <Link to="/register" className="signup-button">Sign up</Link>}
            <div className="buttonContainer">
              <input
                className="inputButton"
                type="button"
                onClick={onButtonClick}
                value={isLoggedIn ? 'Log out' : 'Log in'}
              />
              {isLoggedIn && <div>Email: {email}</div>}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};


