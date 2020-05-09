import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export class Movie extends PureComponent {
  handleMovie = () => {
    this.props.onClick(this.props.id);
  };

  render() {
    const { id, poster, title, year } = this.props;

    return (
      <div className="box-card ">
        <div className="card-image">
          <Link
            onClick={this.handleMovie}
            to={`/movie/${id}`}
            className="card "
          >
            <figure className="image">
              <img alt={title} src={poster} />
            </figure>
          </Link>
        </div>

        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-5 has-text-light">{title}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
