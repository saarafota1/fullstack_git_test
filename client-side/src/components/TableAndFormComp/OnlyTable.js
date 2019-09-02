import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class OnlyTable extends React.Component {

    state = {};
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: props.name,
    //         age: props.age
    //     }
    // }

    // componentDidMount(){

    // }
    deleteUser(user) {
        this.props.deleteUserFromParent(user);
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.users_list.map(
                                (user, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{user.name}</td>
                                            <td>{user.age}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.gender == 0 ? "Male" : "Female"}</td>
                                            <td><i onClick={this.deleteUser.bind(this, user.name)} className="fa fa-trash"></i></td>
                                            <td><Link to={"/edit/" + user.name + "/" + user.age} >Edit User</Link></td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default OnlyTable;