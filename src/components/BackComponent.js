import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BackComponent = () => {
  return (
    <Link to="/users">
      <Button variant="dark">
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </Button>
    </Link>
  );
};

export default BackComponent;
