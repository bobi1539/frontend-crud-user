import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faEdit,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";

const { SearchBar } = Search;

const columns = [
  {
    dataField: "id",
    text: "ID",
    headerAlign: "center",
    headerStyle: () => {
      return { width: "5%" };
    },
    align: "center",
    sort: true,
  },
  {
    dataField: "name",
    text: "Nama",
    sort: true,
  },
  {
    dataField: "address",
    text: "Alamat",
    sort: true,
  },
  {
    dataField: "link",
    text: "Aksi",
    headerAlign: "center",
    align: "center",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Link to={"/users/detail/" + row.id}>
            <Button variant="dark" className="me-2">
              <FontAwesomeIcon icon={faInfo} /> Detail
            </Button>
          </Link>
          <Link to={"/users/edit/" + row.id}>
            <Button variant="dark" className="me-2">
              <FontAwesomeIcon icon={faEdit} /> Edit
            </Button>
          </Link>
          <Button variant="dark" className="me-2">
            <FontAwesomeIcon icon={faTrash} /> Hapus
          </Button>
        </div>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const TableComponent = (props) => {
  return (
    <div>
      <Container className="mt-3 mb-5">
        <h3 className="text-center mb-3">Data User</h3>
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.users}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Row>
                <Col>
                  <Link to="users/create">
                    <Button variant="dark">
                      <FontAwesomeIcon icon={faUserPlus} /> Create User
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <div className="float-end">
                    <SearchBar
                      className="mb-3"
                      placeholder="Search ..."
                      {...props.searchProps}
                    />
                  </div>
                </Col>
              </Row>

              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      </Container>
    </div>
  );
};

export default TableComponent;
