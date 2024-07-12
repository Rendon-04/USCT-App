"""Models United States Citizenship Test Practice App"""

from flask_sqlalchemy import SQLAlchemy
from flask import Flask

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
    user_score = db.Column(db.Integer)
    user_id = db.Column(db.Integer, db.ForeignKey("users.user_id"))
    test_result_id = db.Column(db.Integer, db.ForeignKey("test_results.test_result_id"))

    user = db.relationship("User", back_populates="scores")
    test_result = db.relationship("TestResult", back_populates="scores")

    def __repr__(self):
        return f"<Score user_score={self.user_score}>"

class QuestionAnswer(db.Model):
    """Questions and Answers for the test"""

    __tablename__ = "questions_answers"

    question_answer_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    question = db.Column(db.String)
    answer = db.Column(db.String)
    options = db.Column(db.ARRAY(db.String))

    test_results = db.relationship("TestResult", back_populates="question_answer")

    def __repr__(self):
        return f"<QuestionAnswer question={self.question} answer={self.answer} options={self.options}>"

class TestResult(db.Model):
    """Test results"""

    __tablename__ = "test_results"

    test_result_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    is_correct = db.Column(db.Boolean)
    question_answer_id = db.Column(db.Integer, db.ForeignKey("questions_answers.question_answer_id"))

    question_answer = db.relationship("QuestionAnswer", back_populates="test_results")
    scores = db.relationship("Score", back_populates="test_result")

    def __repr__(self):
        return f"<TestResult correct={self.is_correct}>"


def connect_to_db(flask_app, db_uri="postgresql:///citizenship_test", echo=True):
    flask_app.config["SQLALCHEMY_DATABASE_URI"] = db_uri
    flask_app.config["SQLALCHEMY_ECHO"] = echo = False
    flask_app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = flask_app
    db.init_app(flask_app)

    with flask_app.app_context():
        db.create_all()
        print("Connected to the db!")

# if __name__ == "__main__":
#     from server import app
#     connect_to_db(app)
#     app.run(debug=True)

if __name__ == "__main__":
    app = Flask(__name__)
    connect_to_db(app)