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
# Test users
users = [
    {"user_name": "Test User", "email": "test@test.com", "password": "test"}
]
#create user
created_users = []

for user in users:
    new_user = crud.create_user(user["user_name"], user["email"], user["password"])
    db.session.add(new_user)
    created_users.append(new_user)
    print(f"User created: {new_user}")

    
db.session.commit()

#create questions and answers 
created_questions = []

for question in test_data["practiceTest"]:
    question = crud.create_question(question["question"], question["answer"], question["options"])
    db.session.add(question)
    created_questions.append(question)
    print(f"{question}")

db.session.commit()

#create test results for the questions 
for created_question in created_questions:
    for data_test_question in test_data["practiceTest"]:
        if data_test_question["question"] == created_question.question:
            is_correct = created_question.answer in data_test_question["options"]
            test_result = crud.create_test_result(is_correct, created_question.question_answer_id)
            db.session.add(test_result)
            print(f"Test Result: {test_result}")
db.session.commit()

#create scores for the users
for user in created_users:
    for question in created_questions: 
       test_result = crud.create_test_result(is_correct=False, question_answer_id=question.question_answer_id)
       db.session.add(test_result)
       score = crud.create_score(user_score=randint(1, 100), user_id=user.user_id, test_result_id=test_result.question_answer_id)
       db.session.add(score)
       print(f"You scored: {score}")

db.session.commit()