import React from "react";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

const JumbotronComponent = (props) => {
  return (
    <div className="jumbotron">
      <Container className="p-5">
        <h1>{props.title}</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="dark">
            <FontAwesomeIcon icon={faInfo} /> Learn more
          </Button>
        </p>
      </Container>
    </div>
  );
};

export default JumbotronComponent;
