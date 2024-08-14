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
    // Convert the data into an array of all questions
    const allQuestions = Object.values(data).flat();
    const selectedQuestions = [];
    const usedIndices = new Set(); // A set to keep track of used indices
  
    // Pick 10 random questions
    while (selectedQuestions.length < 10 && usedIndices.size < allQuestions.length) {
      const randomIndex = Math.floor(Math.random() * allQuestions.length);
  
      //Add the question if it hasn't been selected yet
      if (!usedIndices.has(randomIndex)) {
        selectedQuestions.push(allQuestions[randomIndex]);
        usedIndices.add(randomIndex); // Mark this index as used
      }
    }
  
    // Set the selected random questions
    setRandomQuestions(selectedQuestions);
  };

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
