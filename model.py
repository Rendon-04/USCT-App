"""Models United States Citizenship Test Practice App"""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    """A user"""

    __tablename__ = "users"

    user_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    user_name = db.Column(db.String, unique=True)
    email = db.Column(db.String, unique=True)
    password = db.Column(db.String)

    scores = db.relationship("Score", back_populates="user")

    def __repr__(self):
        return f"<User user_name={self.user_name}>"

class Score(db.Model):
    """A users score"""
    
    __tablename__ = "scores"

    score_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    # user_score = db.Column(db.Integer)
    correct_answers = db.Column(db.Boolean)
    user_id = db.Column(db.Integer, db.ForeignKey("users.user_id"))
    

    user = db.relationship("User", back_populates="scores")
    test_result = db.relationship("Test_result", back_populates="scores")

    def __repr__(self):
        return f"<Score user_score={self.user_score}>"

class QuestionOverview(db.Model):
    """Questions and Answers for the test"""

    __tablename__ = "questions_answers"

    question_overview_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    question_id = db.Column(db.String)
    answer_id = db.Column(db.String)

    test_results = db.relationship("Test_result", back_populates="question_overview")

    def __repr__(self):
        return f"<QuestionOverview question={self.question} answer={self.answer}>"

class TestResult(db.Model):
    """Test results"""

    __tablename__ = "test_results"

    test_result_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    is_correct = db.Column(db.Boolean)
    question_id = db.Column(db.Integer, db.ForeignKey("questions_answers.question_overview_id"))
    answer_id = db.Column(db.Integer, db.ForeignKey("questions_answers.question_overview_id"))

    question_overview = db.relationship("QuestionOverview", foreign_keys=[question_id], back_populates="test_results")
    answer_overview = db.relationship("QuestionOverview", foreign_keys=[answer_id], back_populates="test_results")

    scores = db.relationship("Score", back_populates="test_result")

    def __repr__(self):
        return f"<TestResult correct={self.is_correct}>"




if __name__ == "__main__":
    from server import app

    # Call connect_to_db(app, echo=False) if your program output gets
    # too annoying; this will tell SQLAlchemy not to print out every
    # query it executes.

    connect_to_db(app)

    # Call this here so we don't have to worry about calling it every time
    # we run model.py interactively.
    app.app_context().push()
