import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MenuComp extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Movie Search</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/bank">Bank Data</Link></li>
                    <li><Link to="/table">Table And Form</Link></li>
                </ul>
            </div>
        )
    }
}

export default MenuComp;