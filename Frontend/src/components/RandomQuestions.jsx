// RandomQuestions.jsx
import React, { useState, useEffect } from 'react';

export default function RandomQuestions() {
  const [questions, setQuestions] = useState([]); // Store all questions
  const [randomQuestions, setRandomQuestions] = useState([]); // Store 10 random questions
  const [error, setError] = useState(null); // Store error messages

  useEffect(() => {
    // Fetch all questions when the component mounts
    fetch('/src/components/questionsNaturalizationTest.json')
      .then(response => response.json())
      .then(data => {
        setQuestions(data);
        selectRandomQuestions(data);
      })
      .catch(error => setError(error.message));
  }, []);

  const selectRandomQuestions = (data) => {
    const allQuestions = Object.values(data).flat();
    const selectedQuestions = [];

    // Pick 10 random questions
    while (selectedQuestions.length < 10 && allQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * allQuestions.length);
      selectedQuestions.push(allQuestions.splice(randomIndex, 1)[0]);
    }

    setRandomQuestions(selectedQuestions);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>10 Random Questions</h1>
      <button onClick={() => selectRandomQuestions(questions)}>Generate New Questions</button>
      {randomQuestions.map((question, index) => (
        <div key={index}>
          <h3>Question {question.number}</h3>
          <p>{question.question}</p>
          {question.answers ? (
            <ul>
              {question.answers.map((answer, idx) => (
                <li key={idx}>{answer}</li>
              ))}
            </ul>
          ) : (
            <p><strong>Answer:</strong> {question.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
