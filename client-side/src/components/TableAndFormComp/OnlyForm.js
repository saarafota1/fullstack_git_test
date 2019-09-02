import React from 'react';
import WarningBanner from '../WarningBanner/WarningBanner';


class OnlyForm extends React.Component {
    state = {
        name: "",
        age: "",
        phone: "",
        gender: 0,
        error_message: "Check Message",
        error_name: "",
        error_phone: "",
        error_age: "",
        warn: false
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    saveUser() {
        this.state.warn = false;
        this.state.error_message = "";
        this.state.error_name = "";
        this.state.error_age = "";
        this.state.error_phone = "";

        if (this.state.name.length < 3) {
            this.state.warn = true;
            this.state.error_message += "Name Too Short!!,";
            this.state.error_name = "Name Too Short!!";
        }
        if (this.state.age < 0 || this.state.age > 130) {
            this.state.warn = true;
            this.state.error_message += "Age Not in the right range...,";
            this.state.error_age = "Age Not in the right range...";
        }
        if (this.state.phone.length < 10) {
            this.state.warn = true;
            this.state.error_message += "Phone Too Short!!";
            this.state.error_phone = "Phone Too Short!!";
        }

        if (!this.state.warn) {
            let new_user = {
                name: this.state.name,
                age: this.state.age,
                phone: this.state.phone,
                gender: this.state.gender
            }

            this.props.trigger_addUser(new_user);
            //this.state.users.push(new_user);
            //this.setState({});
        } else {
            this.setState({});
        }

    }
    render() {
        return (
            <div>
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" name="name" onChange={this.handleChange.bind(this)} value={this.state.name} type="text" />
                    <WarningBanner warn={(this.state.error_name.length > 0)} message={this.state.error_name} />
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input className="form-control" name="age" onChange={this.handleChange.bind(this)} value={this.state.age} type="number" />
                    <WarningBanner warn={(this.state.error_age.length > 0)} message={this.state.error_age} />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input className="form-control" name="phone" onChange={this.handleChange.bind(this)} value={this.state.phone} type="text" />
                    <WarningBanner warn={(this.state.error_phone.length > 0)} message={this.state.error_phone} />
                </div>
                <div className="form-group">
                    <label>Gender</label>
                    <select name="gender" onChange={this.handleChange.bind(this)} value={this.state.gender} >
                        <option value="0">Male</option>
                        <option value="1">Female</option>
                    </select>
                </div>
                <div className="btn btn-info" onClick={this.saveUser.bind(this)}>Save</div>
                <WarningBanner warn={this.state.error_message.length > 0} message={this.state.error_message} />
            </div>
        )
    }
}

export default OnlyForm;