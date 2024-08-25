// AllQuestions.jsx
import React, { useState, useEffect } from 'react';
import "/src/components/AllQuestions.css"

export default function AllQuestions() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/src/components/questionsNaturalizationTest.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => setError(error));
  }, []);


return (
  <body>
  <div className="all-questions-container">
    <h1 className="questions-title">All 100 Questions</h1>
    {Object.keys(data).flatMap((category) =>
      data[category].map((questionItem) => (
        <div key={questionItem.number} className="question-item">
          <h5 className="question-number">Question {questionItem.number}</h5>
          <p className="question-text">{questionItem.question}</p>
          {Array.isArray(questionItem.answers) ? (
            <div className="answers-container">
              <strong className="answers-title">Answers:</strong>
              <ul className="answers-list">
                {questionItem.answers.map((answer, index) => (
                  <li key={index} className="answer-item">{answer}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="single-answer"><strong>Answer:</strong> {questionItem.answer}</p>
          )}
        </div>
      ))
    )}
  </div>
  </body>
);
}