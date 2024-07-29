import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import PracticeTest from './components/PracticeTest';
import Footer from './components/Footer';
import StudyForTheTest from './components/StudyForTheTest';
import Resources from './components/Resources';
import ViewScores from './components/ViewScores';
import Login from './components/Login'; 
import Register from './components/Register';

const App = () => {

  return (
    <Router>
      <div>
        <Navbar />
          <Routes>
            <Route exact path="/" component={HomePage} />
            <Route path="/practice_test" component={PracticeTest} />
            <Route path="/study_for_the_test" component={StudyForTheTest} />
            <Route path="/additional_resources" component={Resources} />
            <Route path="/view_scores" component={ViewScores} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/footer" component={Footer} />
          </Routes>
      </div>
    </Router>
  );
};

export default App;
