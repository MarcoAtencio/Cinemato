import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Nav extends Component {
  render() {
    return (
      <>
        <nav>
          <Link to="/" className="box-nav">
            <img className="logo" src="logo.png" alt="logo" />
          </Link>
        </nav>
      </>
    );
  }
}

export default Nav;
