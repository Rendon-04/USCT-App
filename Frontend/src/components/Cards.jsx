import React from "react";
import { Link } from 'react-router-dom';
import "./Cards.css"

export default function Cards () {
    return (
        <div className="card-container">
        <div className="card">
          <div className="card-icon"><i className="fas fa-book"></i></div>
          <h3 className="card-title">Study</h3>
          <p className="card-description">Study the 100 questions you might face during the test about U.S. history, government, and civic duties.</p>
          <Link to="/study_for_the_test" className="card-link">Learn more</Link>
        </div>
        <div className="card">
          <div className="card-icon"><i className="fas fa-pencil-alt"></i></div>
          <h3 className="card-title">Practice</h3>
          <p className="card-description">Test your knowledge with practice exams and quizzes to ensure you're ready for the real test.</p>
          <Link to="/practice_test" className="card-link">Practice now</Link>
        </div>
        <div className="card">
          <div className="card-icon"><i className="fas fa-info-circle"></i></div>
          <h3 className="card-title">Resources</h3>
          <p className="card-description">Access valuable resources to understand eligibility, application processes, and next steps.</p>
          <Link to="/additional_resources" className="card-link">Explore resources</Link>
        </div>
      </div>
    )
}
