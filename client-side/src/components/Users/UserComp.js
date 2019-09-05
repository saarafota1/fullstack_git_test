import React from 'react';
import WarningBanner from '../WarningBanner/WarningBanner';
import UserFormComp from './UserFormComp';


class UserComp extends React.Component {
    state = {
        name: "",
        age: "",
        phone: "",
        job_id: "",
        show_warning: false,
        error: "",
        users: [
            {
                name: "bla",
                age: 30,
                phone: "06096i096"
            }
        ]
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        fetch("/users")
            .then((res) => {
                console.log(res);
                return res.json(); // JSON.parse(res) // back to object
            })
            .then((res) => {
                console.log(res);
                this.state.users = res.data;
                this.setState({});
            }, (error) => {
                console.log("Error:", error);
            })
    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="table table-dark">
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Phone</th>
                                        <th>JOB</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.users.map((user) => {
                                            return (
                                                <tr>
                                                    <td>{user.name}</td>
                                                    <td>{user.age}</td>
                                                    <td>{user.phone}</td>
                                                    <td>{user.position}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <UserFormComp getUsersFunction={this.getUsers.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }


}

export default UserComp;