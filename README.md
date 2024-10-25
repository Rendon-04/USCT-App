---

# **US Citizenship Test Preparation Web App**

This web application helps users prepare for the U.S. Civics test by providing study materials, practice tests, and external resources. It is a full-stack web app developed using Flask for the backend and React for the frontend, with PostgreSQL as the database. The app supports user registration, login, and tracking of test scores.
Check it out [here!](http://54.213.207.219/)

## **Features**

- **User Registration & Authentication:** Users can create an account, log in, and have their session managed with Flask and secure cookies.
- **Study Section:** Users can review civics test questions categorized by topic. The study section allows users to study specific categories or all questions.
- **Practice Test:** Users can take a 10-question practice test with random multiple-choice questions, and their scores are calculated and stored.
- **Flashcards:** Users can review questions interactively with flashcards, flipping through and studying questions and answers.
- **Score History:** Logged-in users can view their practice test scores on the dashboard.
- **Resources:** Links to external materials for U.S. Civics test preparation.

## **Technologies Used**

### Backend:
- **Flask (Python):** For handling HTTP requests, managing user sessions, and backend logic.
- **SQLAlchemy:** For interacting with the PostgreSQL database.
- **PostgreSQL:** Database for storing user information, scores, questions, and test results.

### Frontend:
- **React:** For building the user interface with functional components.
- **React Router:** For handling navigation between different parts of the app.
- **JavaScript (ES6+):** For client-side logic.
- **HTML/CSS:** For structuring and styling the web pages.

### Database Models:
- **User:** Stores user data (username, email, password).
- **Score:** Tracks user scores for each practice test.
- **QuestionAnswer:** Stores test questions, their correct answers, and possible options.
- **TestResult:** Tracks whether a user’s answer to a question was correct.



## **Project Structure**

```
.
├── backend
│   ├── crud.py                # CRUD operations
│   ├── models.py              # SQLAlchemy models
│   ├── seed.py                # Script for seeding the database
│   ├── server.py              # Flask server and routes
│   └── ...
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── HomePage.jsx   # Home page component
│   │   │   ├── Study.jsx      # Study section component
│   │   │   ├── Practice.jsx   # Practice test component
│   │   │   ├── Test.jsx       # Test-taking component
│   │   │   ├── ViewScores.jsx # Score history component
│   │   │   ├── Resources.jsx  # Resources component
│   │   │   └── ...
│   ├── App.js                 # Main app entry point
│   └── ...
└── README.md
```

## **Key Components**

- **App.jsx:** The main React component that manages routing and state across the app.
- **Login.jsx / Register.jsx:** Handles user authentication and session management.
- **Study.jsx:** Displays categorized study questions for users to review.
- **Test.jsx:** Manages practice test sessions, handles user input, and submits answers to the backend.
- **ScoreDisplay.jsx:** Shows user scores after completing a test and allows review of correct/incorrect answers.

## **Future Iterations**

- **Version 1:** Future versions could include:
  - Timer-based practice tests.
  - More detailed test analytics for users.
  - Support for multiple languages.
  - Mobile-responsive design.
