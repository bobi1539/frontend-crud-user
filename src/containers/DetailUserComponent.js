import React, { Component } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import BackComponent from "../components/BackComponent";
import { API_URL } from "../utils/constants";
import axios from "axios";

export default class DetailUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: false,
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "users/" + this.props.match.params.id)
      .then((res) => {
        const user = res.data.data;
        this.setState({ user });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (!this.state.user) {
      return (
        <Container className="mt-3">
          <Row className="justify-content-center">
            <Col md={6}>
              <h3 className="text-center mb-3">Data User Tidak Ditemukan</h3>
              <BackComponent />
            </Col>
          </Row>
        </Container>
      );
    } else {
      return (
        <Container className="mt-3">
          <Row className="justify-content-center">
            <Col md={6}>
              <h3 className="text-center mb-3">Detail User</h3>
              <BackComponent />
              <Table striped bordered hover className="mt-3">
                <tbody>
                  <tr>
                    <td>Nama</td>
                    <td>{this.state.user.name}</td>
                  </tr>
                  <tr>
                    <td>Alamat</td>
                    <td>{this.state.user.address}</td>
                  </tr>
                  <tr>
                    <td>Umur</td>
                    <td>{this.state.user.age}</td>
                  </tr>
                  <tr>
                    <td>No Handphone</td>
                    <td>{this.state.user.phone_number}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}
