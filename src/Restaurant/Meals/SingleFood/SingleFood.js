import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";

const SingleFood = (props) => {
  const { idMeal } = useParams();
  const [foodDetail, setFoodDetail] = useState({});

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((res) => res.json())
      .then((data) => setFoodDetail(data?.meals[0]));
  }, [idMeal]);

  const { strMealThumb, strMeal, strInstructions } = foodDetail;

  const history = useHistory();

  const handleGoBack = () => {
    history.push("/Restaurant");
  };

  return (
    <Container className="py-2 py-md-5">
      <Row>
        <div className="mx-auto col-10 col-md-8 col-lg-6">
          <Card className="py-2">
            <Card.Img
              variant="top"
              src={strMealThumb}
              style={{
                height: "200px",
                width: "200px",
                borderRadius: "100%",
                display: "block",
                margin: "0px auto",
              }}
            />
            <Card.Body>
              <Card.Title className="text-success">{strMeal}</Card.Title>
              <p className="text-secondary">{strInstructions}</p>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-center">
              <Button onClick={handleGoBack} variant="success">
                Back to Restaurant
              </Button>
            </Card.Footer>
          </Card>
        </div>
      </Row>
    </Container>
  );
};

export default SingleFood;
