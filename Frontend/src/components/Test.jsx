// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// import '/src/components/Test.css';

// export default function Test() {
//   // States to hold the questions, user's answers, and score
//   const [questions, setQuestions] = useState([]);
//   const [userAnswers, setUserAnswers] = useState({});
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(null);
//   const navigate = useNavigate();  // Hook to navigate between pages


//   useEffect(() => {
//     fetch("/practice_test", {
//       headers: {
//         accept: 'application/json'
//       }
//     })
//     .then(response => response.json())
//     .then(data => setQuestions(data.questions))
//     .catch(error => console.error("Error fetching questions:", error));
//   }, []);

//   // Handle the answer selection
//   const handleSelectAnswer = (questionId, answer) => {
//     setUserAnswers({
//       ...userAnswers,
//       [questionId]: answer
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (evt) => {
//     evt.preventDefault();
    
//     fetch('/submit_practice_test', {   
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',  
//         accept: 'application/json'
//       },
//       body: JSON.stringify(userAnswers)
//     })
//     .then(response => response.json())
//     .then(data => {
//       setScore(data.score);  // Save the score
 
//     navigate('/score_display', { 
//       state: { 
//         score: data.score, 
//         total: questions.length,
//         results: questions.map(q => ({
//           question: q.question,
//           correctAnswer: q.answer,
//           yourAnswer: userAnswers[q.id] || 'No Answer Selected' 
//         }))
//       } 
//     });
//     })
//     .catch(error => console.error("Error submitting test:", error));
//     };
//   // Show the score 
//   if (score !== null) {
//     return <div>You scored {score} out of {questions.length}!</div>
//   }

//   const handleBack = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   const isLastQuestion = currentQuestionIndex === questions.length - 1;

// return (
//   <div className="test-container">
//     {/* Progress Bar */}
//     <div className="test-navBar">
//       <div className="test-progressContainer">
//         <div className="test-progressWrapper">
//           <div
//             className="test-progressBar"
//             style={{
//               width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
//             }}
//           />
//         </div>
//         <div className="test-progressText">{currentQuestionIndex + 1}/{questions.length}</div>
//       </div>
//       <Link to="/practice_test" className="test-iconWrapper">
//         <div className="test-icon">
//           <img className="test-xicon16px" alt="Close" src="/img/Xicon.png" />
//         </div>
//       </Link>
//     </div>

//     {/* Test Content */}
//     <div className="test-frameGroup">
//       <div className="test-frameContainer">
//         <div className="test-questionWrapper">
//           <div className="test-questionText">{questions[currentQuestionIndex]?.question}</div>
//         </div>
//         <div className="test-optionsContainer">
//           {questions[currentQuestionIndex]?.options.map((option, i) => (
//             <div key={i} className={`test-optionCard ${userAnswers[questions[currentQuestionIndex]?.id] === option ? 'test-selectedOption' : ''}`} onClick={() => handleSelectAnswer(questions[currentQuestionIndex]?.id, option)}>
//               <div className="test-radioWrapper">
//                 <div className={`test-radio ${userAnswers[questions[currentQuestionIndex]?.id] === option ? 'test-radioSelected' : ''}`} />
//               </div>
//               <div className="test-optionContent">
//                 <div className="test-optionLabel">{option}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>

//     {/* Footer */}
//     <div className="test-footer">
//       <div className="test-buttonWrapper">
//         <div className="test-secondaryButton" onClick={handleBack}>
//           <div className="test-buttonText">Back</div>
//         </div>
//         {isLastQuestion ? (
//           <div className="test-primaryButton" onClick={handleSubmit}>
//             <div className="test-buttonText">Submit</div>
//           </div>
//         ) : (
//           <div className="test-primaryButton" onClick={handleNext}>
//             <div className="test-buttonText">Next</div>
//           </div>
//         )}
//       </div>
//     </div>
//   </div>
// );
// }

// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '/src/components/Test.css';

// // Utility function to get random questions
// function getRandomQuestions(questions, count) {
//   const shuffled = [...questions].sort(() => 0.5 - Math.random());  // Shuffle questions
//   return shuffled.slice(0, count);  // Return only 'count' number of questions
// }

// export default function Test() {
//   const [questions, setQuestions] = useState([]);
//   const [userAnswers, setUserAnswers] = useState({});
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(null);
//   const navigate = useNavigate();  // Hook to navigate between pages

//   useEffect(() => {
//     // Fetch the JSON data from the local testQuestions.json file (or a similar endpoint)
//     fetch('/data/testQuestions.json', {
//       headers: {
//         accept: 'application/json'
//       }
//     })
//     .then(response => response.json())
//     .then(data => {
//       // Select 10 random questions from the loaded data
//       const randomQuestions = getRandomQuestions(data.questions, 10);
//       setQuestions(randomQuestions);
//     })
//     .catch(error => console.error("Error fetching questions:", error));
//   }, []);

//   // Handle the answer selection
//   const handleSelectAnswer = (questionId, answer) => {
//     setUserAnswers({
//       ...userAnswers,
//       [questionId]: answer
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (evt) => {
//     evt.preventDefault();
    
//     fetch('/submit_practice_test', {   
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',  
//         accept: 'application/json'
//       },
//       body: JSON.stringify(userAnswers)
//     })
//     .then(response => response.json())
//     .then(data => {
//       setScore(data.score);  // Save the score
 
//     navigate('/score_display', { 
//       state: { 
//         score: data.score, 
//         total: questions.length,
//         results: questions.map(q => ({
//           question: q.question,
//           correctAnswer: q.answer,
//           yourAnswer: userAnswers[q.id] || 'No Answer Selected' 
//         }))
//       } 
//     });
//     })
//     .catch(error => console.error("Error submitting test:", error));
//     };
//   // Show the score 
//   if (score !== null) {
//     return <div>You scored {score} out of {questions.length}!</div>
//   }

//   const handleBack = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   const isLastQuestion = currentQuestionIndex === questions.length - 1;

//   return (
//     <div className="test-container">
//       {/* Progress Bar */}
//       <div className="test-navBar">
//         <div className="test-progressContainer">
//           <div className="test-progressWrapper">
//             <div
//               className="test-progressBar"
//               style={{
//                 width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
//               }}
//             />
//           </div>
//           <div className="test-progressText">{currentQuestionIndex + 1}/{questions.length}</div>
//         </div>
//         <Link to="/practice_test" className="test-iconWrapper">
//           <div className="test-icon">
//             <img className="test-xicon16px" alt="Close" src="/img/Xicon.png" />
//           </div>
//         </Link>
//       </div>

//       {/* Test Content */}
//       <div className="test-frameGroup">
//         <div className="test-frameContainer">
//           <div className="test-questionWrapper">
//             <div className="test-questionText">{questions[currentQuestionIndex]?.question}</div>
//           </div>
//           <div className="test-optionsContainer">
//             {questions[currentQuestionIndex]?.options.map((option, i) => (
//               <div key={i} className={`test-optionCard ${userAnswers[questions[currentQuestionIndex]?.id] === option ? 'test-selectedOption' : ''}`} onClick={() => handleSelectAnswer(questions[currentQuestionIndex]?.id, option)}>
//                 <div className="test-radioWrapper">
//                   <div className={`test-radio ${userAnswers[questions[currentQuestionIndex]?.id] === option ? 'test-radioSelected' : ''}`} />
//                 </div>
//                 <div className="test-optionContent">
//                   <div className="test-optionLabel">{option}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="test-footer">
//         <div className="test-buttonWrapper">
//           <div className="test-secondaryButton" onClick={handleBack}>
//             <div className="test-buttonText">Back</div>
//           </div>
//           {isLastQuestion ? (
//             <div className="test-primaryButton" onClick={handleSubmit}>
//               <div className="test-buttonText">Submit</div>
//             </div>
//           ) : (
//             <div className="test-primaryButton" onClick={handleNext}>
//               <div className="test-buttonText">Next</div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '/src/components/Test.css';

// Utility function to get random questions
function getRandomQuestions(questions, count) {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());  // Shuffle questions
  return shuffled.slice(0, count);  // Return only 'count' number of questions
}

export default function Test() {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(null);
  const navigate = useNavigate();  // Hook to navigate between pages

  useEffect(() => {
    // Fetch the JSON data from the local testQuestions.json file
    fetch('/data/testQuestions.json', {
      headers: {
        accept: 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      // Select 10 random questions from the loaded data
      const randomQuestions = getRandomQuestions(data.questions, 10);
      setQuestions(randomQuestions);
    })
    .catch(error => console.error("Error fetching questions:", error));
  }, []);

  // Handle the answer selection
  const handleSelectAnswer = (questionId, answer) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: answer
    });
  };

  // Handle form submission
  const handleSubmit = (evt) => {
    evt.preventDefault();

    // Calculate the score based on user's answers
    let calculatedScore = 0;
    questions.forEach((question) => {
      if (userAnswers[question.id] === question.answer) {
        calculatedScore += 1;
      }
    });

    // Update the score state
    setScore(calculatedScore);

    // Navigate to score display
    navigate('/score_display', { 
      state: { 
        score: calculatedScore, 
        total: questions.length,
        results: questions.map(q => ({
          question: q.question,
          correctAnswer: q.answer,
          yourAnswer: userAnswers[q.id] || 'No Answer Selected' 
        }))
      } 
    });
  };

  // Show the score after submission
  if (score !== null) {
    return <div>You scored {score} out of {questions.length}!</div>
  }

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <div className="test-container">
      {/* Progress Bar */}
      <div className="test-navBar">
        <div className="test-progressContainer">
          <div className="test-progressWrapper">
            <div
              className="test-progressBar"
              style={{
                width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
          <div className="test-progressText">{currentQuestionIndex + 1}/{questions.length}</div>
        </div>
        <Link to="/practice_test" className="test-iconWrapper">
          <div className="test-icon">
            <img className="test-xicon16px" alt="Close" src="/img/Xicon.png" />
          </div>
        </Link>
      </div>

      {/* Test Content */}
      <div className="test-frameGroup">
        <div className="test-frameContainer">
          <div className="test-questionWrapper">
            <div className="test-questionText">{questions[currentQuestionIndex]?.question}</div>
          </div>
          <div className="test-optionsContainer">
            {questions[currentQuestionIndex]?.options.map((option, i) => (
              <div key={i} className={`test-optionCard ${userAnswers[questions[currentQuestionIndex]?.id] === option ? 'test-selectedOption' : ''}`} onClick={() => handleSelectAnswer(questions[currentQuestionIndex]?.id, option)}>
                <div className="test-radioWrapper">
                  <div className={`test-radio ${userAnswers[questions[currentQuestionIndex]?.id] === option ? 'test-radioSelected' : ''}`} />
                </div>
                <div className="test-optionContent">
                  <div className="test-optionLabel">{option}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="test-footer">
        <div className="test-buttonWrapper">
          <div className="test-secondaryButton" onClick={handleBack}>
            <div className="test-buttonText">Back</div>
          </div>
          {isLastQuestion ? (
            <div className="test-primaryButton" onClick={handleSubmit}>
              <div className="test-buttonText">Submit</div>
            </div>
          ) : (
            <div className="test-primaryButton" onClick={handleNext}>
              <div className="test-buttonText">Next</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
