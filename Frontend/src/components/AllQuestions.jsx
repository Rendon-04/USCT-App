// AllQuestions.jsx
import React, { useState, useEffect } from 'react';

export default function AllQuestions() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/src/components/questionsNaturalizationTest.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => setError(error));
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="all-questions-container">
      <h1>All 100 Questions</h1>
      {Object.keys(data).flatMap((category) =>
        data[category].map((questionItem) => (
          <div key={questionItem.number} className="question-item">
            <h5>Question {questionItem.number}</h5>
            <p>{questionItem.question}</p>
            {Array.isArray(questionItem.answers) ? (
              <>
                <strong>Answers:</strong>
                <ul>
                  {questionItem.answers.map((answer, idx) => (
                    <li key={idx}>{answer}</li>
                  ))}
                </ul>
              </>
            ) : (
              <p><strong>Answer:</strong> {questionItem.answer}</p>
            )}
          </div>
        ))
      )}
    </div>
  );
}
