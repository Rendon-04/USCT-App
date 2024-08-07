import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css'; 
import Cards from "/src/components/Cards.jsx";
// Homepage Component 

export default function HomePage () {
  return (
    <div className="homepage-container">
      <div className="content">
        <h1 className="main-heading">Ace the U.S. Civic Test</h1>
        <p className="description">
          Preparing can be tough, but you don't have to do it alone. Our study guides, practice tests, and resources help you master U.S. history, government, and civic responsibilities. Track your progress, build your confidence, and join a community of learners!
        </p>
        <Link to="/study_for_the_test" className="get-started-button">Get started</Link>
        <div className="learners-section">
          <img src="/src/img/learners.png" alt="Learners" className="learners-img" />
          <p className="learners-text">Join 100+ learners</p>
        </div>
      </div>
      <div className="image-container">
        <img src="/src/img/homepage.png" alt="Civic Test" className="main-image" />
      </div>
      <Cards />
    </div>
  );
}

