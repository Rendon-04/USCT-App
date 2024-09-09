// AllQuestions.jsx
import React, { useState, useEffect } from 'react';
import "/src/components/AllQuestions.css"

export default function AllQuestions() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/questionsNaturalizationTest.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => setError(error));
  }, []);


return (
  <body>
  <div className="all-questions-container">
    <h1 className="all-questions-title">All 100 Questions</h1>
    {Object.keys(data).flatMap((category) =>
      data[category].map((questionItem) => (
        <div key={questionItem.number} className="all-question-item">
          <h5 className="all-question-number">Question {questionItem.number}</h5>
          <p className="all-question-text">{questionItem.question}</p>
          {Array.isArray(questionItem.answers) ? (
            <div className="all-answers-container">
              <strong className="all-answers-title">Answers:</strong>
              <ul className="all-answers-list">
                {questionItem.answers.map((answer, index) => (
                  <li key={index} className="all-answer-item">{answer}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="all-single-answer"><strong>Answer:</strong> {questionItem.answer}</p>
          )}
        </div>
      ))
    )}
  </div>
  </body>
);
}