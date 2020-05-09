import React, { Component } from "react";
import Search from "../logic/Search";
import MoviesList from "../logic/movie/MoviesList";
import InfoMovie from "../logic/movie/InfoMovie";
import { Route, Redirect } from "react-router-dom";
import { Welcome } from "../message/Welcome";
import { LoadMovie } from "../logic/Load";
import Content from "../layouts/Content";

export class Body extends Component {
  state = { results: [], movie: [], loading: true };

  handleResults = (results) => {
    this.setState({ results: [] });
    this.setState({
      results,
      loading: false,
    });
  };

  handleMovie = (movie) => {
    this.setState({ movie });
  };

  render() {
    console.log("Body", this.state.results);
    return (
      <div className="info">
        <Search onResults={this.handleResults} />
        <Content>
          <div className="box-info">
            <Route exact path="/" component={Welcome} />
            {this.state.loading && this.state.results.length !== 0 ? (
              <LoadMovie />
            ) : (
              <>
                <Route
                  exact
                  path="/movie"
                  render={() => (
                    <MoviesList
                      movies={this.state.results}
                      onMovie={this.handleMovie}
                    />
                  )}
                />
                <Route
                  exact
                  path="/movie/:id"
                  render={() => <InfoMovie movie={this.state.movie} />}
                />
              </>
            )}
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </div>
        </Content>
      </div>
    );
  }
}

export default Body;
