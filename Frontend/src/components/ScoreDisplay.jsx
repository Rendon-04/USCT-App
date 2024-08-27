import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import "/src/components/ScoreDisplay.css"



export default function ScoreDisplay  ()  {
    // const location = useLocation();
    // const { score, total } = location.state || { score: null, total: null };



//     return (
//       <div className="score-display-container">
//           <h1 className="score-title">Your Score</h1>
//           <div>
//               <p className="score-text">You scored {score} out of {total}.</p>
//           </div>
//           <div className="link-container">
//               <Link to="/practice_test">Take Another Test</Link>
//               <Link to="/view_scores">View Your Score History</Link>
//           </div>
//       </div>
//   );
// }
const location = useLocation();
const { score, total, results = [] } = location.state || { score: null, total: null, results: [] };

// return (
//     <div className="frame-parent">
//         <div className="frame-group">
//             <div className="your-score-parent">
//                 <div className="your-score">Your Score</div>
//                 <div className="in-order-to-container">
//                     <span className="in-order-to-container1">
//                         <span>In order to pass the test, you must score higher than 6.</span>
//                         <b> </b>
//                         <span className="you-scored-a">You scored {score}/{total}!</span>
//                     </span>
//                 </div>
//             </div>

//             {/* Section for reviewing wrong answers */}
//             <div className="review-section">
//                 <h2>Review the questions you got <b>wrong</b></h2>
//                 {results
//                     .filter(result => result.yourAnswer !== result.correctAnswer)
//                     .map((result, index) => (
//                         <div key={index} className="background-parent">
//                             <div className="background wrong-answer"></div>
//                             <div className="frame-wrapper">
//                                 <div className="question-container">
//                                     <div className="question-text">{result.question}</div>
//                                     <div className="correct-answer-container">
//                                         <span className="review-the-questions">Correct answer: </span>
//                                         <span>{result.correctAnswer}</span>
//                                     </div>
//                                     <div className="your-answer-container">
//                                         <span className="review-the-questions">Your answer: </span>
//                                         <span>{result.yourAnswer}</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//             </div>

//             {/* Section for reviewing right answers */}
//             <div className="review-section">
//                 <h2>Review the questions you got <b>right</b></h2>
//                 {results
//                     .filter(result => result.yourAnswer === result.correctAnswer)
//                     .map((result, index) => (
//                         <div key={index} className="background-parent">
//                             <div className="background right-answer"></div>
//                             <div className="frame-wrapper">
//                                 <div className="question-container">
//                                     <div className="question-text">{result.question}</div>
//                                     <div className="correct-answer-container">
//                                         <span className="review-the-questions">Correct answer: </span>
//                                         <span>{result.correctAnswer}</span>
//                                     </div>
//                                     <div className="your-answer-container">
//                                         <span className="review-the-questions">Your answer: </span>
//                                         <span>{result.yourAnswer}</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//             </div>
//         </div>
//     </div>
// );
// }


return (
  <div className="page-container">
    <div className="score-summary">
      <div className="your-score-parent">
        <div className="your-score">Your score</div>
        <div className="in-order-to-container">
          <span className="in-order-to-container1">
            <span>In order to pass the test, you must score higher than 6.</span>
            <b> </b>
            <span className="you-scored-a">You scored {score}/{total}!</span>
          </span>
        </div>
        <div className="button-container">
            <Link to="/practice_test">
              <button className="primarybutton">Retake test</button>
            </Link>
            <Link to="/view_scores">
              <button className="secondarybutton">View dashboard</button>
            </Link>
          </div>
        </div>
       </div>

    <div className="review-container">
      <div className="review-section">
        <h2>Review the questions you got <b>wrong</b></h2>
        {results
          .filter(result => result.yourAnswer !== result.correctAnswer)
          .map((result, index) => (
            <div key={index} className="background-parent">
              <div className="background wrong-answer"></div>
              <div className="frame-wrapper">
                <div className="question-container">
                  <div className="question-text">{result.question}</div>
                  <div className="correct-answer-container">
                    <span className="review-the-questions">Correct answer: </span>
                    <span>{result.correctAnswer}</span>
                  </div>
                  <div className="your-answer-container">
                    <span className="review-the-questions">Your answer: </span>
                    <span>{result.yourAnswer}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="review-section">
        <h2>Review the questions you got <b>right</b></h2>
        {results
          .filter(result => result.yourAnswer === result.correctAnswer)
          .map((result, index) => (
            <div key={index} className="background-parent">
              <div className="background right-answer"></div>
              <div className="frame-wrapper">
                <div className="question-container">
                  <div className="question-text">{result.question}</div>
                  <div className="correct-answer-container">
                    <span className="review-the-questions">Correct answer: </span>
                    <span>{result.correctAnswer}</span>
                  </div>
                  <div className="your-answer-container">
                    <span className="review-the-questions">Your answer: </span>
                    <span>{result.yourAnswer}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
);
}