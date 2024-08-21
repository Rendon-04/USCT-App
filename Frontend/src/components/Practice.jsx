import React from 'react';
import './Practice.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import "./Practice.css"

// export default function Practice() {
//   return (
//     <div>
//       <div className="title">
//         <h1>Practice For The Test</h1>
//       </div>
//       <div className="description">
//         <p>
//           Get ready for the U.S. citizenship test. On the day of your interview, you'll answer 10 questions from a list of 100. Use our tool to study for these questions. 
//         </p>
//       </div>
     
//         <div className="row">
//           <div className="col-12">
//             <Link to="/test">
//               <button type="button" className="btn btn-primary">Start Test</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//   );
// }
export default function Practice() {
  return (
    <div className="practiceFrameParent">
      <div className="practiceFrameGroup">
        <div className="practiceFrameContainer">
          <div className="practiceFrameWrapper">
            <div className="practiceTestYourSkillsParent">
              <div className="practiceTestYourSkills">Test Your Skills</div>
              <div className="practiceGetReadyFor">
                Get ready for the U.S. citizenship test. On the day of your interview, you'll answer 10 questions from a list of 100. Use our tools to study 10 random questions.
              </div>
            </div>
          </div>
          <div className="practiceFrameDiv">
            <div className="practiceRadiocardWrapper">
              <div className="practiceRadiocard">
                <div className="practiceTestStructure">Test Structure</div>
                <div className="practiceColParent">
                  <div className="practiceCol">
                    <div className="practiceCard">
                      <div className="practiceContentsWrapper">
                        <div className="practiceContents">
                          <div className="practiceText">
                            <div className="practiceLabel">Multiple choice</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="practiceCol">
                    <div className="practiceCard">
                      <div className="practiceContentsWrapper">
                        <div className="practiceContents">
                          <div className="practiceText">
                            <div className="practiceLabel">10 random questions</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="practiceGuidance" />
              </div>
            </div>
          </div>
        </div>
        <div className="practicePrimaryButton">
          <Link to="/test">
            <div className="practiceText2">Start Test</div>
          </Link>
        </div>
      </div>
      <img className="practiceImage1Icon" alt="" src="/src/img/practice.png" />
    </div>
  );
}