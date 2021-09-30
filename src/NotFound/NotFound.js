import React from "react";
import { Container, Row } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container>
      <Row>
        <div className="mx-auto col-10 col-md-8 col-lg-6">
          <h1 className="text-secondary my-5">404! Page not found ....</h1>
        </div>
      </Row>
    </Container>
  );
};

export default NotFound;
