import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './study.css';

function Study() {
    //States
    //store the questions from the data fetched from the json file
    const [data, setData] = useState([]);
    //state to store any error that occurs during the data fetching
    const [error, setError] = useState(null);
    //state to store the selected category of questions 
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/src/components/questionsNaturalizationTest.json')
        .then(response => response.json())
        .then(data => setData(data)) //set the fetched data to the state 
        .catch(error => setError(error)); // set error if the fetching fails 
    }, []);

  useEffect(() => {
    if (selectedCategory) {
      // Use document.getElementById to scroll into view
      const element = document.getElementById(selectedCategory.replace(/\s+/g, '-'));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedCategory]);

  //handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category); //set the selected category 
    navigate(`#${category.replace(/\s+/g, '-')}`); // navoagte to the selected category
  };
  //if error occurs 
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
        <div className="card" onClick={() => handleCategorySelect('all')}>
          <div className="card-body">
            <Link to="#">Study 100 questions</Link>
            <p>Get started by studying all 100 questions in all categories.</p>
          </div>
        </div>
        <div className="card" onClick={() => handleCategorySelect('Random Questions')}>
          <div className="card-body">
            <Link to="#">Study 10 random questions</Link>
            <p>Try studying questions like you would in the real interview.</p>
          </div>
        </div>
      </div>

      <div className="category-group">
        {Object.keys(data).map((category) => (
          <div className="category-card" key={category}>
            <img src={`/src/img/${category.replace(/\s+/g, '')}.png`} alt={category} className="category-image" />
            <div className="card-body">
              <Link to="#" className="category-link" onClick={() => handleCategorySelect(category)}>
                {category}
              </Link>
              <p className="category-description">Learn about {category.toLowerCase()}.</p>
            </div>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <div id={selectedCategory.replace(/\s+/g, '-')} className="questions">
          <h2>{selectedCategory === 'all' ? 'All Questions' : selectedCategory}</h2>
          {selectedCategory === 'all'
            ? Object.keys(data).flatMap((category) =>
                data[category].map((questionItem) => (
                  <QuestionItem key={questionItem.number} questionItem={questionItem} />
                ))
              )
            : data[selectedCategory].map((questionItem) => (
                <QuestionItem key={questionItem.number} questionItem={questionItem} />
              ))}
        </div>
      )}
    </div>
  );
}

function QuestionItem({ questionItem }) {
  return (
    <div className="question-item">
      <h5>Question {questionItem.number}</h5>
      <p>{questionItem.question}</p>
      {Array.isArray(questionItem.answers) ? (
        <>
          <strong>Answers:</strong>
          <ul>
            {questionItem.answers.map((answer, idx) => (
              <li key={idx}>{answer}</li>
            ))}
          </ul>
        </>
      ) : (
        <p><strong>Answer:</strong> {questionItem.answer}</p>
      )}
    </div>
  );
}

export default Study;
