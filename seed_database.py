"""Script to seed database"""

import os
import json
from random import randint
from datetime import datetime

import crud
from model import connect_to_db, db
from server import app

os.system("dropdb citizenship_test")
os.system("createdb citizenship_test")

connect_to_db(app)
app.app_context().push()
db.create_all()


# Load test data from JSON file
with open("data /practiceTest.json") as f:
    test_data = json.loads(f.read())

#test users
users = [
    {"email": "test@test.com", "password":"test"}
]
#create user
created_users = []

for user in users:
    user = crud.create_user(user["email"], user["password"])
    db.session.add(user)
    created_users.append(user)
    print(f"User created: {user}")

    
db.session.commit()

#create questions and answers 
created_questions = []

for question in test_data["practiceTest"]:
    question = crud.create_question_answer(question["question"], question["answer"])
    db.session.add(question)
    created_questions.append(question)
    print(f"{question}")

db.session.commit()

#create test results for the questions 
for question in created_questions:
    is_correct = question.answer in [option for question in test_data["practiceTest"] if question["question"] == question.question for option in question["options"]]
    test_result = crud.create_test_result(is_correct, question.question_answer_id)
    db.session.add(test_result)
    print(f"Score: {test_result}")
    
db.session.commit()

#create scores for the users
for user in created_users:
    for question in created_questions: 
        score = crud.create_score(user_score=randint(1, 100), user_id=user.user_id, test_result_id=test_result.test_result_id)
        db.session.add(score)
        print(f"You scored: {score}")

db.session.commit()