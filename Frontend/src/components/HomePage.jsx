import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

export default function HomePage() {
  return (
    <div className="frameParent">
      <div className="contentParent">
        <div className="content">
          <div className="frameGroup">
            <div className="aceTheUsCivicTestParent">
              <div className="aceTheUs">Ace the U.S. Civic test</div>
              <div className="preparingCanBe">
                Preparing can be tough, but you don't have to do it alone. Our study guides, practice tests, and resources help you master U.S. history, government, and civic responsibilities. Track your progress, build your confidence, and join a community of learners!
              </div>
            </div>
            <Link to="/study_for_the_test" className="secondarybutton">
              <div className="text">Get started</div>
            </Link>
          </div>
          <div className="learnersValueProp">
            <div className="avatarParent">
              <img className="avatarIcon" alt="" src="/src/img/learner1.png" />
              <img className="avatarIcon1" alt="" src="/src/img/learner2.png" />
              <div className="avatar">
                <img
                  className="learner3"
                  alt=""
                  src="/src/img/learner3.png"
                />
              </div>
            </div>
            <i className="join100Learners">Join 100+ learners</i>
          </div>
        </div>
        <div className="photo">
          <img className="photoChild" alt="" src="/src/img/Group 4.png" />
          <img className="image5Icon" alt="" src="/src/img/image 5.png" />
        </div>
      </div>
      <div className="cards">
        <div className="cardsInner">
          <div className="frameContainer">
            <div className="bookenhancediconParent">
              <div className="bookenhancedicon">
                <img className="art32Icon" alt="" src="/src/img/BookEnhancedIcon.png" />
              </div>
              <div className="study">Study</div>
              <div className="testYourKnowledge">
                Study the 100 questions you might face during the test about U.S. history, government, and civic duties.
              </div>
            </div>
            <Link to="/study_for_the_test" className="subtlebutton">
              <div className="text1">Start learning</div>
              <img className="rIcon16px" alt="" src="/src/img/arrow-right-short.svg" />
            </Link>
          </div>
        </div>
        <div className="cardsInner">
          <div className="frameContainer">
            <div className="bookenhancediconParent">
              <div className="bookenhancedicon">
                <img className="art32Icon" alt="" src="/src/img/ListViewEnhancedIcon.png" />
              </div>
              <div className="study">Practice</div>
              <div className="testYourKnowledge">
                Test your knowledge with practice exams and quizzes to ensure you're ready for the real test.
              </div>
            </div>
            <Link to="/practice_test" className="subtlebutton">
              <div className="text1">Start practicing</div>
              <img className="rIcon16px" alt="" src="/src/img/arrow-right-short.svg" />
            </Link>
          </div>
        </div>
        <div className="cardsInner">
          <div className="frameContainer">
            <div className="bookenhancediconParent">
              <div className="bookenhancedicon">
                <img className="art32Icon" alt="" src="/src/img/BoardsViewEnhancedIcon.png" />
              </div>
              <div className="study">Resources</div>
              <div className="testYourKnowledge">
                Access valuable resources to understand eligibility, application processes, and next steps
              </div>
            </div>
            <Link to="/additional_resources" className="subtlebutton">
              <div className="text1">Resources</div>
              <img className="rIcon16px" alt="" src="/src/img/arrow-right-short.svg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}