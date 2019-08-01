import React from 'react';
import Movie from './Movie';

class MovieList extends React.Component {


    render() {
        return (
            <div className="row">
                {
                    this.props.movie_list.map((mov) => {
                        return <Movie showPopup={this.props.showPopup.bind(this)} className="col-md-4" details={mov} />
                    })
                }
            </div>
        )
    }
}

export default MovieList;