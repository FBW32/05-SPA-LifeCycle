import React from "react";
import Header from "./Header";
import Search from "./Search";

import About from "./About";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "", lastSearchTerm: "", currentPage: "search" };
    this.aboutClick = () => {
      this.setState({ ...this.state, currentPage: "about" });
      let input = document.getElementById("txt-search");
      input.hidden = true;
      let btn = document.getElementById("btn-search");
      btn.hidden = true;
    };
    this.searchClick = () => {
      this.setState({ ...this.state, currentPage: "search" });
      let input = document.getElementById("txt-search");
      input.hidden = false;
      let btn = document.getElementById("btn-search");
      btn.hidden = false;
    };
  }

  render() {
    return (
      <div>
        <Header aboutClick={this.aboutClick} searchClick={this.searchClick} />
        <input
          type="text"
          id="txt-search"
          onChange={(e) => {
            this.setState({ ...this.state, searchTerm: e.target.value });
          }}
        ></input>
        <button
          type="button"
          value="search"
          id="btn-search"
          onClick={(e) => {
            this.setState({
              ...this.state,
              lastSearchTerm: this.state.searchTerm,
            });
          }}
        >
          Search
        </button>
        {this.state.currentPage === "search" ? (
          <Search searchFor={this.state.lastSearchTerm} />
        ) : (
          <About />
        )}
      </div>
    );
  }
}
