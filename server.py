"""Server for United States Citizenship Test Practice App"""

from flask import (Flask, render_template, request, flash, session,
                   redirect)
from model import connect_to_db
import crud
import json

from jinja2 import StrictUndefined

app = Flask(__name__)
app.secret_key = "dev"  # CHANGE!!
app.jinja_env.undefined = StrictUndefined

def load_test_data():
    """Load test data from JSON file."""
    with open("data /practiceTest.json") as f:
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
    email = request.form.get("email")
    password = request.form.get("password")

    user =  crud.get_user_by_email(email)
    if user: 
        flash("Account with that email already exists. Please login.")
    else: 
        user = crud.create_user(request.form.get("user_name"), email, password)
        flash("Account created! Please login.")
    return redirect("/login")

@app.route("/login", methods=["GET"])
def show_login_form():
    """Display the login form."""
    return render_template("login.html")
    
@app.route("/login", methods=["POST"])
def login():
    """Log in a user"""
    email = request.form.get("email")
    password =request.form.get("password")
    user =  crud.get_user_by_email(email)

    if user and user.password == password: 
        session["user_id"] = user.user_id
        flash("Logged in!")
        return redirect("/")
    else: 
        flash("Invalid email or password.")

    return redirect("/login")

@app.route("/logout")
def logout():
    """Log out a user"""
    session.pop("user_id", None)
    flash("Successfully logged out.")
    return redirect("/")
    
@app.route("/practice_test")
def practice_test():
    """Take a practice test"""
    test_data = load_test_data()
    questions = test_data["practiceTest"]
    return render_template('practice_test.html', questions=questions)

@app.route("/submit_practice_test", methods=["POST"])
def submit_practice_test():
    """Handle practice test submission."""
    user_id = session.get("user_id")
    test_data = load_test_data()
    score = 0
    for question in test_data["practiceTest"]:
        selected_option = request.form.get(f"question_{question['id']}")
        if selected_option == question["answer"]:
            score += 1


    if user_id:
        crud.create_score(user_score=score, user_id=user_id, test_result_id=None)  
        flash(f"You scored {score} out of {len(test_data['practiceTest'])}")
        return redirect("/view_scores")
    else:
        flash(f"You scored {score} out of {len(test_data['practiceTest'])}. Register or log in to save your scores.")
        return redirect("/practice_test")

@app.route("/study")
def study():
    """Study for the test"""
    questions = crud.get_all_questions()
    return render_template("study.html", questions=questions)

@app.route("/view_scores")
def view_scores():
    """View user scores"""
    user_id = session.get("user_id")
    if user_id:
        scores = crud.get_scores_by_user_id(user_id)
        return render_template("view_scores.html", scores=scores)
    else: 
        flash("PLease lon in to view your score history.")
        return redirect("/login")
    


if __name__ == "__main__":
    connect_to_db(app)
    app.run(host="0.0.0.0", debug=True, port=6060)
