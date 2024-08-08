import React, { useState } from 'react';
import questionsData from '/src/components/practiceTest.json'; // Import the data
// import { useNavigate } from 'react-router-dom';

export default function Test () {
  //States to hold the questions and users answers 
  const [questions, setQuestions] = useState ([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);

  // Fetch the questions from the server
  React.useEffect(() => {
    fetch("/practice_test")
    .then(response => response.json())
    .then(data => setQuestions(data.questions));
  }, []);

  

  //Handle selecting an answer 
  const handleSelectAnswer = (questionId, answer) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  //Handle form submission 
  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetch('/submit_practice_test', {
      method: 'POST',
      heaaders: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(userAnswers)
    })
    .then(response => response.json())
    .then(data => setScore(data.score));
  };

  if (score !== null)
    return <div>You scored {score} out of {questions.length}!</div>

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question.text}</p>
          {question.options.map((option, i) => (
            <div key={i}>
              <input
                type="radio"
                name={`question_${question.id}`}
                value={option}
                onChange={() => handleSelectAnswer(question.id, option)}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}