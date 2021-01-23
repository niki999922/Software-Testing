import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import RegisterPage from "./register/RegisterPage";
import TrendsPage from "./trends/TrendsPage";
import LoginPage from "./login/LoginPage";
import "./App.css"

function App() {
    return (
        <Router>
            <div className="background">
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/trends' component={TrendsPage}/>
                    <Route exact path='/register' component={RegisterPage}/>
                    <Route exact path='/login' component={LoginPage}/>
                    <Route exact path='/about' component={AboutPage}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
