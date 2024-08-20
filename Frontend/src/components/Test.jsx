import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Test() {
  // States to hold the questions, user's answers, and score
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);
  const navigate = useNavigate();  // Hook to navigate between pages


  useEffect(() => {
    fetch("/practice_test", {
      headers: {
        accept: 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => setQuestions(data.questions))
    .catch(error => console.error("Error fetching questions:", error));
  }, []);

  // Handle the answer selection
  const handleSelectAnswer = (questionId, answer) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: answer
    });
  };

  // Handle form submission
  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    fetch('/submit_practice_test', {   
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',  
        accept: 'application/json'
      },
      body: JSON.stringify(userAnswers)
    })
    .then(response => response.json())
    .then(data => {
      setScore(data.score);  // Save the score
  navigate('/score_display', { state: { score: data.score, total: questions.length } });
    })
    .catch(error => console.error("Error submitting test:", error));
  };

  // Show the score 
  if (score !== null) {
    return <div>You scored {score} out of {questions.length}!</div>
  }

  // Render the questions 
  return (
    <form onSubmit={handleSubmit}>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question.question}</p>
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