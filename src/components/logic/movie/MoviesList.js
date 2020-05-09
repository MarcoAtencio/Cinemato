import React, { Component } from "react";
import Movie from "./Movie";
import { Error404 } from "../error/Error404";

export class MoviesList extends Component {
  handleMovie = (idMovie) => {
    this.props.onMovie(this.props.movies.find((mov) => mov.imdbID === idMovie));
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.movies !== this.props.movies &&
      this.props.movies.length !== 0
    ) {
      return false;
    }
    return true;
  }

  render() {
    const { movies } = this.props;
    console.log("movList", movies);
    return movies.length !== 0 ? (
      <div className="columns is-multiline ">
        {movies.map((movie) => {
          return (
            <div key={movie.imdbID} className="column is-3">
              <Movie
                onClick={this.handleMovie}
                id={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
              />
            </div>
          );
        })}
      </div>
    ) : (
      <Error404 />
    );
  }
}
export default MoviesList;
