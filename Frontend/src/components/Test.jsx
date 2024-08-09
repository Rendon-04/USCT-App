import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Test() {
  // States to hold the questions and user's answers
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);
  const navigate = useNavigate();  // Initialize the useNavigate hook

  // Fetch the questions from the server
  React.useEffect(() => {
    fetch("/practice_test", {
      headers: {
        accept: 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        console.log("Fetched questions:", data.questions);
        setQuestions(data.questions);
      })
      .catch(error => {
        console.error("Error fetching questions:", error);
      });
  }, []);

  // Handle selecting an answer
  const handleSelectAnswer = (questionId, answer) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetch('/submit_practice_test', {    ////////  THIS IS NOT WORKING!!!! ////////
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',  
        accept: 'application/json'
      },
      body: JSON.stringify(userAnswers)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      setScore(data.score);
      // Navigate to the score display page, passing the score and total questions as state
      navigate('/score_display', { state: { score: data.score, total: questions.length } });
    })
    .catch(error => {
      console.error("Error submitting test:", error);
    });
  };

  if (score !== null) {
    return <div>You scored {score} out of {questions.length}!</div>
  }

  return (
    <form onSubmit={handleSubmit}>
      {Array.isArray(questions) && questions.length > 0 ? (
        questions.map((question, index) => (
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
        ))
      ) : (
        <p>Loading questions...</p>
      )}
      <button type="submit">Submit</button>
    </form>
  );
}