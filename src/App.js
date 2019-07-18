import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormComp from '././components/formComp/formComp';
import TableComp from '././components/tableComp/tableComp';
import EsComp from '././components/ES6Comp/EsComp';
import StateProp from '././components/StateProp/StateProp';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="row">
                    <div className="col-md-6">
                        <EsComp />
                    </div>
                    <div className="col-md-6">
                        <FormComp />
                    </div>
                    <div className="col-md-6">
                        <TableComp />
                    </div>
                    <div className="col-md-6">
                        <StateProp />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
