import React, { useEffect, useState } from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import Meals from "./Meals/Meals";

const Restaurant = () => {
  const [meals, setMeals] = useState([]);
  const [query, setQuery] = useState("fish");

  if (!query) {
    setQuery("fish");
  }

  useEffect(() => {
    async function getData() {
      const promise = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const response = await promise.json();
      setMeals(response?.meals);
    }
    try {
      getData();
    } catch (error) {
      console.log(error.message);
    }
  }, [query]);

  return (
    <div>
      <Container>
        <Row className="py-5">
          <div className="mx-auto col-10 col-md-8 col-lg-8">
            <div className="searcbox">
              <InputGroup className="mb-3">
                <FormControl
                  className="w-50 mx-auto"
                  onChange={(query) => setQuery(query?.target?.value)}
                  placeholder="Search food..."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
              <h4 className="text-center text-success">
                Data is showing for {query}
              </h4>
            </div>
          </div>
        </Row>
      </Container>
      <div className="container pb-5 text-success">
        <Row xs={1} md={2} lg={4} className="g-2 mb-3 mb-md-5">
          {meals?.map((meal) => (
            <Col>
              <Meals key={meal.idMeal} meal={meal}></Meals>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Restaurant;
