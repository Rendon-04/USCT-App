import React from 'react'; 
import { Link } from 'react-router-dom';
// Navbar Component

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/practice_test">Practice Test</Link></li>
                <li><Link to="/study_for_the_test">Study</Link></li>
                <li><Link to="/addtional_resources">Resources</Link></li>
                <li><Link to="/view_scores">View Scores</Link></li>
                <li><Link to="/login">login</Link></li>
                <li><Link to="/register">Sign Up</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar; 