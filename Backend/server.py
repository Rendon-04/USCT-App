"""Server for United States Citizenship Test Practice App"""

from flask import (Flask, render_template, request, flash, session,
                   redirect,jsonify)
from model import connect_to_db, db
import crud
import json
import random 
from flask_cors import CORS



from jinja2 import StrictUndefined

app = Flask(__name__)

app.secret_key = "092804910815"  
app.jinja_env.undefined = StrictUndefined


CORS(app)

# Parse the JSON data and return it as a Python dictionary 
def load_test_data():
    """Load test data from JSON file."""
    with open("/Users/rendon/src/USCT-App/Frontend/src/components/testQuestions.json") as f:
        return json.loads(f.read()) 
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

    if not email or not password or not user_name:
        return jsonify({"success": False, "message": "Missing required fields."}), 400

    user_exists = crud.get_user_by_email(email)
    if user_exists:
        return jsonify({"error": "User already exists"}), 409    

    new_user = crud.create_user(user_name, email, password)
    
    db.session.add(new_user)
    db.session.commit()

    session["user_id"] = new_user.id

    return jsonify(
        user_id=new_user.id,
        email=new_user.email
    )

@app.route("/login", methods=["GET"])
def show_login_form():
    """Display the login form."""
    return render_template("login.html")
    
@app.route("/login", methods=["POST"])
def login():
    """Log in a user"""
    #Get the email and password from the submitted JSON data 
    email = request.get_json().get("email")
    password = request.get_json().get("password")                                   
    #Grab the user with the given email 
    user =  crud.get_user_by_email(email)

    if user is None:
        return jsonify({"error": "No User Found"}), 401
    
    if not user.check_password(password):
        return jsonify({"error": "Unauthorized"}), 401
    
    session["user_id"] = user.id

    return jsonify(
        user_id=user.id,
        email=user.email
    )

@app.route("/logout")
def logout():
    """Log out a user"""
    #Remove user_name and id from session 
    session.pop("user_id", None)
    
    return jsonify({"message": "Successfully logged out"}), 200
    
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
    id = session.get("id")

    # Load the test data from the JSON file 
    test_data = load_test_data()
    score = 0
    total_questions = len(test_data["questions"])

    # Get the submitted answers as JSON
    submitted_answers = request.json

    for question in test_data["questions"]:
        question_id = str(question['id'])
        selected_option = submitted_answers.get(question_id)
        
        if selected_option == question["answer"]:
            score += 1
            
    # If the user is logged in 
    if id:
        # Create a new score for the user
        new_score = crud.create_score(user_score=score, id=id, test_result_id=None)
        db.session.add(new_score)
        db.session.commit()
        flash(f"You scored {score} out of {total_questions}")
        return jsonify({"score": score, "total": total_questions})
    else:
        # Return the score if the user is not logged in 
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
    """View user scores"""
    # Get the id from the session 
    id = session.get("id")
    
    if id:
        # If the user is logged in, get their scores from the database using the CRUD function 
        scores = crud.get_scores_by_user_id(id)
        # Convert scores to a format that can be returned as JSON
        scores_list = [{"user_score": score.user_score} for score in scores]
        return jsonify({"scores": scores_list})
    else:
        # If the user is not logged in, return an error message as JSON
        return jsonify({"error": "Please log in to view your score history."}), 401
    


if __name__ == "__main__":
    connect_to_db(app)
    app.run(host="0.0.0.0", debug=True, port=6060)
