import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Practice from "./components/Practice";
import Study from './components/Study';
import AllQuestions from './components/AllQuestions';
import Resources from './components/Resources';
import ViewScores from './components/ViewScores';
import Login from './components/Login';
import Register from './components/Register';
import Test from './components/Test';
import ScoreDisplay from './components/ScoreDisplay';
import Cards from './components/Cards'; 
import RandomQuestions from './components/RandomQuestions';
import StudyCategoryPage from './components/StudyCategoryPage';

export default function App () {
  const [email, setEmail] = useState(''); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');


//   const setUser = (userEmail) => {
//     setIsLoggedIn(true);
//     setEmail(userEmail);
// };

// useEffect(() => {
//   // Check if the user is logged in when the component mounts
//   const checkSession = async () => {
//     try {
//       const response = await fetch("/check_session");
//       if (response.ok) {
//         const data = await response.json();
//         if (data.is_logged_in) {
//           setIsLoggedIn(true);
//           setEmail(data.email);  // Assuming your session check also returns the email
//         }
//       }
//     } catch (error) {
//       console.error('Error checking session:', error);
//     }
//   };

//   checkSession();
// }, []);
useEffect(() => {
  // Check if the user is logged in when the component mounts
  const checkSession = async () => {
    try {
      const response = await fetch("/check_session");
      if (response.ok) {
        const data = await response.json();
        if (data.is_logged_in) {
          setIsLoggedIn(true);
          setEmail(data.email);  // Assuming your session check also returns the email
        } else {
          setIsLoggedIn(false);
          setEmail('');
        }
      }
    } catch (error) {
      console.error('Error checking session:', error);
    }
  };

  if (isLoggedIn) {
    checkSession();
  }
}, [isLoggedIn]);

const setUser = (userEmail) => {
  setIsLoggedIn(true);
  setEmail(userEmail);

};

const handleLogout = async () => {
  try {
      const response = await fetch("/logout", {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      });

      if (response.ok) {
          setIsLoggedIn(false);
          setEmail('');
      } else {
          console.error('Logout failed');
      }
  } catch (error) {
      console.error('An error occurred during logout', error);
  }
};

  
  

  return (
    <Router>
      <div>
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} email={email} userName={userName} />
        <Routes>
          <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} userName={userName} />} />
          <Route path="/practice_test" element={<Practice />} /> 
          <Route path="/view_scores" element={<ViewScores isLoggedIn={isLoggedIn} />} />
          <Route path="/study_for_the_test" element={<Study />} /> 
          <Route path="/study_for_the_test/all" element={<AllQuestions />} />
          <Route path="/study_for_the_test/random" element={<RandomQuestions />} />
          <Route path="/study_for_the_test/:category" element={<StudyCategoryPage />} />
          <Route path="/additional_resources" element={<Resources />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/test" element={<Test />} />
          <Route path="/score_display" element={<ScoreDisplay />} />
          <Route path="/cards" element={<Cards />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}



