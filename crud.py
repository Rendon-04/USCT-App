"""CRUD Operations"""

from model import db, User, Score, QuestionAnswer, TestResult, connect_to_db

def create_user(email, password):
    """Create and Return a new user"""

    user = User(email=email, password=password)

    return user 

def create_score(user_score,user_id, test_result_id):
    """Create and return a new score"""

    score = Score(
        user_score=user_score,
        user_id=user_id,
        test_result_id=test_result_id
    )

    return score 

def create_question_answer(question, answer):
    """Create and return a question and answer"""

    question_answer = QuestionAnswer(
        question=question,
        answer=answer
    )

    return question_answer

def create_test_result(is_correct, question_answer_id):
    """Create and return a test result"""

    result = TestResult(
        is_correct=is_correct,
        question_answer_id=question_answer_id
    )

    return result 



if __name__ == "__main__":
    from server import app

    connect_to_db(app)
