import React, { useState, useEffect } from 'react';
// View Scores component 
export default function ViewScores({ isLoggedIn }) { // Accept isLoggedIn as a prop
  const [scores, setScores] = useState([]);
  const [error, setError] = useState(null);

  // Fetch the user's scores when the component mounts
  useEffect(() => {
    if (isLoggedIn) {
        fetch("/view_scores", {
            headers: {
                accept: 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.scores && data.scores.length > 0) {
                setScores(data.scores);
            } else {
                setError("No scores available.");
            }
        });
    } else {
        setError("Please log in to view your scores.");
    }
  }, [isLoggedIn]);

return (
  <div>
      <h1>Your Scores</h1>
 
      {error ? (
          <p>{error}</p>  // Display the error message here
      ) : (
          <ul>
              {scores.map((score, index) => (
                  <li key={index}>Score: {score.user_score}</li>
              ))}
          </ul>
      )}
  </div>
);
}