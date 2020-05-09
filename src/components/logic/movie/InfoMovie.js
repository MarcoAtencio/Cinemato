import React from "react";
import { withRouter } from "react-router-dom";

export const InfoMovie = (props) => {
  const { movie, history } = props;

  return (
    <div className="infoMovie">
      <div className="box-back">
        <button
          className="btn-back"
          onClick={() => {
            history.goBack();
          }}
        >
          <img className="img-back" alt="back" src="../back.png" />
        </button>
      </div>
      <div className="Movie">
        <div className="Movie-item">
          <div className="card-image">
            <figure>
              <img className="image" alt={movie.Title} src={movie.Poster} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-2 has-text-white">{movie.Title}</p>
                <p className="subtitle is-4 has-text-grey-light">
                  {movie.Year}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(InfoMovie);
