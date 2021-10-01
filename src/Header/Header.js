import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar className="py-4 menubar" expand="md">
        <Container fluid>
          <Navbar.Brand
            href="https://foodbazar-babulakterfsd.betlify.app"
            className="text-secondary fw-bolder"
          >
            <Link to="/Home" className="text-white">
              <FontAwesomeIcon icon={faUtensils} className=" ms-md-5" />
              FoodBazar
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-md-0 fw-bold">
              <Link to="/Home" className="text-decoration-none mx-2">
                <span className="text-white">Home</span>
              </Link>
              <Link to="/Restaurant" className="text-decoration-none  mx-2">
                <span className="text-white">Restaurant</span>
              </Link>
              <Link to="/About" className="text-decoration-none mx-lg-3">
                <span className="text-white">About</span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
