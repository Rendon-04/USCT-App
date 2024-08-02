import React from 'react';
import './study.css';

// Study for the test component 

// Study for the test component 
const StudyForTheTest = () => {
    return (
        <div className="container py-5">
            <h1 className="text-center text-primary mb-4">Study</h1>
            <div className="text-center mb-5">
                <p>Get ready for the U.S. citizenship test. On the day of your interview, you'll answer 10 questions from a list of 100. Use our tools to study all 100 questions, 10 random questions, or focus on key themes.</p>
            </div>

            <div className="mb-5">
                <h2 className="h5">Get started with random questions</h2>
                <div className="row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body">
                                <a href="#" className="card-title h5 text-decoration-none text-primary">Study 100 questions</a>
                                <p className="card-text">Get started by studying all 100 questions in all categories.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body">
                                <a href="#" className="card-title h5 text-decoration-none text-primary">Study 10 random questions</a>
                                <p className="card-text">Try studying questions like you would in the real interview.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <h2 className="h5">Get started by theme</h2>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="card border-0 shadow-sm h-100 theme-card" >
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src="/src/img/Flag.png" className="img-fluid rounded-start" alt="american flag" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <a href="#" className="card-title h6 text-decoration-none text-primary">American democracy</a>
                                        <p className="card-text">Learn about the principles and structure of American democracy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card border-0 shadow-sm h-100 theme-card">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src="/src/img/Senate.png" className="img-fluid rounded-start" alt="senate hearing" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <a href="#" className="card-title h6 text-decoration-none text-primary">American government</a>
                                        <p className="card-text">Understand the branches and functions of the U.S. government.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card border-0 shadow-sm h-100 theme-card">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src="/src/img/Constitution.png" className="img-fluid rounded-start" alt="constitution" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <a href="#" className="card-title h6 text-decoration-none text-primary">Rights</a>
                                        <p className="card-text">Know your rights and responsibilities as a U.S. citizen.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 mb-3">
                    <div className="card border-0 shadow-sm h-100 theme-card">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="/src/img/Washington.png" className="img-fluid rounded-start" alt="george washington" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <a href="#" className="card-title h6 text-decoration-none text-primary">The Colonial Period</a>
                                    <p className="card-text">Discover the history and significance of the Colonial period in America.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card border-0 shadow-sm h-100 theme-card">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="/src/img/Industrial.png" className="img-fluid rounded-start" alt="industrial revolution" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <a href="#" className="card-title h6 text-decoration-none text-primary">1800's</a>
                                    <p className="card-text">Explore key events and developments in 19th century America.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card border-0 shadow-sm h-100 theme-card">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="/src/img/WWII.png" className="img-fluid rounded-start" alt="return from war" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <a href="#" className="card-title h6 text-decoration-none text-primary">Recent American History</a>
                                    <p className="card-text">Study important events and changes in modern American history.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card border-0 shadow-sm h-100 theme-card">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="/src/img/Map.png" className="img-fluid rounded-start" alt="map of the US" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <a href="#" className="card-title h6 text-decoration-none text-primary">Geography</a>
                                    <p className="card-text">Familiarize yourself with the geography of the United States.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card border-0 shadow-sm h-100 theme-card">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="/src/img/Statue.png" className="img-fluid rounded-start" alt="statue of liberty" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <a href="#" className="card-title h6 text-decoration-none text-primary">Symbols</a>
                                    <p className="card-text">Learn about the symbols and icons that represent the United States.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card border-0 shadow-sm h-100 theme-card">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="/src/img/MLK.png" className="img-fluid rounded-start" alt="martin luther king" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <a href="#" className="card-title h6 text-decoration-none text-primary">Holidays</a>
                                    <p className="card-text">Get to know the holidays and traditions celebrated in the U.S.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default StudyForTheTest;
