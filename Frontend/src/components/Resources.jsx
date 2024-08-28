import React from 'react';
import './Resources.css'

// Resources component 

export default function Resources ()  {     
//   return (
//     <div className="frame-parent-r">
//       <div className="frame-wrapper-r">
//         <div className="frame-group-r">
//           <div className="frame-container-r">
//             <div className="resources-parent-r">
//               <div className="resources-r">Resources</div>
//               <div className="this-collection-from-r">
//                 This collection from the USCIS Citizenship Resource Center supports immigrants on their path to U.S. citizenship, helps educators prepare learners, and assists organizations in promoting citizenship and integration into American society.
//               </div>
//             </div>
//           </div>
//           <div className="frame-div-r">

//             {/* Card 1 */}
//             <a className="resources-frame-parent1" href="https://www.uscis.gov/citizenship-resource-center/new-us-citizens" target="_blank" rel="noopener noreferrer">
//               <img className="resources-frame-child" alt="New U.S. Citizens" src="/src/img/usct.png" />
//               <div className="resources-frame-parent2">
//                 <div className="naturalization-eligibility-too-parent">
//                   <span className="naturalization-eligibility-too">New U.S. Citizens</span>
//                   <div className="information">Information and resources for new citizens of the United States.</div>
//                 </div>
//                 <div className="resources-button">
//                   <img className="resources-icon" alt="" src="src/img/SubtleIconButton.png" />
//                 </div>
//               </div>
//             </a>

//             {/* Card 2 */}
//             <a className="resources-frame-parent1" href="https://www.uscis.gov/citizenship/learn-about-citizenship" target="_blank" rel="noopener noreferrer">
//               <img className="resources-frame-child" alt="Learn About Citizenship" src="/src/img/usct.png" />
//               <div className="resources-frame-parent2">
//                 <div className="naturalization-eligibility-too-parent">
//                   <span className="naturalization-eligibility-too">Learn About Citizenship</span>
//                   <div className="information">Educational resources to help you learn about the citizenship process and requirements.</div>
//                 </div>
//                 <div className="resources-button">
//                   <img className="resources-icon" alt="" src="src/img/SubtleIconButton.png" />
//                 </div>
//               </div>
//             </a>

//             {/* Card 3 */}
//             <a className="resources-frame-parent1" href="https://www.uscis.gov/citizenship/apply-for-citizenship" target="_blank" rel="noopener noreferrer">
//               <img className="resources-frame-child" alt="Apply for Citizenship" src="/src/img/usct.png" />
//               <div className="resources-frame-parent2">
//                 <div className="naturalization-eligibility-too-parent-r">
//                   <span className="naturalization-eligibility-too-r">Apply for Citizenship</span>
//                   <div className="resources-information">Steps and guidelines to apply for U.S. citizenship.</div>
//                 </div>
//                 <div className="resources-button">
//                   <img className="resources-icon" alt="" src="src/img/SubtleIconButton.png" />
//                 </div>
//               </div>
//             </a>

//             {/* Card 4 */}
//             <a className="resources-frame-parent1" href="https://www.uscis.gov/citizenship/find-study-materials-and-resources" target="_blank" rel="noopener noreferrer">
//               <img className="resources-frame-child" alt="Naturalization Test and Study Resources" src="/src/img/usct.png" />
//               <div className="resources-frame-parent2">
//                 <div className="naturalization-eligibility-too-parent">
//                   <span className="naturalization-eligibility-too">Naturalization Test and Study Resources</span>
//                   <div className="information">Study materials and resources to help you prepare for the naturalization test.</div>
//                 </div>
//                 <div className="resources-button">
//                   <img className="resources-icon" alt="" src="src/img/SubtleIconButton.png" />
//                 </div>
//               </div>
//             </a>

//             {/* Card 5 */}
//             <a className="resources-frame-parent1" href="https://www.uscis.gov/citizenship/civic-integration/learn-about-the-citizenship-and-integration-grant-program" target="_blank" rel="noopener noreferrer">
//               <img className="resources-frame-child" alt="Learn About the Citizenship and Integration Grant Program" src="/src/img/usct.png" />
//               <div className="resources-frame-parent2">
//                 <div className="naturalization-eligibility-too-parent">
//                   <span className="naturalization-eligibility-too">Learn About the Citizenship and Integration Grant Program</span>
//                   <div className="information">Information on grants available to promote citizenship and integration.</div>
//                 </div>
//                 <div className="resources-button">
//                   <img className="resources-icon" alt="" src="src/img/SubtleIconButton.png" />
//                 </div>
//               </div>
//             </a>

//             {/* Card 6 */}
//             <a className="resources-frame-parent1" href="https://www.uscis.gov/citizenship/resources-for-educational-programs" target="_blank" rel="noopener noreferrer">
//               <img className="resources-frame-child" alt="Resources for Educational Programs" src="/src/img/usct.png" />
//               <div className="resources-frame-parent2">
//                 <div className="naturalization-eligibility-too-parent">
//                   <span className="naturalization-eligibility-too">Resources for Educational Programs</span>
//                   <div className="information">Access resources to support educational programs related to citizenship.</div>
//                 </div>
//                 <div className="resources-button">
//                   <img className="resources-icon" alt="" src="/src/img/SubtleIconButton.png" />
//                 </div>
//               </div>
//             </a>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// 

// return (
//   <div className="frame-parent-r">
//     <div className="frame-wrapper-r">
//       <div className="frame-group-r">
//         <div className="frame-container-r">
//           <div className="resources-parent-r">
//             <div className="resources-r">Resources</div>
//             <div className="intro-description">
//               This collection from the USCIS Citizenship Resource Center supports immigrants on their path to U.S. citizenship, helps educators prepare learners, and assists organizations in promoting citizenship and integration into American society.
//             </div>
//           </div>
//         </div>
//         <div className="frame-div-r">
//           <div className="column">
//             {/* Card 1 */}
//             <div className="resources-frame-parent1">
//               <img className="resources-frame-child" alt="New U.S. Citizens" src="/src/img/usct.png" />
//               <div className="resources-frame-parent2">
//                 <div className="info-title-parent">
//                   <a className="info-title" href="https://www.uscis.gov/citizenship-resource-center/new-us-citizens" target="_blank" rel="noopener noreferrer">
//                     New U.S. Citizens
//                   </a>
//                   <div className="information">Information and resources for new citizens of the United States.</div>
//                 </div>
//                 <div className="resources-button">
//                   <img className="resources-icon" alt="arrow icon" src="src/img/SubtleIconButton.png" />
//                 </div>
//               </div>
//             </div>

//             {/* Card 2 */}
//             <div className="resources-frame-parent1">
//               <img className="resources-frame-child" alt="Learn About Citizenship" src="/src/img/usct.png" />
//               <div className="resources-frame-parent2">
//                 <div className="info-title-parent">
//                   <a className="info-title" href="https://www.uscis.gov/citizenship/learn-about-citizenship" target="_blank" rel="noopener noreferrer">
//                     Learn About Citizenship
//                   </a>
//                   <div className="information">Educational resources to help you learn about the citizenship requirements.</div>
//                 </div>
//                 <div className="resources-button">
//                   <img className="resources-icon" alt="arrow icon" src="src/img/SubtleIconButton.png" />
//                 </div>
//               </div>
//             </div>

//             {/* Card 3 */}
//             <div className="resources-frame-parent1">
//               <img className="resources-frame-child" alt="Apply for Citizenship" src="/src/img/usct.png" />
//               <div className="resources-frame-parent2">
//                 <div className="info-title-parent">
//                   <a className="info-title" href="https://www.uscis.gov/citizenship/apply-for-citizenship" target="_blank" rel="noopener noreferrer">
//                     Apply for Citizenship
//                   </a>
//                   <div className="information">Steps and guidelines to apply for U.S. citizenship.</div>
//                 </div>
//                 <div className="resources-button">
//                   <img className="resources-icon" alt="arrow icon" src="src/img/SubtleIconButton.png" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="column">
//             {/* Card 4 */}
//             <div className="resources-frame-parent1">
//               <img className="resources-frame-child" alt="Naturalization Test and Study Resources" src="/src/img/usct.png" />
//               <div className="resources-frame-parent2">
//                 <div className="info-title-parent">
//                   <a className="info-title" href="https://www.uscis.gov/citizenship/find-study-materials-and-resources" target="_blank" rel="noopener noreferrer">
//                     Naturalization Test and Study Resources
//                   </a>
//                   <div className="information">Study materials and resources to help you prepare for the naturalization test.</div>
//                 </div>
//                 <div className="resources-button">
//                   <img className="resources-icon" alt="arrow icon" src="src/img/SubtleIconButton.png" />
//                 </div>
//               </div>
//             </div>

//             {/* Card 5 */}
//             <div className="resources-frame-parent1">
//               <img className="resources-frame-child" alt="Learn About the Citizenship and Integration Grant Program" src="/src/img/usct.png" />
//               <div className="resources-frame-parent2">
//                 <div className="info-title-parent">
//                   <a className="info-title" href="https://www.uscis.gov/citizenship/civic-integration/learn-about-the-citizenship-and-integration-grant-program" target="_blank" rel="noopener noreferrer">
//                     Learn About the Citizenship Grant Program
//                   </a>
//                   <div className="information">Information on grants available to promote citizenship and integration.</div>
//                 </div>
//                 <div className="resources-button">
//                   <img className="resources-icon" alt="arrow icon" src="src/img/SubtleIconButton.png" />
//                 </div>
//               </div>
//             </div>

//             {/* Card 6 */}
//             <div className="resources-frame-parent1">
//               <img className="resources-frame-child" alt="Resources for Educational Programs" src="/src/img/usct.png" />
//               <div className="resources-frame-parent2">
//                 <div className="info-title-parent">
//                   <a className="info-title" href="https://www.uscis.gov/citizenship/resources-for-educational-programs" target="_blank" rel="noopener noreferrer">
//                     Resources for Educational Programs
//                   </a>
//                   <div className="information">Access resources to support educational programs related to citizenship.</div>
//                 </div>
//                 <div className="resources-button">
//                   <img className="resources-icon" alt="arrow icon" src="src/img/SubtleIconButton.png" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
// }
return (
  <body>
    <div className="resource-page-wrapper">
<div className="resource-frame-parent">
      <div className="resources-frame-wrapper">
        <div className="resources-frame-group">
          <div className="resources-frame-container">
            <div className="resources-parent">
              <h1 className="resources">Resources</h1>
              <p className="intro-description">
                This collection from the USCIS Citizenship Resource Center supports immigrants on their path to U.S. citizenship, helps educators prepare learners, and assists organizations in promoting citizenship and integration into American society.
              </p>
            </div>
          </div>
        </div>
        <div className="resources-frame-div">
          <div className="resources-column">
            {/* Card 1 */}
            <div className="resources-frame-parent1">
              <img className="resources-frame-child" alt="New U.S. Citizens" src="/src/img/usct.png" />
              <div className="resources-frame-parent2">
                <div className="resources-info-title-parent">
                  <a className="resources-info-title" href="https://www.uscis.gov/citizenship-resource-center/new-us-citizens" target="_blank" rel="noopener noreferrer">
                    New U.S. Citizens
                  </a>
                  <p className="resources-information">Information and resources for new citizens of the United States.</p>
                </div>
                <div className="resources-button">
                  <img className="resources-icon" alt="arrow icon" src="src/img/SubtleIconButton.png" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="resources-frame-parent1">
              <img className="resources-frame-child" alt="Learn About Citizenship" src="/src/img/usct.png" />
              <div className="resources-frame-parent2">
                <div className="resources-info-title-parent">
                  <a className="resources-info-title" href="https://www.uscis.gov/citizenship/learn-about-citizenship" target="_blank" rel="noopener noreferrer">
                    Learn About Citizenship
                  </a>
                  <p className="resources-information">Educational resources to help you learn about the citizenship requirements.</p>
                </div>
                <div className="resources-button">
                  <img className="resources-icon" alt="arrow icon" src="src/img/SubtleIconButton.png" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="resources-frame-parent1">
              <img className="resources-frame-child" alt="Apply for Citizenship" src="/src/img/usct.png" />
              <div className="resources-frame-parent2">
                <div className="resources-info-title-parent">
                  <a className="resources-info-title" href="https://www.uscis.gov/citizenship/apply-for-citizenship" target="_blank" rel="noopener noreferrer">
                    Apply for Citizenship
                  </a>
                  <p className="resources-information">Steps and guidelines to apply for U.S. citizenship.</p>
                </div>
                <div className="resources-button">
                  <img className="resources-icon" alt="arrow icon" src="src/img/SubtleIconButton.png" />
                </div>
              </div>
            </div>
          </div>

          <div className="resources-column">
            {/* Card 4 */}
            <div className="resources-frame-parent1">
              <img className="resources-frame-child" alt="Naturalization Test and Study Resources" src="/src/img/usct.png" />
              <div className="resources-frame-parent2">
                <div className="resources-info-title-parent">
                  <a className="resources-info-title" href="https://www.uscis.gov/citizenship/find-study-materials-and-resources" target="_blank" rel="noopener noreferrer">
                    Naturalization Test and Study Resources
                  </a>
                  <p className="resources-information">Study materials and resources to help you prepare for the naturalization test.</p>
                </div>
                <div className="resources-button">
                  <img className="resources-icon" alt="arrow icon" src="src/img/SubtleIconButton.png" />
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="resources-frame-parent1">
              <img className="resources-frame-child" alt="Learn About the Citizenship Grant Program" src="/src/img/usct.png" />
              <div className="resources-frame-parent2">
                <div className="resources-info-title-parent">
                  <a className="resources-info-title" href="https://www.uscis.gov/citizenship/civic-integration/learn-about-the-citizenship-and-integration-grant-program" target="_blank" rel="noopener noreferrer">
                    Learn About the Citizenship Grant Program
                  </a>
                  <p className="resources-information">Information on grants available to promote citizenship and integration.</p>
                </div>
                <div className="resources-button">
                  <img className="resources-icon" alt="arrow icon" src="src/img/SubtleIconButton.png" />
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="resources-frame-parent1">
              <img className="resources-frame-child" alt="Resources for Educational Programs" src="/src/img/usct.png" />
              <div className="resources-frame-parent2">
                <div className="resources-info-title-parent">
                  <a className="resources-info-title" href="https://www.uscis.gov/citizenship/resources-for-educational-programs" target="_blank" rel="noopener noreferrer">
                    Resources for Educational Programs
                  </a>
                  <p className="resources-information">Access resources to support educational programs related to citizenship.</p>
                </div>
                <div className="resources-button">
                  <img className="resources-icon" alt="arrow icon" src="src/img/SubtleIconButton.png" />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </body>
    )
  }
