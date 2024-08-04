import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import PracticeTest from './components/PracticeTest';
import Footer from './components/Footer';
import Study from './components/StudyForTheTest'; // Import the function from the correct file
import Resources from './components/Resources';
import ViewScores from './components/ViewScores';
import Login from './components/Login';
import Register from './components/Register';
import Test from './components/Test';
import ScoreDisplay from './components/ScoreDisplay';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  // Handle the login, set the login state and user info
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
          <Route path="/practice_test" element={<PracticeTest />} />
          <Route path="/study_for_the_test" element={<Study />} /> 
          <Route path="/additional_resources" element={<Resources />} />
          <Route path="/view_scores" element={<ViewScores />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/category/:categoryName" element={<Study />} /> {/* Dynamic routing for categories using Study */}
          <Route path="/test" element={<Test />} />
          <Route path="/score_display" element={<ScoreDisplay />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
