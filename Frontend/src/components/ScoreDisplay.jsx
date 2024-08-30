import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import "/src/components/ScoreDisplay.css"



export default function ScoreDisplay  ()  {

const location = useLocation();
const { score, total, results = [] } = location.state || { score: null, total: null, results: [] };



return (
  <div className="custom-page-container">
    <div className="custom-score-summary">
      <div className="custom-your-score-parent">
        <div className="custom-your-score">Your score</div>
        <div className="custom-in-order-to-container">
          <span className="custom-in-order-to-container1">
            <span>In order to pass the test, you must score higher than 6.</span>
            <b> </b>
            <span className="custom-you-scored-a">You scored {score}/{total}!</span>
          </span>
        </div>
        <div className="custom-button-container">
            <Link to="/practice_test">
              <button className="custom-primarybutton">Retake test</button>
            </Link>
            <Link to="/view_scores">
              <button className="custom-secondarybutton">View dashboard</button>
            </Link>
          </div>
        </div>
       </div>

    <div className="custom-review-container">
      <div className="custom-review-section">
        <h2>Review the questions you got <b>wrong</b></h2>
        {results
          .filter(result => result.yourAnswer !== result.correctAnswer)
          .map((result, index) => (
            <div key={index} className="custom-background-parent">
              <div className="custom-background custom-wrong-answer"></div>
              <div className="custom-frame-wrapper">
                <div className="custom-question-container">
                  <div className="custom-question-text">{result.question}</div>
                  <div className="custom-correct-answer-container">
                    <span className="custom-review-the-questions">Correct answer: </span>
                    <span>{result.correctAnswer}</span>
                  </div>
                  <div className="custom-your-answer-container">
                    <span className="custom-review-the-questions">Your answer: </span>
                    <span>{result.yourAnswer}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="custom-review-section">
        <h2>Review the questions you got <b>right</b></h2>
        {results
          .filter(result => result.yourAnswer === result.correctAnswer)
          .map((result, index) => (
            <div key={index} className="custom-background-parent">
              <div className="custom-background custom-right-answer"></div>
              <div className="custom-frame-wrapper">
                <div className="custom-question-container">
                  <div className="custom-question-text">{result.question}</div>
                  <div className="custom-correct-answer-container">
                    <span className="custom-review-the-questions">Correct answer: </span>
                    <span>{result.correctAnswer}</span>
                  </div>
                  <div className="custom-your-answer-container">
                    <span className="custom-review-the-questions">Your answer: </span>
                    <span>{result.yourAnswer}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
);
} 