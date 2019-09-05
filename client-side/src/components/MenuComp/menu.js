import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MenuComp extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Users</Link></li>
                    <li><Link to="/jobs">Jobs</Link></li>
                    <li><Link to="/cars">Cars</Link></li>
                </ul>
            </div>
        )
    }
}

export default MenuComp;