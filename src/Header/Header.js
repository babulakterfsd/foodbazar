import { InputGroup } from "react-bootstrap";
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
            <FontAwesomeIcon
              icon={faUtensils}
              className="text-success ms-md-5"
            />
            FoodBazar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-md-0 fw-bold">
              <Link to="/Home">
                <span>Home</span>
              </Link>
              <Link to="/Restaurant">
                <span>Restaurant</span>
              </Link>
              <Link to="/About">
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
