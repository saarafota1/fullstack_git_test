import React from 'react';
import WarningBanner from '../WarningBanner/WarningBanner';


class UserFormComp extends React.Component {
    state = {
        name: "",
        age: "",
        phone: "",
        job_id: "",
        show_warning: false,
        error: "",
        green_message: true
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    saveUser() {
        let new_user = {
            name: this.state.name,
            age: this.state.age,
            phone: this.state.phone,
            job_id: "3"
        }

        fetch("/users", {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            body: JSON.stringify(new_user),
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((res) => {
                console.log(res);
                if (res.success) {
                    //alert(res.message);
                    this.state.show_warning = true;
                    this.state.error = res.message;
                    this.green_message = true;
                    this.setState({ name: "", age: "", phone: "" });
                    this.props.getUsersFunction();
                } else {
                    this.state.show_warning = true;
                    this.state.error = res.message;
                    this.green_message = false;
                    this.setState({});
                }
            }, (error) => {
                console.log("Error:", error);
            })

    }

    render() {
        return (
            <div>
                <WarningBanner success={this.state.green_message} warn={this.state.show_warning} message={this.state.error} />
                <div className="form">
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label>Age:</label>
                        <input type="text" name="age" className="form-control" value={this.state.age} onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label>Phone:</label>
                        <input type="text" name="phone" className="form-control" value={this.state.phone} onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="btn btn-success" onClick={this.saveUser.bind(this)}>Save</div>
                </div>
            </div>
        )
    }


}

export default UserFormComp;