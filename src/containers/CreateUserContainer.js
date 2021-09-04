import React, { Component } from "react";
import { Container } from "react-bootstrap";
import BackComponent from "../components/BackComponent";

export default class CreateUserContainer extends Component {
  render() {
    return (
      <Container className="mt-3">
        <h3 className="text-center mb-3">Create User</h3>
        <BackComponent />
      </Container>
    );
  }
}
