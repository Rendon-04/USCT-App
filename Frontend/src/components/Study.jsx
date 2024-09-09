import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './study.css';

export default function Study() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the questions data
    fetch('/data/questionsNaturalizationTest.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, []);

return (
  <div className="study-frame-parent">
    <div className="study-frame-wrapper">
      <div className="study-study-parent">
        <div className="study-study">Study</div>
        <div className="study-get-ready-for">
          Get ready for the U.S. citizenship test. On the day of your interview, you'll answer 10 questions from a list of 100. Use our tools to study all 100 questions, 10 random questions, or focus on key themes.
        </div>
      </div>
    </div>
    <div className="study-frame-group">
      <div className="study-get-started-with-random-questi-parent">
        <div className="study-get-started-with">Get started with random questions</div>
        <div className="study-cards-s">
          <div className="study-background-parent">
            <div className="study-background">
              <div className="study-image-14"></div>
            </div>
            {/* Study 100 Qs */}
            <div className="study-frame-container-s">
              <div className="study-study-100-questions-parent">
                <Link to="/study_for_the_test/all">
                <div className="study-study-100-questions">Study 100 questions</div>
                <div className="study-get-started-by">Get started by studying all 100 questions in all categories.</div>
                </Link>
              </div>
              <div className="study-subtleiconbutton">
                <img className="study-icon-16px" alt="" src="/img/SubtleIconButton.png" />
              </div>
            </div>
          </div>
          <div className="study-background-parent">
            <div className="study-background">
              <div className="study-image-14"></div>
            </div>
            {/* Study 10 Random Qs */}
            <div className="study-frame-container-s">
              <div className="study-study-100-questions-parent">
                <Link to="/study_for_the_test/random" >
                <div className="study-study-100-questions">Study 10 random questions</div>
                <div className="study-get-started-by">Try studying random questions like you would in the real interview.</div>
                </Link>
              </div>
              <div className="study-subtleiconbutton">
                <img className="study-icon-16px" alt="" src="/img/SubtleIconButton.png"/>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      {/* Categories */}
      <div className="study-get-started-by-theme-parent">
        <div className="study-get-started-by1">Get started by theme</div>
        <div className="study-cards1">
          <div className="study-background-parent">
            <img className="study-background-icon" alt="" src="/img/AmericanDemocracy.png" />
            <div className="study-frame-parent1">
              <div className="study-study-100-questions-parent">
                <Link to="/study_for_the_test/Principles of American Democracy">
                <div className="study-study-100-questions">American democracy</div>
                <div className="study-get-started-by">Learn about the principles and structure of American democracy.</div>
                </Link>
              </div>
              <div className="study-subtleiconbutton">
                <img className="study-icon-16px" alt="" src="/img/SubtleIconButton.png" />
              </div>
            </div>
          </div>
          <div className="study-background-parent">
            <img className="study-background-icon" alt="" src="/img/AmericanGovernment.png" />
            <div className="study-frame-wrapper1">
              <div className="study-frame-parent2">
                <div className="study-study-100-questions-parent">
                <Link to="/study_for_the_test/System of Government">
                  <div className="study-american-government">American government</div>
                  <div className="study-get-started-by">Understand the branches and functions of the U.S. government.</div>
                </Link>
                </div>
                <div className="study-subtleiconbutton">
                  <img className="study-icon-16px" alt="" src="/img/SubtleIconButton.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="study-background-parent">
            <img className="study-background-icon" alt="" src="/img/Rights.png" />
            <div className="study-frame-wrapper2">
              <div className="study-frame-parent3">
                <div className="study-rights-parent">
                <Link to="/study_for_the_test/Rights and Responsibilities">
                  <div className="study-american-government">Rights</div>
                  <div className="study-get-started-by">Know your rights and responsibilities as a U.S. citizen.</div>
                </Link>
                </div>
                <div className="study-subtleiconbutton">
                  <img className="study-icon-16px" alt="" src="/img/SubtleIconButton.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="study-cards1">
          <div className="study-background-parent">
            <img className="study-background-icon" alt="" src="/img/ColonialPeriod.png" />
            <div className="study-frame-parent1">
              <div className="study-study-100-questions-parent">
              <Link to="/study_for_the_test/Colonial Period and Independence">
                <div className="study-study-100-questions">The Colonial period</div>
                <div className="study-get-started-by">Discover the history and significance of the Colonial period in America.</div>
             </Link>
             </div>
              <div className="study-subtleiconbutton">
                <img className="study-icon-16px" alt="" src="/img/SubtleIconButton.png" />
              </div>
            </div>
          </div>
          <div className="study-background-parent">
            <img className="study-background-icon" alt="" src="/img/1800s.png" />
            <div className="study-frame-parent1">
              <div className="study-study-100-questions-parent">
              <Link to="/study_for_the_test/1800s">
                <div className="study-study-100-questions">The 1800s</div>
                <div className="study-get-started-by">Explore key events and developments in 19th century America.</div>
              </Link>
              </div>
              <div className="study-subtleiconbutton">
                <img className="study-icon-16px" alt="" src="/img/SubtleIconButton.png" />
              </div>
            </div>
          </div>
          <div className="study-background-parent">
            <img className="study-background-icon" alt="" src="/img/RecentAmericanHistory.png" />
            <div className="study-frame-parent1">
              <div className="study-study-100-questions-parent">
              <Link to="/study_for_the_test/Recent American History">
                <div className="study-study-100-questions">Recent American history</div>
                <div className="study-get-started-by">Study important events and changes in modern American history.</div>
              </Link>
              </div>
              <div className="study-subtleiconbutton">
                <img className="study-icon-16px" alt="" src="/img/SubtleIconButton.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="study-cards1">
          <div className="study-background-parent">
            <img className="study-background-icon" alt="" src="/img/Geography.png" />
            <div className="study-frame-parent1">
              <div className="study-study-100-questions-parent">
              <Link to="/study_for_the_test/Geography">
                <div className="study-study-100-questions">Geography</div>
                <div className="study-get-started-by">Familiarize yourself with the geography of the United States.</div>
              </Link>
              </div>
              <div className="study-subtleiconbutton">
                <img className="study-icon-16px" alt="" src="/img/SubtleIconButton.png" />
              </div>
            </div>
          </div>
          <div className="study-background-parent">
            <img className="study-background-icon" alt="" src="/img/symbols.png" />
            <div className="study-frame-parent1">
              <div className="study-study-100-questions-parent">
              <Link to="/study_for_the_test/Symbols">
                <div className="study-study-100-questions">Symbols</div>
                <div className="study-get-started-by">Learn about the symbols and icons that represent the United States.</div>
              </Link>
              </div>
              <div className="study-subtleiconbutton">
                <img className="study-icon-16px" alt="" src="/img/SubtleIconButton.png" />
              </div>
            </div>
          </div>
          <div className="study-background-parent">
            <img className="study-background-icon" alt="" src="/img/Holidays.png"/>
            <div className="study-frame-parent1">
              <div className="study-study-100-questions-parent">
              <Link to="/study_for_the_test/Holidays">
                <div className="study-study-100-questions">Holidays</div>
                <div className="study-get-started-by">Get to know the holidays and traditions celebrated in the U.S.</div>
              </Link>
              </div>
              <div className="study-subtleiconbutton">
                <img className="study-icon-16px" alt="" src="/img/SubtleIconButton.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}