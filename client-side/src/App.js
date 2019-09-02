import React from 'react';
import logo from './logo.svg';
import './App.css';
import TableAndFormComp from './components/TableAndFormComp/TableAndFormComp';
import AjaxComp from './components/AjaxCalls/AjaxComp';
import RouteComp from './components/Routing/routeComp';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="row">
                    <div className="col-md-12">
                        <AjaxComp />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
