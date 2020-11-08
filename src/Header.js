import React, { Component } from "react";
import "./Style.css";
import About from "./About";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className="Header">
        <h1> UserSearch</h1>
        <span onClick={this.props.aboutClick}>About</span> <span>|</span>
        <span onClick={this.props.searchClick}>Search</span>
      </div>
    );
  }
}
