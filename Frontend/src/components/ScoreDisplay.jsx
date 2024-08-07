import React from 'react';
import { useLocation, Link } from 'react-router-dom';



export default function ScoreDisplay  ()  {
    const location = useLocation();
    const { score, total } = location.state; 

    return (
      <div>
        <h1>Your Score</h1>
        <div>
          <p>You scored {score} out of {total}.</p>
        </div>
        <div>
            <Link to="/practice_test">Take Another Test</Link>
            <br />
            <Link to="/view_score">View Your Score History</Link>
        </div>
    </div>
    );
};



