import React from 'react';


class EditUserComp extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="row">
                Edit User Comp {this.props.match.params.name} <br />
                Edit User Comp {this.props.match.params.idddd}
            </div>
        )
    }
}

export default EditUserComp;