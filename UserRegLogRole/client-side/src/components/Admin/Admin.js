import React from 'react';

class Admin extends React.Component {
    state = {
        users: []
    }

    getData() {
        fetch('/users/getUsers')
            .then(res => res.json())
            .then((res) => {
                console.log(res);
                if (res.success) {
                    this.setState({ users: res.data });
                } else {
                    alert("Error!");
                }

            });
    }

    checkUserRole() {
        fetch('/users/checkUserConnectedRole')
            .then(res => res.json())
            .then((res) => {
                console.log(res);
                if (res.success) {
                    this.getData();
                } else {
                    this.props.history.push('/');
                }

            });
    }

    componentDidMount() {
        this.checkUserRole();
    }

    render() {
        return (
            <div>
                Admin
            </div>
        )
    }
}

export default Admin;