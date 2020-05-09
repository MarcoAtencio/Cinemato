import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

const API_KEY = "d470a188";

export class Search extends Component {
  state = {
    inputMovie: "",
  };

  handleChange = (e) => {
    this.setState({
      inputMovie: e.target.value,
    });
  };

  handleSubmit = () => {
    const { inputMovie } = this.state;
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then((res) => res.json())
      .then((results) => {
        const { Search = [] } = results;
        this.props.onResults(Search);
      });
  };

  shouldComponentUpdate() {
    return true;
  }

  handleSubmit_ = (e) => {
    e.preventDefault();
    this.props.history.push(`/movie`);
    this.handleSubmit();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit_}>
        <div className="box-search">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                onChange={this.handleChange}
                type="text"
                placeholder="Ingrese una pelicula"
              />
            </div>
            <div className="control">
              <Link
                to={`/movie`}
                onClick={this.handleSubmit}
                className="button is-dark"
              >
                Buscar
              </Link>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(Search);
