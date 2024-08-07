import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StudyCategories from "/src/components/StudyCategories.jsx"
import './study.css';

export default function Study() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the questions data
    fetch('/src/components/questionsNaturalizationTest.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, []);

  const handleCategorySelect = (category) => {
    navigate(`/study_for_the_test#${category.replace(/\s+/g, '-')}`);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="study-container">
      <h1 className="main-heading">Study</h1>
      <p className="intro-text">
        Get ready for the U.S. citizenship test. On the day of your interview, you'll answer 10 questions from a list of 100. Use our tools to study all 100 questions, 10 random questions, or focus on key themes.
      </p>

      <div className="card-group">
        <Link to="/study_for_the_test/all" className="card">
          <div className="card-body">
            <h2>Study 100 questions</h2>
            <p>Get started by studying all 100 questions in all categories.</p>
          </div>
        </Link>
        <Link to="/study_for_the_test/random" className="card">
          <div className="card-body">
            <h2>Study 10 random questions</h2>
            <p>Try studying questions like you would in the real interview.</p>
          </div>
        </Link>
      </div>

      <StudyCategories data={data} handleCategorySelect={handleCategorySelect} />
    </div>
  );
}



