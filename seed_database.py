"""Script to seed database"""

import os
import json
from random import randint
from datetime import datetime

import crud
from model import connect_to_db, db
from server import app

#Drop the existing database (if it exists) and create a new one 
os.system("dropdb citizenship_test")
os.system("createdb citizenship_test")

#Connect to the db and set up the appplication context
connect_to_db(app)
app.app_context().push()
db.create_all() #Create all the data tables from the model 


# Load test data from JSON file
with open("data /practiceTest.json") as f:
    test_data = json.loads(f.read())


# Test users
users = [
    {"user_name": "Test User", "email": "test@test.com", "password": "test"}
]

#Create user
created_users = []

for user in users:
    new_user = crud.create_user(user["user_name"], user["email"], user["password"]) #Create a new user object using the CRUD function
    db.session.add(new_user)
    created_users.append(new_user)
    print(f"User created: {new_user}")
    
db.session.commit()

#Create questions 
created_questions = []

for question in test_data["practiceTest"]:
    new_question = crud.create_question(question["question"], question["answer"], question["options"]) #Create a new question object
    db.session.add(new_question)
    created_questions.append(new_question)
    print(f"{new_question}")

db.session.commit()

#Create test results
#Iterate through the list of created question objects 
for created_question in created_questions:
    #Iterate through the list of questions in the test data 
    for data_test_question in test_data["practiceTest"]:
        #Check if the current question in the test data matches the created question 
        if data_test_question["question"] == created_question.question:
            #Check if the created question's answer is correct
            is_correct = created_question.answer in data_test_question["options"]
            #Create new test result object 
            test_result = crud.create_test_result(is_correct, created_question.question_answer_id)
            db.session.add(test_result)
            print(f"Test Result: {test_result}")
db.session.commit()

#create scores for the users
for user in created_users:
    #Iterate through the list of created question objects  
    for question in created_questions:
        #Create a test result for the question with a default incorrect answer
        test_result = crud.create_test_result(is_correct=False, question_answer_id=question.question_answer_id)
        db.session.add(test_result)
        score = crud.create_score(user_score=score, user_id=user.user_id, test_result_id=test_result.question_answer_id)
        db.session.add(score)
        print(f"You scored: {score}")

db.session.commit()