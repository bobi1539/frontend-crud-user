import React, { Component } from "react";
import JumbotronComponent from "./components/JumbotronComponent";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CreateUserContainer from "./containers/CreateUserContainer";
import DetailUserComponent from "./containers/DetailUserComponent";
import EditUserComponent from "./containers/EditUserComponent";

export default class App extends Component {
  state = {
    title: "Zero Programmer",
  };

  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent title={this.state.title} />
        <BrowserRouter>
          <Route path="/" exact>
            <HomeContainer />
          </Route>
          <Route path="/create" exact>
            <CreateUserContainer />
          </Route>
          <Route path="/detail/:id" exact>
            <DetailUserComponent />
          </Route>
          <Route path="/edit/:id" exact>
            <EditUserComponent />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}
