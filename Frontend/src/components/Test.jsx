import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '/src/components/Test.css';

export default function Test() {
  // States to hold the questions, user's answers, and score
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(null);
  const navigate = useNavigate();  // Hook to navigate between pages


  useEffect(() => {
    fetch("/practice_test", {
      headers: {
        accept: 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => setQuestions(data.questions))
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
    
    fetch('/submit_practice_test', {   
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',  
        accept: 'application/json'
      },
      body: JSON.stringify(userAnswers)
    })
    .then(response => response.json())
    .then(data => {
      setScore(data.score);  // Save the score
  // navigate('/score_display', { state: { score: data.score, total: questions.length } });
  //   })
  //   .catch(error => console.error("Error submitting test:", error));
  // };
 // Navigate to ScoreDisplay with userAnswers, questions, and correct answers
    navigate('/score_display', { 
      state: { 
        score: data.score, 
        total: questions.length,
        results: questions.map(q => ({
          question: q.question,
          correctAnswer: q.answer, // The correct answer from your questions array
          yourAnswer: userAnswers[q.id] || 'No Answer Selected' // The user's selected answer, or fallback if none selected
        }))
      } 
    });
    })
    .catch(error => console.error("Error submitting test:", error));
    };
  // Show the score 
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


// return (
  
//   <div className="test">
//     {/* Progress Bar */}
//     <div className="navBar">
//       <div className="progressContainer">
//         <div className="progressWrapper">
//           <div
//             className="progressBar"
//             style={{
//               width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
//             }}
//           />
//         </div>
//         <div className="progressText">{currentQuestionIndex + 1}/{questions.length}</div>
//       </div>
//       <Link to="/practice_test" className="iconWrapper">
//         <div className="icon">
//           <img className="xicon16px" alt="Close" src="/src/img/Xicon.png" />
//         </div>
//       </Link>
//     </div>

//     {/* Test Content */}
//     <div className="frameGroup">
//       <div className="frameContainer">
//         <div className="questionWrapper">
//           <div className="questionText">{questions[currentQuestionIndex]?.question}</div>
//         </div>
//         <div className="optionsContainer">
//           {questions[currentQuestionIndex]?.options.map((option, i) => (
//             <div key={i} className={`optionCard ${userAnswers[questions[currentQuestionIndex]?.id] === option ? 'selectedOption' : ''}`} onClick={() => handleSelectAnswer(questions[currentQuestionIndex]?.id, option)}>
//               <div className="radioWrapper">
//                 <div className={`radio ${userAnswers[questions[currentQuestionIndex]?.id] === option ? 'radioSelected' : ''}`} />
//               </div>
//               <div className="optionContent">
//                 <div className="optionLabel">{option}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>

//     {/* Footer */}
//     <div className="footer">
//       <div className="buttonWrapper">
//         <div className="secondaryButton" onClick={handleBack}>
//           <div className="buttonText">Back</div>
//         </div>
//         {isLastQuestion ? (
//           <div className="primaryButton" onClick={handleSubmit}>
//             <div className="buttonText">Submit</div>
//           </div>
//         ) : (
//           <div className="primaryButton" onClick={handleNext}>
//             <div className="buttonText">Next</div>
//           </div>
//         )}
//       </div>
//     </div>
//   </div>
// );
// }

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
          <img className="test-xicon16px" alt="Close" src="/src/img/Xicon.png" />
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