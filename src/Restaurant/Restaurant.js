import React, { useEffect, useState } from "react";
import { Col, FormControl, InputGroup, Row } from "react-bootstrap";
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
    <div className="container py-5 text-success">
      <div className="searcbox">
        <InputGroup className="mb-3">
          <FormControl
            onChange={(query) => setQuery(query?.target?.value)}
            placeholder="Search food..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2">search</InputGroup.Text>
        </InputGroup>
        <h4 className="text-center py-2 mb-3">Data is showing for {query}</h4>
      </div>
      <Row xs={1} md={2} lg={4} className="g-2 mb-3 mb-md-5">
        {meals?.map((meal) => (
          <Col>
            <Meals key={meal.idMeal} meal={meal}></Meals>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Restaurant;
