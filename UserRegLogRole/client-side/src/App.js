import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App container">
                <Route exact path="/" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/home" component={Home} />
                <Route path="/admin" component={Admin} />
            </div>
        </Router>
    );
}

export default App;
