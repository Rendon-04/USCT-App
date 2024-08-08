"""Server for United States Citizenship Test Practice App"""

from flask import (Flask, render_template, request, flash, session,
                   redirect,jsonify)
from model import connect_to_db, db
import crud
import json
import random 

from jinja2 import StrictUndefined

app = Flask(__name__)

app.secret_key = "dev"  # CHANGE!!
app.jinja_env.undefined = StrictUndefined

# Parse the JSON data and return it as a Python dictionary 
def load_test_data():
    """Load test data from JSON file."""
    with open("./data/practiceTest.json") as f:
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

# @app.route("/register", methods=["POST"])
# def register():
#     """Register a new user"""
#     #Get the email and password from the submitted form 
#     email = request.json.get("email")
#     password = request.form.get("password")
#     user_name = request.json.get("userName")

#     if not email or not password or not user_name:
#         return jsonify({"success": False, "message": "Missing required fields."}), 400

#     #Check if a user with the given email already exist 
#     user =  crud.get_user_by_email(email)
#     if user: 
#         # flash("Account with that email already exists. Please login.")
#         return jsonify({"success": False, "message": "Account with that email already exists. Please login." }), 400
#     else: 
#         #If a user does not exist, create a new user
#         user = crud.create_user(request.form.get(user_name, email, password))
#         db.session.add(user) #add a user to the session 
#         db.session.commit()
#         # flash("Account created! Please login.")
#         return jsonify({"success": True, "message": "Account created! Please login."}), 201
#     # return redirect("/login")
@app.route("/register", methods=["POST"])
def register():
    """Register a new user"""
    email = request.json.get("email")
    password = request.json.get("password")
    user_name = request.json.get("userName")

    # Check for missing fields
    if not email or not password or not user_name:
        return jsonify({"success": False, "message": "Missing required fields."}), 400

    # Check if a user with the given email already exists
    user = crud.get_user_by_email(email)
    if user:
        return jsonify({"success": False, "message": "Account with that email already exists. Please login."}), 400

    # If a user does not exist, create a new user
    user = crud.create_user(user_name, email, password)
    db.session.add(user)
    db.session.commit()
    return jsonify({"success": True, "message": "Account created! Please login."}), 201

@app.route("/login", methods=["GET"])
def show_login_form():
    """Display the login form."""
    return render_template("login.html")
    
@app.route("/login", methods=["POST"])
def login():
    """Log in a user"""
    #Get the email and password from the submitted JSON data 
    email = request.json.get("email")
    password =request.json.get("password")
    #Grab the user with the given email 
    user =  crud.get_user_by_email(email)

    if user and user.password == password:
        session["user_id"] = user.userid
        session["user_name"] = user.user_name
        return jsonify({"success": True, "message": "Login successful"})
    else:
        return jsonify({"success": False, "message": "Invalid email or password"})

    # #If the user exists and the password mathches, set the user_id in the session 
    # if not user or user.password != password:
    #     flash("The email or password you entered was incorrect")
    #     return redirect("/login")
    # else: 
    #     #Log in the user by storing the user's user_id, user_name and email in sesson
    #     session["user_id"] = user.user_id 
    #     session["user_name"] = user.user_name
    #     session["user_email"] = user.email
    #     # flash(f"Welcome back, {user.user_name}!")

    # return redirect("/") 

@app.route("/logout")
def logout():
    """Log out a user"""
    #Remove user_name and user_id from session 
    session.pop("user_id", None)
    session.pop("user_name", None)
    session.pop("user_email", None)
    flash("Successfully logged out.")
    return redirect("/")
    
@app.route("/practice_test")
def practice_test():
    """Take a practice test."""
    # Load the test data from JSON file
    test_data = load_test_data()
    # Grab the questions from the test data
    all_questions = test_data["practiceTest"]
    # Select 10 random questions
    random_questions = random.sample(all_questions, 10)
    # Return the questions as JSON
    return jsonify({"questions": random_questions})

@app.route("/submit_practice_test", methods=["POST"])
def submit_practice_test():
    """Handle practice test submission."""
    #Get the user_id from the session 
    user_id = session.get("user_id")
    #Load the test data from the JSON file 
    test_data = load_test_data()
    score = 0
    #Get the total number of the questions 
    total_questions = len(test_data["practiceTest"])
    
    for question in test_data["practiceTest"]:
        #Get the selected option for the current question from the form 
        selected_option = request.form.get(f"question_{question['id']}")
        #Check if the selected option matches the correct answer
        if selected_option == question["answer"]:
            #increment the score if the answer is correct 
            score += 1
            
    #If the user is logged in 
    if user_id:
        #Create a new score for the user
        new_score = crud.create_score(user_score=score, user_id=user_id, test_result_id=None)
        db.session.add(new_score)#Add new score to the session
        db.session.commit()
        flash(f"You scored {score} out of {total_questions}")
        return redirect("/view_scores")
    else:
        #View one score if the user is not logged in 
        return render_template("practice_test_score.html", score=score, total=total_questions)

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
    #Get the user_id from the session 
    user_id = session.get("user_id")
    if user_id:
        #If the user is logged in, get their scores from the databse using the CRUD function 
        scores = crud.get_scores_by_user_id(user_id)
        return render_template("view_scores.html", scores=scores)
    else: 
        flash("Please log in to view your score history.")
        return redirect("/login")
    


if __name__ == "__main__":
    connect_to_db(app)
    app.run(host="0.0.0.0", debug=True, port=6060)
