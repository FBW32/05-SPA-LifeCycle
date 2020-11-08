import React, { Component } from "react";
import "./Style.css";
import User from "./User";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.searchFor = null;
    this.state = { users: [] };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ users: result });
      });
    console.log("The SearchResult-component has mounted.");
  }

  shouldComponentUpdate(nextProps) {
    console.log("shouldComponentUpdate");
    if (this.searchFor === null) {
      this.searchFor = nextProps.searchFor;
      return true;
    }
    if (
      this.props.searchFor === "" ||
      this.props.searchFor !== nextProps.searchFor
    ) {
      return true;
    }
    return false;
  }
  componentWillUnmount() {
    console.log("The SearchResults-component will unmount");
  }
  render() {
    console.log("render");
    return (
      <div id="search">
        <table>
          <thead>
            <th>id</th>
            <th>name</th>
            <th>email</th>
          </thead>
          {this.state.users
            .filter(
              (u) =>
                u.name.includes(this.props.searchFor) ||
                u.email.includes(this.props.searchFor)
            )
            .map((user) => (
              <User id={user.id} name={user.name} email={user.email} />
            ))}
        </table>
      </div>
    );
  }
}
