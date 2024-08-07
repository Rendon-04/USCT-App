import React from 'react';
import './Practice.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import "./Practice.css"

export default function Practice() {
  return (
    <div>
      <div className="title">
        <h1>Practice For The Test</h1>
      </div>
      <div className="description">
        <p>
          Get ready for the U.S. citizenship test. On the day of your interview, you'll answer 10 questions from a list of 100. Use our tool to study for these questions. 
        </p>
      </div>
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <label>
                  <div className="text-muted">Multiple choice</div>
                </label>
              </div>
            </div>
          </div>
          {/* Additional difficulty levels can be added here */}
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <label>
                  10 random questions
                </label>
              </div>
            </div>
          </div>
          {/* Additional test types can be added here */}
        </div>

        <div className="row">
          <div className="col-12">
            <Link to="/test">
              <button type="button" className="btn btn-primary">Start Test</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}