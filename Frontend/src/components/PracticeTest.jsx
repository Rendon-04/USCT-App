import React from 'react';
import './testPage.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const PracticeTest = () => {
  return (
    <div>
      <div className="title">
        <h1>Test</h1>
      </div>
      <div className="description">
        <p>
          Get ready for the U.S. citizenship test. On the day of your interview, you'll answer 10 questions from a list of 100. Use our tools to study all 100 questions, 10 random questions, or focus on key themes.
        </p>
      </div>
      <div className="container">
        <div className="row mb-3">
          <div className="col-12">
            <h5>Choose difficulty level</h5>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="form-check custom-radio">
                  <input className="form-check-input" type="radio" name="difficulty" id="easy" />
                  <label className="form-check-label" htmlFor="easy">
                    Easy
                    <div className="text-muted">Multiple choice</div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="form-check custom-radio">
                  <input className="form-check-input" type="radio" name="difficulty" id="medium" />
                  <label className="form-check-label" htmlFor="medium">
                    Medium
                    <div className="text-muted">Suggested words</div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="form-check custom-radio">
                  <input className="form-check-input" type="radio" name="difficulty" id="hard" />
                  <label className="form-check-label" htmlFor="hard">
                    Hard
                    <div className="text-muted">Written answer</div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h5>Choose test type</h5>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="form-check custom-radio">
                  <input className="form-check-input" type="radio" name="testType" id="100questions" />
                  <label className="form-check-label" htmlFor="100questions">
                    100 questions
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="form-check custom-radio">
                  <input className="form-check-input" type="radio" name="testType" id="random" />
                  <label className="form-check-label" htmlFor="random">
                    10 random questions
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="form-check custom-radio">
                  <input className="form-check-input" type="radio" name="testType" id="theme" />
                  <label className="form-check-label" htmlFor="theme">
                    By theme
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <br />
        <Link to="/test">
          <button type="button" className="btn btn-primary">Start Test</button>
        </Link>
      </div>
    </div>
  );
};

export default PracticeTest;