import React, { useState, useEffect } from 'react';
// View Scores component 
export default function ViewScores() {
  const [scores, setScores] = useState([]);
  const [error, setError] = useState(null);

  // Fetch the user's scores when the component mounts
  useEffect(() => {
    fetch("/view_scores", {
      headers: {
        accept: 'application/json'
      }
    })
    .then(response => {
      if (response.status === 401) {
        throw new Error('Please log in to view your Dashboard.');
      }
      return response.json();
    })
    .then(data => setScores(data.scores))
    .catch(error => {
      console.error('Error fetching scores:', error);
      setError(error.message);
    });
  }, []);

  if (scores.length === 0) {
    return <div>Please log in to view your Dashboard.</div>;
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


// THIS IS NOT WORKING!!!!!!!//////// IT IS NOT READING THAT YOU HAVE LOGGED OUT

