import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Container fluid className="home">
        <Row>
          <div className="col-12">
            <div className="banner-container">
              <h1 className="text-center fw-bolder text-white welcome-text">
                Welcome to FoodBazar Restaurant !
              </h1>

              <Button
                className="mt-3 btn-lg fw-bold d-block mx-auto py-2 px-4"
                style={{ backgroundColor: "#3b5", border: "none" }}
              >
                <Link
                  className="text-decoration-none text-white"
                  to="/Restaurant"
                >
                  Visit Restaurant
                </Link>
              </Button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
