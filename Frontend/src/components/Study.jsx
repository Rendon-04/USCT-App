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

return (
  <div className="study-container">
  <h1 className="main-heading">Study</h1>
  <p className="intro-text">
    Get ready for the U.S. citizenship test. On the day of your interview, you'll answer 10 questions from a list of 100. Use our tools to study all 100 questions, 10 random questions, or focus on key themes.
  </p>

  <div className="frame-group">
    <div className="get-started-with">Get started with all or random questions</div>
   
    <div className="card-group">
    <Link to="/study_for_the_test/all" className="frame-parent">
        <div className="study-100-questions-parent">
          <div className="study-100-questions">Study 100 questions</div>
          <div className="get-started-by">
            Get started by studying all 100 questions in all categories.
          </div>
        </div>
        <div className="subtleiconbutton">
          <img className="icon-16px" alt="" src="Icon (16px).svg" />
        </div>
    </Link>

      <Link to="/study_for_the_test/random" className="card">
        <div className="card-body">
          <h2>Study 10 random questions</h2>
          <p>Try studying questions like you would in the real interview.</p>
        </div>
      </Link>
    </div>
  </div>

  <div className="frame-group">
    <div className="get-started-with">Get started by theme</div>
    <div className="frame-parent3">
      {Object.keys(data).map((category) => (
        <Link 
          key={category} 
          to={`/study_for_the_test/${category.replace(/\s+/g, '-')}`} 
          className="card"
        >
          <div className="card-body">
            <h2>{category}</h2>
            <p>Learn about {category.toLowerCase()}.</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
</div>

)
}