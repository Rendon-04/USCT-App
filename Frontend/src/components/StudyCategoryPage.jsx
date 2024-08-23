import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "/src/components/StudyCategoryPage.css"


export default function StudyCategoryPage() {
    const { category } = useParams();
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/src/components/questionsNaturalizationTest.json')
            .then(response => response.json())
            .then(data => {
                setData(data);
                const filtered = data[category.replace(/-/g, ' ')];
                setFilteredData(filtered);
            })
            .catch(error => setError(error));
    }, [category]);

    return (
        <div className="all-questions-container">
            <h1 className="questions-title">{category.replace(/-/g, ' ')}</h1>
            {filteredData && filteredData.length > 0 && (
                <ul>
                    {filteredData.map((questionItem, index) => (
                        <div key={index} className="question-item">
                            <h5 className="question-number">Question {questionItem.number}</h5>
                            <p className="question-text">{questionItem.question}</p>
                            {Array.isArray(questionItem.answers) ? (
                                <div className="answers-container">
                                    <strong className="answers-title">Answers:</strong>
                                    <ul className="answers-list">
                                        {questionItem.answers.map((answer, idx) => (
                                            <li key={idx} className="answer-item">{answer}</li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <p className="single-answer"><strong>Answer:</strong> {questionItem.answer}</p>
                            )}
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
}