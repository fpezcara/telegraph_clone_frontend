import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "40vh" }}
    >
      Oops, this page doesn't exist. <Link to="/">Go back Home</Link>
    </Container>
  );
};

export default NotFound;
