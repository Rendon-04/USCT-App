import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './study.css';

export default function Study() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the questions data
    fetch('/src/components/questionsNaturalizationTest.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, []);

//   return (
//     <div className="study-container">
//       <h1 className="main-heading">Study</h1>
//       <p className="intro-text">
//         Get ready for the U.S. citizenship test. On the day of your interview, you'll answer 10 questions from a list of 100. Use our tools to study all 100 questions, 10 random questions, or focus on key themes.
//       </p>

//       <div className="card-group">
//         <Link to="/study_for_the_test/all" className="card">
//           <div className="card-body">
//             <h2>Study 100 questions</h2>
//             <p>Get started by studying all 100 questions in all categories.</p>
//           </div>
//         </Link>
//         <Link to="/study_for_the_test/random" className="card">
//           <div className="card-body">
//             <h2>Study 10 random questions</h2>
//             <p>Try studying questions like you would in the real interview.</p>
//           </div>
//         </Link>
//       </div>
//       <div className="card-group">
//               {Object.keys(data).map((category) => (
//                 <Link 
//                   key={category} 
//                   to={`/study_for_the_test/${category.replace(/\s+/g, '-')}`} 
//                   className="card"
//                 >
//                   <div className="card-body">
//                     <h2>{category}</h2>
//                     <p>Learn about {category.toLowerCase()}.</p>
//                   </div>
//                 </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// return (
// <body>
//   <div className="frame-parent">
//   <div className='frame-wrapper'>
//     <div className='study-parent'>
//   <div className="study">Study</div>
//   <div className="get-ready-for">
//     Get ready for the U.S. citizenship test. On the day of your interview, you'll answer 10 questions from a list of 100. Use our tools to study all 100 questions, 10 random questions, or focus on key themes.
//   </div>
//   </div>

//   <div className="frame-group">
//     <div className="get-started-with">Get started with all or random questions</div>
   
//     <div className="card-group">
//     <Link to="/study_for_the_test/all" className="card">
//         <div className="frame-parent">
//         <div className="study-100-questions-parent">
//           <div className="study-100-questions">Study 100 questions</div>
//           <div className="get-started-by">
//             Get started by studying all 100 questions in all categories.
//           </div>
//         </div>
//         <div className="subtleiconbutton">
//           <img className="icon-16px" alt="" src="/src/img/SubtleIconButton.png" />
//         </div>
//         </div>
//     </Link>

//       <Link to="/study_for_the_test/random" className="card">
//       <div class="frame-parent">
//         <div class="study-10-random-questions-parent">
//         <div class="study-10-random">Study 10 random questions</div>
//         <div class="try-studying-random">Try studying random questions like you would in the real interview.</div>
//         </div>
//         <div class="subtleiconbutton">
//         <img class="icon-16px" alt="" src="/src/img/SubtleIconButton.png"></img>
//       </div>
//       </div>
//       </Link>
//     </div>
//   </div>

//   <div className="frame-group">
//     <div className="get-started-by">Get started by theme</div>
//     <div className="frame-parent3">
//       {Object.keys(data).map((category) => (
//         <Link 
//           key={category} 
//           to={`/study_for_the_test/${category.replace(/\s+/g, '-')}`} 
//           className="card"
//         >
//           <div className="card-body">
//             <h2>{category}</h2>
//             <p>Learn about {category.toLowerCase()}.</p>
//           </div>
//         </Link>
//       ))}
//     </div>
//   </div>
// </div>
// </div>
// </body>
// )
// }

return (
  <div className="frame-parent">
    <div className="frame-wrapper">
      <div className="study-parent">
        <div className="study">Study</div>
        <div className="get-ready-for">
          Get ready for the U.S. citizenship test. On the day of your interview, you'll answer 10 questions from a list of 100. Use our tools to study all 100 questions, 10 random questions, or focus on key themes.
        </div>
      </div>
    </div>
    <div className="frame-group">
      <div className="get-started-with-random-questi-parent">
        <div className="get-started-with">Get started with random questions</div>
        <div className="cards">
          <div className="background-parent">
            <div className="background">
              <div className="image-14"></div>
            </div>
            
            <div className="frame-container">
              <div className="study-100-questions-parent">
                <Link to="/study_for_the_test/all">
                <div className="study-100-questions">Study 100 questions</div>
                <div className="get-started-by">Get started by studying all 100 questions in all categories.</div>
                </Link>
              </div>
              <div className="subtleiconbutton">
                <img className="icon-16px" alt="" src="/src/img/SubtleIconButton.png" />
              </div>
            </div>

          </div>
          <div className="background-parent">
            <div className="background">
              <div className="image-14"></div>
            </div>
            <div className="frame-container">
              <div className="study-100-questions-parent">
                <Link to="/study_for_the_test/random" >
                <div className="study-100-questions">Study 10 random questions</div>
                <div className="get-started-by">Try studying random questions like you would in the real interview.</div>
                </Link>
              </div>
              <div className="subtleiconbutton">
                <img className="icon-16px" alt="" src="/src/img/SubtleIconButton.png"/>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      

      <div className="get-started-by-theme-parent">
        <div className="get-started-by1">Get started by theme</div>
        <div className="cards1">
          <div className="background-parent">
            <img className="background-icon" alt="" src="/src/img/AmericanDemocracy.png" />
            <div className="frame-parent1">
              <div className="study-100-questions-parent">
                <Link to="/study_for_the_test/Principles of American Democracy">
                <div className="study-100-questions">American democracy</div>
                <div className="get-started-by">Learn about the principles and structure of American democracy.</div>
                </Link>
              </div>
              <div className="subtleiconbutton">
                <img className="icon-16px" alt="" src="/src/img/SubtleIconButton.png" />
              </div>
            </div>
          </div>
          <div className="background-parent">
            <img className="background-icon" alt="" src="/src/img/AmericanGovernment.png" />
            <div className="frame-wrapper1">
              <div className="frame-parent2">
                <div className="study-100-questions-parent">
                <Link to="/study_for_the_test/System of Government">
                  <div className="american-government">American government</div>
                  <div className="get-started-by">Understand the branches and functions of the U.S. government.</div>
                </Link>
                </div>
                <div className="subtleiconbutton">
                  <img className="icon-16px" alt="" src="/src/img/SubtleIconButton.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="background-parent">
            <img className="background-icon" alt="" src="/src/img/Rights.png" />
            <div className="frame-wrapper2">
              <div className="frame-parent3">
                <div className="rights-parent">
                <Link to="/study_for_the_test/Rights and Responsibilities">
                  <div className="american-government">Rights</div>
                  <div className="get-started-by">Know your rights and responsibilities as a U.S. citizen.</div>
                </Link>
                </div>
                <div className="subtleiconbutton">
                  <img className="icon-16px" alt="" src="/src/img/SubtleIconButton.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cards1">
          <div className="background-parent">
            <img className="background-icon" alt="" src="/src/img/ColonialPeriod.png" />
            <div className="frame-parent1">
              <div className="study-100-questions-parent">
              <Link to="/study_for_the_test/Colonial Period and Independence">
                <div className="study-100-questions">The Colonial period</div>
                <div className="get-started-by">Discover the history and significance of the Colonial period in America.</div>
             </Link>
             </div>
              <div className="subtleiconbutton">
                <img className="icon-16px" alt="" src="/src/img/SubtleIconButton.png" />
              </div>
            </div>
          </div>
          <div className="background-parent">
            <img className="background-icon" alt="" src="/src/img/1800s.png" />
            <div className="frame-parent1">
              <div className="study-100-questions-parent">
              <Link to="/study_for_the_test/1800s">
                <div className="study-100-questions">The 1800s</div>
                <div className="get-started-by">Explore key events and developments in 19th century America.</div>
              </Link>
              </div>
              <div className="subtleiconbutton">
                <img className="icon-16px" alt="" src="/src/img/SubtleIconButton.png" />
              </div>
            </div>
          </div>
          <div className="background-parent">
            <img className="background-icon" alt="" src="/src/img/RecentAmericanHistory.png" />
            <div className="frame-parent1">
              <div className="study-100-questions-parent">
              <Link to="/study_for_the_test/Recent American History">
                <div className="study-100-questions">Recent American history</div>
                <div className="get-started-by">Study important events and changes in modern American history.</div>
              </Link>
              </div>
              <div className="subtleiconbutton">
                <img className="icon-16px" alt="" src="/src/img/SubtleIconButton.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="cards1">
          <div className="background-parent">
            <img className="background-icon" alt="" src="/src/img/Geography.png" />
            <div className="frame-parent1">
              <div className="study-100-questions-parent">
              <Link to="/study_for_the_test/Geography">
                <div className="study-100-questions">Geography</div>
                <div className="get-started-by">Familiarize yourself with the geography of the United States.</div>
              </Link>
              </div>
              <div className="subtleiconbutton">
                <img className="icon-16px" alt="" src="/src/img/SubtleIconButton.png" />
              </div>
            </div>
          </div>
          <div className="background-parent">
            <img className="background-icon" alt="" src="/src/img/symbols.png" />
            <div className="frame-parent1">
              <div className="study-100-questions-parent">
              <Link to="/study_for_the_test/Symbols">
                <div className="study-100-questions">Symbols</div>
                <div className="get-started-by">Learn about the symbols and icons that represent the United States.</div>
              </Link>
              </div>
              <div className="subtleiconbutton">
                <img className="icon-16px" alt="" src="/src/img/SubtleIconButton.png" />
              </div>
            </div>
          </div>
          <div className="background-parent">
            <img className="background-icon" alt="" src="/src/img/Holidays.png"/>
            <div className="frame-parent1">
              <div className="study-100-questions-parent">
              <Link to="/study_for_the_test/Holidays">
                <div className="study-100-questions">Holidays</div>
                <div className="get-started-by">Get to know the holidays and traditions celebrated in the U.S.</div>
              </Link>
              </div>
              <div className="subtleiconbutton">
                <img className="icon-16px" alt="" src="/src/img/SubtleIconButton.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};