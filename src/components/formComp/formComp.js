import React from 'react';
import './formComp.css'


class FormComp extends React.Component {
    render() {
        return (
            <div>
                <h2>Form</h2>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name.." />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Phone.." />
                </div>
                <div className="btn btn-success btn-block" onClick={this.myFunc}>Click Me</div>
            </div>
        );
    }
    myFunc() {
        alert("hey!")
    }
}

export default FormComp;