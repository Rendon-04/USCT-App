import React from 'react';
import '/src/components/Resources.css'

// Resources component 

export default function Resources ()  {     
  return (
    <div className="frame-parent">
      <div className="frame-wrapper">
        <div className="frame-group">
          <div className="frame-container">
            <div className="resources-parent">
              <div className="resources">Resources</div>
              <div className="this-collection-from">
                This collection from the USCIS Citizenship Resource Center supports immigrants on their path to U.S. citizenship, helps educators prepare learners, and assists organizations in promoting citizenship and integration into American society.
              </div>
            </div>
          </div>
          <div className="frame-div">

            {/* Card 1 */}
            <a className="frame-parent1" href="https://www.uscis.gov/citizenship-resource-center/new-us-citizens" target="_blank" rel="noopener noreferrer">
              <img className="frame-child" alt="New U.S. Citizens" src="/src/img/usct.png" />
              <div className="frame-parent2">
                <div className="naturalization-eligibility-too-parent">
                  <span className="naturalization-eligibility-too">New U.S. Citizens</span>
                  <div className="find-out-whether">Information and resources for new citizens of the United States.</div>
                </div>
                <div className="subtleiconbutton">
                  <img className="icon-16px" alt="" src="src/img/SubtleIconButton.png" />
                </div>
              </div>
            </a>

            {/* Card 2 */}
            <a className="frame-parent1" href="https://www.uscis.gov/citizenship/learn-about-citizenship" target="_blank" rel="noopener noreferrer">
              <img className="frame-child" alt="Learn About Citizenship" src="/src/img/usct.png" />
              <div className="frame-parent2">
                <div className="naturalization-eligibility-too-parent">
                  <span className="naturalization-eligibility-too">Learn About Citizenship</span>
                  <div className="find-out-whether">Educational resources to help you learn about the citizenship process and requirements.</div>
                </div>
                <div className="subtleiconbutton">
                  <img className="icon-16px" alt="" src="src/img/SubtleIconButton.png" />
                </div>
              </div>
            </a>

            {/* Card 3 */}
            <a className="frame-parent1" href="https://www.uscis.gov/citizenship/apply-for-citizenship" target="_blank" rel="noopener noreferrer">
              <img className="frame-child" alt="Apply for Citizenship" src="/src/img/usct.png" />
              <div className="frame-parent2">
                <div className="naturalization-eligibility-too-parent">
                  <span className="naturalization-eligibility-too">Apply for Citizenship</span>
                  <div className="find-out-whether">Steps and guidelines to apply for U.S. citizenship.</div>
                </div>
                <div className="subtleiconbutton">
                  <img className="icon-16px" alt="" src="src/img/SubtleIconButton.png" />
                </div>
              </div>
            </a>

            {/* Card 4 */}
            <a className="frame-parent1" href="https://www.uscis.gov/citizenship/find-study-materials-and-resources" target="_blank" rel="noopener noreferrer">
              <img className="frame-child" alt="Naturalization Test and Study Resources" src="/src/img/usct.png" />
              <div className="frame-parent2">
                <div className="naturalization-eligibility-too-parent">
                  <span className="naturalization-eligibility-too">Naturalization Test and Study Resources</span>
                  <div className="find-out-whether">Study materials and resources to help you prepare for the naturalization test.</div>
                </div>
                <div className="subtleiconbutton">
                  <img className="icon-16px" alt="" src="src/img/SubtleIconButton.png" />
                </div>
              </div>
            </a>

            {/* Card 5 */}
            <a className="frame-parent1" href="https://www.uscis.gov/citizenship/civic-integration/learn-about-the-citizenship-and-integration-grant-program" target="_blank" rel="noopener noreferrer">
              <img className="frame-child" alt="Learn About the Citizenship and Integration Grant Program" src="/src/img/usct.png" />
              <div className="frame-parent2">
                <div className="naturalization-eligibility-too-parent">
                  <span className="naturalization-eligibility-too">Learn About the Citizenship and Integration Grant Program</span>
                  <div className="find-out-whether">Information on grants available to promote citizenship and integration.</div>
                </div>
                <div className="subtleiconbutton">
                  <img className="icon-16px" alt="" src="src/img/SubtleIconButton.png" />
                </div>
              </div>
            </a>

            {/* Card 6 */}
            <a className="frame-parent1" href="https://www.uscis.gov/citizenship/resources-for-educational-programs" target="_blank" rel="noopener noreferrer">
              <img className="frame-child" alt="Resources for Educational Programs" src="/src/img/usct.png" />
              <div className="frame-parent2">
                <div className="naturalization-eligibility-too-parent">
                  <span className="naturalization-eligibility-too">Resources for Educational Programs</span>
                  <div className="find-out-whether">Access resources to support educational programs related to citizenship.</div>
                </div>
                <div className="subtleiconbutton">
                  <img className="icon-16px" alt="" src="/src/img/SubtleIconButton.png" />
                </div>
              </div>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}