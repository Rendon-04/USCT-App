"""CRUD Operations"""

from model import db, User, Score, QuestionAnswer, TestResult, connect_to_db

def create_user(user_name,email, password):
    """Create and Return a new user"""

    user = User(user_name=user_name,
                email=email, 
                password=password)

    return user 

def create_score(user_score,user_id, test_result_id):
    """Create and return a new score"""

    score = Score(
        user_score=user_score,
        user_id=user_id,
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
    return QuestionAnswer.query.all()



if __name__ == "__main__":
    from server import app

    connect_to_db(app)
