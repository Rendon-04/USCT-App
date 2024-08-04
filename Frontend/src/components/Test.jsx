import React, { useState } from 'react';
import questionsData from '/src/components/practiceTest.json'; // Import the data
import { useNavigate } from 'react-router-dom';

const Test = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const navigate = useNavigate();

  const handleOptionChange = (questionId, option) => {
    setSelectedOptions(prevSelectedOptions => ({
      ...prevSelectedOptions,
      [questionId]: option,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    let score = 0;
    questionsData.forEach((question) => {
      if (selectedOptions[question.id] === question.answer) {
        score += 1;
      }
    });

    const total = questionsData.length;
    navigate("/score_display", { state: { score, total } });
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

export default Test;