import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './studyCategories.css';

export default function StudyCategories() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        fetch('/src/components/questionsNaturalizationTest.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => setError(error));
    }, []);

    // category selection
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    // render selected category
    const renderQuestions = () => {
        if (selectedCategory === 'all') {
            return Object.keys(data).flatMap((category) =>
                data[category].map((questionItem) => (
                    <QuestionItem key={questionItem.number} questionItem={questionItem} />
                ))
            );
        } else if (selectedCategory) {
            return data[selectedCategory].map((questionItem) => (
                <QuestionItem key={questionItem.number} questionItem={questionItem} />
            ));
        }
        return null;
    };

    return (
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

            {selectedCategory && (
                <div className="questions">
                    {renderQuestions()}
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
