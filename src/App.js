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
    users: [
      {
        id: 1,
        name: "Ucup",
        address: "Bukittinggi",
      },
      {
        id: 2,
        name: "Otong",
        address: "Medan",
      },
      {
        id: 3,
        name: "Robi",
        address: "Jambi",
      },
      {
        id: 4,
        name: "Tono",
        address: "Jambu Air",
      },
      {
        id: 5,
        name: "Ucup",
        address: "Bukittinggi",
      },
      {
        id: 6,
        name: "Otong",
        address: "Medan",
      },
      {
        id: 7,
        name: "Robi",
        address: "Jambi",
      },
      {
        id: 8,
        name: "Tono",
        address: "Jambu Air",
      },
      {
        id: 9,
        name: "Ucup",
        address: "Bukittinggi",
      },
      {
        id: 10,
        name: "Otong",
        address: "Medan",
      },
      {
        id: 11,
        name: "Robi",
        address: "Jambi",
      },
      {
        id: 12,
        name: "Tono",
        address: "Jambu Air",
      },
      {
        id: 13,
        name: "Tono",
        address: "Jambu Air",
      },
    ],
  };

  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent title={this.state.title} />
        <BrowserRouter>
          <Route path="/" exact>
            <HomeContainer users={this.state.users} />
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
