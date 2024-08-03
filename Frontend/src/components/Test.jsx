import React, { useState } from 'react';
import questionsData from '/src/components/practiceTest.json'; // Import the data

const PracticeTest = () => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionChange = (questionId, option) => {
    setSelectedOptions(prevSelectedOptions => ({
      ...prevSelectedOptions,
      [questionId]: option,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(selectedOptions);
  };

  return (
    <div>
      <h1>Practice Test</h1>
      <a href="/">Home</a>
      <form onSubmit={handleSubmit}>
        {questionsData.map((question) => (
          <div key={question.id}>
            <p>{question.question}</p>
            {question.options.map((option) => (
              <div key={option}>
                <input
                  type="radio"
                  name={`question_${question.id}`}
                  value={option}
                  checked={selectedOptions[question.id] === option}
                  onChange={() => handleOptionChange(question.id, option)}
                />
                {option}
              </div>
            ))}
          </div>
        ))}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PracticeTest;