import React from 'react';


class EditUserComp extends React.Component {

    constructor(props) {
        super(props);

    }

    state = {
        name: "sara",
        age: 45
    }

    render() {
        return (
            <div className="row">
                Edit User Comp {this.props.match.params.name} <br />
                Edit User Comp {this.props.match.params.idddd} <br />
                <div className="btn btn-danger" onClick={this.goToTable.bind(this)}>Go to Table Comp</div>

            </div>
        )
    }

    goToTable() {
        //this.props.history.push(`/edit/${this.state.name}/${this.state.age}`);
        this.props.history.push('/edit/' + this.state.name + '/' + this.state.age);
    }
}

export default EditUserComp;