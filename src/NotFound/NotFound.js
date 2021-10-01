import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <Container>
      <Row>
        <div className="notfound-container">
          <h3 className="text-center fw-bolder text-danger welcome-text">
            404! Page Not Found !!!
          </h3>

          <Button
            className="mt-3 btn-lg fw-bold d-block mx-auto py-2 px-4"
            style={{ backgroundColor: "#3b5", border: "none" }}
          >
            <Link className="text-decoration-none text-white" to="/Home">
              Go Back to Home
            </Link>
          </Button>
        </div>
      </Row>
    </Container>
  );
};

export default NotFound;
