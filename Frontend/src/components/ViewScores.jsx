import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import "/src/components/ViewScores.css";
import API_BASE_URL from '../config';

export default function ViewScores({ isLoggedIn }) {
  const [scores, setScores] = useState([]);
  const [error, setError] = useState(null);

  const location = useLocation();
  const { score, total } = location.state || { score: null, total: null };

  useEffect(() => {
    if (!isLoggedIn) {
      if (score !== null) {
        setScores([{ user_score: score }]);
      } else {
        setError("Please log in to view your scores.");
      }
      return;
    }

    const fetchScores = async () => {
      setError(null);
      try {
        const res = await fetch(`${API_BASE_URL || ''}/api/view_scores`, {
          method: 'GET',
          headers: { accept: 'application/json' },
          credentials: 'include', 
        });

        if (!res.ok) {
          if (res.status === 401) {
            setError("Please log in to view your scores.");
            return;
          }
          const data = await res.json().catch(() => ({}));
          setError(data.error || `Failed to load scores (${res.status}).`);
          return;
        }

        const data = await res.json();
        if (data.scores && data.scores.length > 0) {
          setScores(data.scores);
        } else {
          setError("No scores available.");
        }
      } catch (e) {
        console.error('Scores fetch error:', e);
        setError("Network error. Check API URL, proxy/CORS, or server status.");
      }
    };

    fetchScores();
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
