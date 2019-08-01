import React from 'react';
import SearchComp from './SearchComp';
import MovieList from './MovieList';
import Popup from "reactjs-popup";
import Movie from './Movie';

class MovieComp extends React.Component {
    state = {
        movies: [],
        show_popup: false,
        movie: {
            Poster: "",
            Title: ""
        }
    }

    getMovies(text_to_search) {
        fetch("http://www.omdbapi.com/?s=" + text_to_search + "&apikey=21af947d")
            .then((res) => res.json())
            .then((res) => {
                //console.log(res);
                this.state.movies = res.Search;
                console.log(this.state.movies);
                this.setState({});
            }, (error) => {
                console.log("Error:", error);
            })
    }

    hidePopup() {
        this.setState({
            show_popup: false
        });
    }
    render() {
        return (
            <div>
                {/* <Popup show_popup={this.state.show_popup} movieID={this.state.movieID} /> */}
                {
                    < Popup onClose={this.hidePopup.bind(this)} open={this.state.show_popup} position="right center" >
                        <Movie showPopup={this.hidePopup.bind(this)} className="col-md-4" details={this.state.movie} />
                    </Popup >
                }


                <div className="search-wrapper">
                    <SearchComp getMovies={this.getMovies.bind(this)} />
                </div>
                <div className="movie-list-wrapper">
                    <MovieList showPopup={this.showPopup.bind(this)} movie_list={this.state.movies} />
                </div>
            </div >
        )
    }

    showPopup(movie_id) {
        console.log("Movie");
        fetch("http://www.omdbapi.com/?i=" + movie_id + "&apikey=21af947d")
            .then((res) => res.json())
            .then((res) => {
                //console.log(res);
                this.state.movie = res;
                console.log(this.state.movie);
                this.state.show_popup = true;
                this.setState({});
            }, (error) => {
                console.log("Error:", error);
            })
    }
}

export default MovieComp;