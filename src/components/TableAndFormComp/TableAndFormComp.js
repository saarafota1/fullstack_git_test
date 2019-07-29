import React from 'react';
import OnlyForm from './OnlyForm';
import OnlyTable from './OnlyTable';

class TableAndFormComp extends React.Component {

    state = {
        // name: "",
        // age: "",
        // phone: "",
        // gender: 0,
        users: [{
            name: "Saar",
            age: 36,
            phone: "0502525255",
            gender: 1
        },
        {
            name: "Saar",
            age: 36,
            phone: "0502525255",
            gender: 1
        }]
    }

    //this.state.users.push(new_user);
    // handleChange(e) {
    //     this.setState({ [e.target.name]: e.target.value });
    // }

    // saveUser() {
    //     let new_user = {
    //         name: this.state.name,
    //         age: this.state.age,
    //         phone: this.state.phone,
    //         gender: this.state.gender
    //     }
    //     this.state.users.push(new_user);
    //     this.setState({});
    // }

    addUser(new_user) {
        this.state.users.push(new_user);
        this.setState({});
    }

    deleteUserFromArray(user_to_delete) {
        this.state.users.pop();
        this.setState({});
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <OnlyForm trigger_addUser={this.addUser.bind(this)} />
                </div>
                <div className="col-md-6">
                    <OnlyTable deleteUserFromParent={this.deleteUserFromArray.bind(this)} users_list={this.state.users} />
                </div>
            </div>
        )
    }
    // render() {
    //     return (
    //         <div>
    //             <div className="row">
    //                 <div className="col-md-6">
    //                     <div className="form-group">
    //                         <label>Name</label>
    //                         <input className="form-control" name="name" onChange={this.handleChange.bind(this)} value={this.state.name} type="text" />
    //                     </div>
    //                     <div className="form-group">
    //                         <label>Age</label>
    //                         <input className="form-control" name="age" onChange={this.handleChange.bind(this)} value={this.state.age} type="number" />
    //                     </div>
    //                     <div className="form-group">
    //                         <label>Phone</label>
    //                         <input className="form-control" name="phone" onChange={this.handleChange.bind(this)} value={this.state.phone} type="text" />
    //                     </div>
    //                     <div className="form-group">
    //                         <label>Gender</label>
    //                         <select name="gender" onChange={this.handleChange.bind(this)} value={this.state.gender} >
    //                             <option value="0">Male</option>
    //                             <option value="1">Female</option>
    //                         </select>
    //                     </div>
    //                     <div className="btn btn-info" onClick={this.saveUser.bind(this)}>Save</div>
    //                 </div>
    //                 <div className="col-md-6">
    //                     <table>
    //                         <thead>
    //                             <tr>
    //                                 <th>Name</th>
    //                                 <th>Phone</th>
    //                                 <th>Age</th>
    //                                 <th>Gender</th>
    //                             </tr>
    //                         </thead>
    //                         <tbody>
    //                             {
    //                                 this.state.users.map(
    //                                     (user, index) => {
    //                                         return (
    //                                             <tr key={index}>
    //                                                 <td>{user.name}</td>
    //                                                 <td>{user.age}</td>
    //                                                 <td>{user.phone}</td>
    //                                                 <td>{user.gender == 0 ? "Male" : "Female"}</td>
    //                                             </tr>
    //                                         )
    //                                     }
    //                                 )
    //                             }
    //                         </tbody>
    //                     </table>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }
}

export default TableAndFormComp;