import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import TableComponent from '../components/TableComponent'

export default class HomeContainer extends Component {
    render() {
        return (
            <Container>
                <TableComponent users={this.props.users} />
            </Container>
        )
    }
}
