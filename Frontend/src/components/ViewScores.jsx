import React, { useState, useEffect } from 'react';
// View Scores component 
export default function ViewScores() {
  const [scores, setScores] = useState([]);
  const [error, setError] = useState(null);

  // Fetch the user's scores when the component mounts
  useEffect(() => {
    fetch('/view_scores')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setScores(data.scores))
      .catch(error => {
        console.error('Error fetching scores:', error);
        setError('Failed to load scores. Please log in to view your scores.');
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (scores.length === 0) {
    return <div>No scores available to view.</div>;
  }

  return (
    <div>
      <h1>Your Scores</h1>
      <a href="/">Home</a>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>Score: {score.user_score}</li>
        ))}
      </ul>
    </div>
  );
}


