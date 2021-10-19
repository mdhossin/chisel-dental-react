import React from "react";
import { Card } from "react-bootstrap";
import "./Achieve.css";
// our achievement
const Achieve = (props) => {
  const { experience, image, description } = props.obj;
  return (
    <div className="text-center">
      <Card className="h-100 shadow card-hover pt-4 achieve-card">
        <Card.Img className="achieve-img  mx-auto" variant="top" src={image} />
        <Card.Body>
          <Card.Title className="card-title title">{experience}</Card.Title>
          <p className="card-description">{description}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Achieve;
