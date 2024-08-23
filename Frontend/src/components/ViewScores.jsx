import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'
import "/src/components/ViewScores.css"
// View Scores component 
export default function ViewScores({ isLoggedIn }) { // Accept isLoggedIn as a prop
  const [scores, setScores] = useState([]);
  const [error, setError] = useState(null);

  const location = useLocation();
  const { score, total } = location.state || { score: null, total: null };

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
        if (score !== null){
            setScores([{ user_score: score }])
        } else {
        setError("Please log in to view your scores.");
        }
    }
  }, [isLoggedIn, score]);


return (
    <div className="scores-dashboard">
      <h1 className="dashboard-title">Your Scores</h1>
 
      {error ? (
           <Link to="/login" className="dashboard-error-link">
           <p className="dashboard-error">{error}</p>
         </Link>
      ) : (
          <ul className="scores-list">
              {scores.map((score, index) => (
                  <li key={index} className="score-item">
                      Score: {score.user_score} out of 10 
                  </li>
              ))}
          </ul>
      )}
    </div>
  );
}