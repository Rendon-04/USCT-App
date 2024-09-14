"""Server for United States Citizenship Test Practice App"""

from flask import (Flask, render_template, request, flash, session,
                   jsonify)
from model import connect_to_db, db
import crud
import json
import random 
from flask_cors import CORS
import os



# from jinja2 import StrictUndefined

# app = Flask(__name__)
app = Flask(__name__, static_folder="frontend/dist", static_url_path="/")

app.secret_key = os.getenv("SECRET_KEY") 
DATABASE_URL = os.getenv("DATABASE_URL")
# app.jinja_env.undefined = StrictUndefined 

CORS(app)
# Parse the JSON data and return it as a Python dictionary 
def load_test_data():
    """Load test data from JSON file."""
    with open("/home/ubuntu/USCT-App/data/testQuestions.json", "r") as f:
        return json.load(f)
def load_study_data():
    """Load test data from JSON file."""
    with open("./data /study.json") as f:
        return json.loads(f.read()) 

@app.route("/")
def homepage():
    """View homepage."""
    return render_template('homepage.html')

@app.route("/register", methods=["GET"])
def show_registration_form():
    """Display the registraion form."""
    return render_template("register.html")

@app.route("/register", methods=["POST"])
def register():
    """Register a new user"""
    email = request.json.get("email")
    password = request.json.get("password")
    user_name = request.json.get("user_name")

    user = crud.get_user_by_email(email)
    if user:
        return jsonify({"success": False, "message": "Username or email already exists. Please try again."}), 400
    else:
        user = crud.create_user(email, password, user_name)
        db.session.add(user)
        db.session.commit()
        return jsonify({"success": True, "message": "Account created! Please log in."}), 201

@app.route("/login", methods=["GET"])
def show_login_form():
    """Display the login form."""
    return render_template("login.html")
    
@app.route("/login", methods=["POST"])
def login():
    """Log in a user"""
    #Get the email and password from the submitted JSON data 
    email = request.json.get("email")
    password = request.json.get("password")                                   
    #Grab the user with the given email 

    user = crud.get_user_by_email(email)

    if user and user.password == password:
        session['user_id'] = user.id  # Set session ID here
        session['user_email'] = user.email  # Set session here
        return jsonify({"message": "Login successful"}), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401
    
 
@app.route('/logout', methods=['GET'])
def logout():
    session.clear()  # This clears all session data
    return jsonify({"message": "Successfully logged out"}), 200

    
    # return jsonify({"message": "Successfully logged out"}), 200
    
@app.route("/practice_test")
def practice_test():
    """Take a practice test."""
    # Load the test data from JSON file
    test_data = load_test_data()
    # Get the list of questions
    questions_list = test_data.get("questions", [])  
    random_questions = random.sample(questions_list, 10)

    return jsonify({"questions": random_questions})


@app.route("/submit_practice_test", methods=["POST"])
def submit_practice_test():
    """Handle practice test submission."""
    # Get the user_id from the session 
    user_id = session.get("user_id")
    if not user_id:
        return jsonify({"error": "User not logged in"}), 401 

    # Load the test data from the JSON file 
    test_data = load_test_data()
    score = 0
    total_questions = len(test_data["questions"])

    # Get the submitted answers as JSON
    submitted_answers = request.json
    # Compare each submitted answer with the correct answer
    for question in test_data["questions"]:
        question_id = str(question['id'])
        selected_option = submitted_answers.get(question_id)
        if selected_option == question["answer"]:
            score += 1

      # Create a new score entry for the user
    new_score = crud.create_score(user_score=score, user_id=user_id, test_result_id=None)
    db.session.add(new_score)
    db.session.commit()

    # Return the score and total number of questions
    return jsonify({"score": score, "total": total_questions})
    
@app.route("/study_for_the_test")
def study_for_the_test():
    """Display the study page"""
    return render_template("study_for_the_test.html")

@app.route("/overview_study_page")
def overview_study_page():
    """Study for the test"""
    #Load the study data
    study_data = load_study_data()
    return render_template("overview_study_page.html", questions=study_data["study"])

@app.route("/view_scores")
def view_scores():
    user_id = session.get("user_id")
    
    if user_id:
        scores = crud.get_scores_by_user_id(user_id)
        scores_list = [{"user_score": score.user_score} for score in scores]
        return jsonify({"scores": scores_list})
    else:
        return jsonify({"error": "Please log in to view your score history."}), 401

@app.route('/check_session', methods=['GET'])
def check_session():
    if 'user_id' in session:
        return jsonify({"is_logged_in": True, "email": session['user_email']})
    else:
        return jsonify({"is_logged_in": False})
    
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def index(path):
    return app.send_static_file("index.html")

@app.errorhandler(404)
def not_found(_error):
    return app.send_static_file("index.html")

if __name__ == "__main__":
    connect_to_db(app)
    app.run(host="0.0.0.0", debug=True, port=6060)
