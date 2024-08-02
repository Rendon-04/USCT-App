import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './study.css';

function Study() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/src/components/questionsNaturalizationTest.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => setError(error));
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

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    navigate(`#${category.replace(/\s+/g, '-')}`);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container py-5">
      <h1 className="text-center text-primary mb-4">Study</h1>
      <div className="text-center mb-5">
        <p>Get ready for the U.S. citizenship test. On the day of your interview, you'll answer 10 questions from a list of 100. Use our tools to study all 100 questions, 10 random questions, or focus on key themes.</p>
      </div>

      <div className="mb-5">
        <h2 className="h5">Get started with random questions</h2>
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <Link to="#" onClick={() => handleCategorySelect('all')}>
                  Study 100 questions
                </Link>
                <p className="card-text">Get started by studying all 100 questions in all categories.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <Link to="#" onClick={() => handleCategorySelect('Random Questions')}>
                  Study 10 random questions
                </Link>
                <p className="card-text">Try studying questions like you would in the real interview.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="h5">Get started by theme</h2>
        <div className="row">
          {Object.keys(data).map((category, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card border-0 shadow-sm h-100 theme-card">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={`/src/img/${category.replace(/\s+/g, '')}.png`} className="img-fluid rounded-start" alt={category} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <Link to="#" className="card-title h6 text-decoration-none text-primary" onClick={() => handleCategorySelect(category)}>
                        {category}
                      </Link>
                      <p className="card-text">Learn about {category.toLowerCase()}.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCategory && (
        <div id={selectedCategory.replace(/\s+/g, '-')} className="category-content">
          <h2>{selectedCategory === 'all' ? 'All Questions' : selectedCategory}</h2>
          {selectedCategory === 'all'
            ? Object.keys(data).flatMap((category, categoryIndex) =>
                data[category].map((questionItem, index) => (
                  <div key={`${categoryIndex}-${index}`}>
                    <h5>Question {questionItem.number}</h5>
                    <p>{questionItem.question}</p>
                    {Array.isArray(questionItem.answers) ? (
                      <div>
                        <p><strong>Answers:</strong></p>
                        <ul>
                          {questionItem.answers.map((answer, idx) => (
                            <li key={idx}>{answer}</li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <p><strong>Answer:</strong> {questionItem.answer}</p>
                    )}
                  </div>
                ))
              )
            : data[selectedCategory].map((questionItem, index) => (
                <div key={index}>
                  <h5>Question {questionItem.number}</h5>
                  <p>{questionItem.question}</p>
                  {Array.isArray(questionItem.answers) ? (
                    <div>
                      <p><strong>Answers:</strong></p>
                      <ul>
                        {questionItem.answers.map((answer, idx) => (
                          <li key={idx}>{answer}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p><strong>Answer:</strong> {questionItem.answer}</p>
                  )}
                </div>
              ))}
        </div>
      )}
    </div>
  );
}

export default Study;
