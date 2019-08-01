import React from 'react';

class SearchComp extends React.Component {
    state = {
        text_to_search: "Speed"
    }

    // componentDidMount() {
    //     this.state.text_to_search = "vxzcxz";
    //     console.log(this.state.text_to_search);
    //     this.setState({});
    // }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    

    render() {
        return (
            <div>
                <input type="text" name="text_to_search" value={this.state.text_to_search} onChange={this.handleChange.bind(this)} placeholder="Search..." className="form-control" />
                <div className="btn btn-info" onClick={this.props.getMovies.bind(this, this.state.text_to_search)}>Search</div>
            </div>
        )
    }
}

export default SearchComp;