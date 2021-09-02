import React, { Component } from "react";
import JumbotronComponent from "./components/JumbotronComponent";
import NavbarComponent from "./components/NavbarComponent";

export default class App extends Component {

  state = {
    title : "Zero Programmer"
  }

  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent title={this.state.title} />
      </div>
    );
  }
}
