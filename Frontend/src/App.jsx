import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Practice from "./components/Practice";
import Study from './components/Study';
import StudyCategories from './components/StudyCategories';
import AllQuestions from './components/AllQuestions';
import Resources from './components/Resources';
import ViewScores from './components/ViewScores';
import Login from './components/Login';
import Register from './components/Register';
import Test from './components/Test';
import ScoreDisplay from './components/ScoreDisplay';
import Cards from './components/Cards'; 
import RandomQuestions from './components/RandomQuestions';

export default function App () {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} userName={userName} />} />
          <Route path="/practice_test" element={<Practice />} /> 
          <Route path="/view_scores" element={<ViewScores />} />
          <Route path="/study_for_the_test" element={<Study />} /> 
          <Route path="/study_for_the_test/all" element={<AllQuestions />} />
          <Route path="/study_for_the_test/random" element={<RandomQuestions />} />
          <Route path="/study/:category" element={<StudyCategories />} />
          <Route path="/additional_resources" element={<Resources />} />
          <Route path="/view_scores" element={<ViewScores />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/test" element={<Test />} />
          <Route path="/score_display" element={<ScoreDisplay />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


// return (
//     <div>
//       <Navbar />
//         <HomePage isLoggedIn={isLoggedIn} userName={userName} />
//         <PracticeTest />
//         <Study />
//         <Resources />
//         <ViewScores />
//         <Login onLogin={handleLogin} />
//         <Register />
//         <Footer />
//         <Study />
//         <Test />
//         <ScoreDisplay />
//       <Footer />
//     </div>
// );
// };