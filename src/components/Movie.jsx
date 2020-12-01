import React, { Component } from "react";

export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };
  }

  Search(event) {
    this.setState({ searchValue: event.target.value });
  }

  render() {
    return <div className="movie"></div>;
  }
}
