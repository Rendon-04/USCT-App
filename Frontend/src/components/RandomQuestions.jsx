// RandomQuestions.jsx
import React, { useState, useEffect } from 'react';
import "/src/components/RandomQuestions.css"

export default function RandomQuestions() {
  const [questions, setQuestions] = useState([]); // Store all questions
  const [randomQuestions, setRandomQuestions] = useState([]); // Store 10 random questions
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current card
  const [flipped, setFlipped] = useState(false); // Track whether the card is flipped
  const [error, setError] = useState(null); // Store error messages
  useEffect(() => {
    // Fetch all questions when the component mounts
    fetch('/src/components/questionsNaturalizationTest.json')
      .then(response => response.json())
      .then(data => {
        setQuestions(data);
        selectRandomQuestions(data);
      })
      .catch(error => setError(error.message));
  }, []);

  const selectRandomQuestions = (data) => {
    // Convert the data into an array of all questions
    const allQuestions = Object.values(data).flat();
    const selectedQuestions = [];
    const usedIndices = new Set(); // A set to keep track of used indices
  
    // Pick 10 random questions
    while (selectedQuestions.length < 10 && usedIndices.size < allQuestions.length) {
      const randomIndex = Math.floor(Math.random() * allQuestions.length);
  
      //Add the question if it hasn't been selected yet
      if (!usedIndices.has(randomIndex)) {
        selectedQuestions.push(allQuestions[randomIndex]);
        usedIndices.add(randomIndex); // Mark this index as used
      }
    }
  
    // Set the selected random questions
    setRandomQuestions(selectedQuestions);
    setCurrentIndex(0); // Reset to the first question
    setFlipped(false); // Ensure the card is not flipped
  };

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleNext = () => {
    if (currentIndex < randomQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setFlipped(false); // Reset flip state
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setFlipped(false); // Reset flip state
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

//   return (
//     <div>
//       <h1>10 Random Questions</h1>
//       <button onClick={() => selectRandomQuestions(questions)}>Generate New Questions</button>
//       {randomQuestions.map((question, index) => (
//         <div key={index}>
//           <h3>Question {question.number}</h3>
//           <p>{question.question}</p>
//           {question.answers ? (
//             <ul>
//               {question.answers.map((answer, idx) => (
//                 <li key={idx}>{answer}</li>
//               ))}
//             </ul>
//           ) : (
//             <p><strong>Answer:</strong> {question.answer}</p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
return (
  <div className="flashcard-container">
    <h1 className="flashcard-title">10 Random Questions</h1>
    <button className="generate-button" onClick={() => selectRandomQuestions(questions)}>Generate New Questions</button>
    <div className="flashcard">
      <div className={`flashcard-inner ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="flashcard-front">
          <h3>Question {randomQuestions[currentIndex]?.number}</h3>
          <p>{randomQuestions[currentIndex]?.question}</p>
        </div>
        <div className="flashcard-back">
            {randomQuestions[currentIndex]?.answers && randomQuestions[currentIndex].answers.length > 1 ? (
              <>
                <p><strong>Answers:</strong></p>
                <ul>
                  {randomQuestions[currentIndex].answers.map((answer, idx) => (
                    <li key={idx}>{answer}</li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <p><strong>Answer:</strong></p>
                <p>{randomQuestions[currentIndex]?.answer || randomQuestions[currentIndex]?.answers[0]}</p>
              </>
            )}
          </div>
      </div>
    </div>
    <div className="flashcard-navigation">
    <button onClick={handlePrev} disabled={currentIndex === 0} className="arrow-button previous"></button>
    <span className="flashcard-counter">{currentIndex + 1} / {randomQuestions.length}</span>
    <button onClick={handleNext} disabled={currentIndex === randomQuestions.length - 1} className="arrow-button next"></button>
</div>
  </div>
);
}