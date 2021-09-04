import React, { Component } from "react";
import { Container } from "react-bootstrap";
import TableComponent from "../components/TableComponent";
import { API_URL } from "../utils/constants";
import axios from "axios";

export default class UserContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "users")
      .then((res) => {
        const users = res.data.data;
        this.setState({ users });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    
    return (
      <Container>
        <TableComponent users={this.state.users} />
      </Container>
    );
  }
}
