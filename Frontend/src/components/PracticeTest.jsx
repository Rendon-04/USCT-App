import React from 'react';
import './testPage.css'; // Import your CSS file
// Practice Test component 
import { Link } from 'react-router-dom';

const PracticeTest = () => {
    return (
        <div>
            <div class="title">
            <h1>Test</h1>
            </div>
            <div class="description">
            <p>Get ready for the U.S. citizenship test. On the day of your interview, you'll answer 10 questions from a list of 100. Use our tools to study all 100 questions, 10 random questions, or focus on key themes.</p>
            </div>
            <div class="container">
                <div class="row mb-3">
                    <div class="col-12">
                    <h5>Choose difficulty level</h5>
                    </div>
                    <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                        <div class="form-check custom-radio">
                            <input class="form-check-input" type="radio" name="difficulty" id="easy"/>
                            <label class="form-check-label" for="easy">
                            Easy
                            <div class="text-muted">Multiple choice</div>
                            </label>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                        <div class="form-check custom-radio">
                            <input class="form-check-input" type="radio" name="difficulty" id="medium"/>
                            <label class="form-check-label" for="medium">
                            Medium
                            <div class="text-muted">Suggested words</div>
                            </label>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                        <div class="form-check custom-radio">
                            <input class="form-check-input" type="radio" name="difficulty" id="hard"/>
                            <label class="form-check-label" for="hard">
                            Hard
                            <div class="text-muted">Written answer</div>
                            </label>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                    <h5>Choose test type</h5>
                    </div>
                    <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                        <div class="form-check custom-radio">
                            <input class="form-check-input" type="radio" name="testType" id="100questions"/>
                            <label class="form-check-label" for="100questions">
                            100 questions
                            </label>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                        <div class="form-check custom-radio">
                            <input class="form-check-input" type="radio" name="testType" id="random"/>
                            <label class="form-check-label" for="random">
                            10 random questions
                            </label>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                        <div class="form-check custom-radio">
                            <input class="form-check-input" type="radio" name="testType" id="theme"/>
                            <label class="form-check-label" for="theme">
                            By theme
                            </label>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div>
                    <br />
                    <Link to="/test">
                    <button type="button" className="btn btn-primary">Start Test</button>
                    </Link>
                </div>
        </div>
        
    );
};

export default PracticeTest;