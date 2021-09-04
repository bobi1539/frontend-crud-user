import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CreateUserContainer from "./containers/CreateUserContainer";
import DetailUserComponent from "./containers/DetailUserComponent";
import EditUserComponent from "./containers/EditUserComponent";
import UserContainer from "./containers/UserContainer";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />

        <BrowserRouter>
          <Route path="/" exact>
            <HomeContainer />
          </Route>
          <Route path="/users" exact>
            <UserContainer />
          </Route>
          <Route path="/users/create" exact>
            <CreateUserContainer />
          </Route>
          <Route path="/users/detail/:id" exact component={DetailUserComponent} />
          <Route path="/users/edit/:id" exact>
            <EditUserComponent />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}
