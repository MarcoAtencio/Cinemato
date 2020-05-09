import { Component } from "react";

export class Content extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return this.props.children;
  }
}

export default Content;
