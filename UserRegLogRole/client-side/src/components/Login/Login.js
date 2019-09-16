import React from 'react';
import Register from '../Register/Register';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Login extends React.Component {

    state = {
        username: "",
        password: ""
    }

    login() {
        fetch("/users/login", {
            method: "POST",
            body: JSON.stringify({ "username": this.state.username, "password": this.state.password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then((res) => {
                if (res.success) {
                    if (res.data[0].role > 1) {
                        this.props.history.push('/home');
                    } else {
                        this.props.history.push('/admin');
                    }
                } else {
                    alert("Wrong Password Or Username...");
                }
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
                        <label>Username</label>
                        <input type="text" onChange={this.handleChange.bind(this)} name="username" className="form-control" placeholder="username" value={this.state.username} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" onChange={this.handleChange.bind(this)} name="password" className="form-control" placeholder="password" value={this.state.password} />
                    </div>
                    <div className="btn btn-info" onClick={this.login.bind(this)}>Login</div>
                </div>
                <Link to="/register">Register</Link>
            </div>
        )
    }
}

export default Login;