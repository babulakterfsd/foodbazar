import React from "react";
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar className="navbar-light bg-light" expand="md">
        <Container fluid>
          <Navbar.Brand
            href="https://foodbazar-babulakterfsd.betlify.app"
            className="text-secondary fw-bolder"
          >
            <Link to="/Home" className="text-success">
              <FontAwesomeIcon
                icon={faUtensils}
                className="text-success ms-md-5"
              />
              FoodBazar
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-md-0 fw-bold">
              <Link
                to="/Home"
                className="text-decoration-none text-success mx-2"
              >
                <span>Home</span>
              </Link>
              <Link
                to="/Restaurant"
                className="text-decoration-none text-success mx-2"
              >
                <span>Restaurant</span>
              </Link>
              <Link
                to="/About"
                className="text-decoration-none text-success mx-lg-3"
              >
                <span>About</span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
