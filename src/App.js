import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import Nav from "./components/layouts/Nav";
import Body from "./components/layouts/Body";
import Footer from "./components/layouts/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Load } from "./components/logic/Load";

export class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    window.addEventListener("load", () => {
      this.setState({ loading: false });
    });
  }

  componentWillUnmount() {
    window.removeEventListener("load", () => {
      this.setState({ loading: false });
    });
  }

  render() {
    return this.state.loading ? (
      <Load />
    ) : (
      <Router>
        <Nav onHome={this.handleHome} />
        <Body home={this.state.home} />
        <Footer />
      </Router>
    );
  }
}

export default App;
