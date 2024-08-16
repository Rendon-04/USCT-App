"""CRUD Operations"""

from model import db, User, Score, QuestionAnswer, TestResult, connect_to_db

def create_user(user_name, email, password):
    """Create and return a new user with a hashed password"""
    user = User(user_name=user_name, email=email)
    user.set_password(password)  # This hashes the password and stores it
    return user

def get_user_by_email(email):
    """Get user by email"""
    #Query the User table to find the first user with specified email 
    return User.query.filter_by(email=email).first() 

def create_score(user_score, id, test_result_id):
    """Create and return a new score"""

    score = Score(
        user_score=user_score,
        id=id,
        test_result_id=test_result_id
    )

    return score 

def create_question(question, answer, options):
    """Create and return a question and answer"""

    question_answer = QuestionAnswer(
        question=question,
        answer=answer,
        options=options
    )

    return question_answer

def create_test_result(is_correct, question_answer_id):
    """Create and return a test result"""

    result = TestResult(
        is_correct=is_correct,
        question_answer_id=question_answer_id
    )

    return result 

def get_all_questions():
    """Get test questions"""
    #Query the QuestionAnswer table to get all the questions 
    return QuestionAnswer.query.all()

def get_scores_by_user_id(id):
    """Get scores by user ID"""
    #Query the Score table to find all scores for the specified user ID 
    return Score.query.filter_by(id=id).all() 



if __name__ == "__main__":
    from server import app

    connect_to_db(app)
