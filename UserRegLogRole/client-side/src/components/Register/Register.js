import React from 'react';
import Login from '../Login/Login';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Register extends React.Component {

    state = {
        name: "",
        username: "",
        password: ""
    }

    register() {
        fetch("/users/register", {
            method: "PUT",
            body: JSON.stringify({ "name": this.state.name, "username": this.state.username, "password": this.state.password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                console.log(res);
            });
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>
                <div className="form">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" onChange={this.handleChange.bind(this)} name="name" className="form-control" placeholder="name" value={this.state.name} />
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" onChange={this.handleChange.bind(this)} name="username" className="form-control" placeholder="username" value={this.state.username} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" onChange={this.handleChange.bind(this)} name="password" className="form-control" placeholder="password" value={this.state.password} />
                    </div>
                    <div className="btn btn-info" onClick={this.register.bind(this)}>Register</div>
                </div>
                <Link to="/" >Back</Link>
            </div>
        )
    }
}

export default Register;