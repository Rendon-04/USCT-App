import React from 'react';
import './Practice.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import "./Practice.css"

export default function Practice() {
  return (
    <body>
    <div className="practiceFrameParent">
      <div className="practiceFrameGroup">
        <div className="practiceFrameContainer">
          <div className="practiceFrameWrapper">
            <div className="practiceTestYourSkillsParent">
              <div className="practiceTestYourSkills">Test Your Skills</div>
              <div className="practiceGetReadyFor">
                Get ready for the U.S. citizenship test. On the day of your interview, you'll answer 10 questions from a list of 100. Use our tools to study 10 random questions.
               
                <div>
                Please note, there are some answers that vary depending on your state and the election year. For the latest information and any updates to the test, 
                please visit the <a 
                href="https://www.uscis.gov/citizenship/find-study-materials-and-resources/check-for-test-updates" 
                target="_blank" 
                style={{ color: 'blue', textDecoration: 'underline' }}
              >
                official test updates page
              </a>
              </div>
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
      <img className="practiceImage1Icon" alt="" src="/img/practice.png" />
    </div>
    </body>
  );
} 