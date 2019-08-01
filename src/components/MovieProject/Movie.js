import React from 'react';

class Movie extends React.Component {

    state = {
        movie: {
            Title: "",
            Postr: "",
            Year: 2000,
            imdbID: 0,
            Type: "movie"
        }
    }

    constructor(props) {
        super(props);
        this.state.movie = props.details;
    }

    render() {
        return (
            <div className="card col-md-4 mt-3" onClick={this.props.showPopup.bind(this, this.state.movie.imdbID)}>
                <img src={this.state.movie.Poster} />
                <div>Title: {this.state.movie.Title}</div>
                <div>Year: {this.state.movie.Year}</div>
                <div>Type: {this.state.movie.Type}</div>
                Bl bla
            </div>
        )
    }
}

export default Movie;