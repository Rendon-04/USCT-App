import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
        <div className="category-questions-container">
            <h1>{category.replace(/-/g, ' ')}</h1>
            {filteredData && filteredData.length > 0 && (
                <ul>
                    {filteredData.map((questionItem, index) => (
                        <li key={index}>
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
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
