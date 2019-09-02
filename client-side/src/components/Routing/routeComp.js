import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomeComp from './components/home';
import GalleryComp from './components/gallery';
import AboutComp from './components/about';
import MenuComp from './components/menu';
import TableAndFormComp from '../TableAndFormComp/TableAndFormComp';
import EditUserComp from './components/EditUserComp';

class RouteComp extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    Main Comp
                    <div>
                        <MenuComp />
                    </div>
                    {/* <HomeComp />
                    <GalleryComp />
                    <AboutComp /> */}

                    <Route exact path="/" component={HomeComp} />
                    <Route path="/about" component={AboutComp} />
                    <Route path="/bank" component={GalleryComp} />
                    <Route path="/table" component={TableAndFormComp} />
                    <Route path="/edit/:name/:idddd" component={EditUserComp} />
                </div>
            </Router>
        )
    }
}

export default RouteComp;