import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";
// single servic page
const Service = (props) => {
  const { name, image, description } = props.obj;
  return (
    <div>
      <Card className="h-100 shadow card-hover">
        <Card.Img className="sevices-img" variant="top" src={image} />
        <Card.Body>
          <Card.Title className="card-title title-card">
            <div className="heading-border mb-3">{name}</div>
          </Card.Title>
          <Card.Text>
            {description.slice(0, 120)}
            <Link className="learn-more" to="/">
              {" "}
              ...Read more
            </Link>
          </Card.Text>
        </Card.Body>

        <Card.Footer className="card-footer">
          <div className="text-center pb-2">
            <Link to={`/service/${name}`}>
              <Button className="me-2" variant="outline-danger">
                Show Details
              </Button>
            </Link>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Service;
