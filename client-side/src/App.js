import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import UserComp from './components/Users/UserComp';
import JobComp from './components/Jobs/JobComp';
import CarComp from './components/Cars/CarComp';
import MenuComp from './components/MenuComp/menu';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <div>
                                <div>
                                    <MenuComp />
                                </div>
                                <Route exact path="/" component={UserComp} />
                                <Route path="/jobs" component={JobComp} />
                                <Route path="/cars"  component={CarComp} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
