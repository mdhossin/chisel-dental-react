import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SingleService.css";
// single service page
const SingleService = (props) => {
  const { name, description, image } = props.obj;
  return (
    <div>
      <Card className="h-100 shadow card-hover">
        <Card.Img className="sevices-img" variant="top" src={image} />
        <Card.Body>
          <Card.Title className="card-title title-card">
            <div className="heading-border mb-3">{name}</div>
          </Card.Title>
          <Card.Text>{description.slice(0, 100)}...</Card.Text>
        </Card.Body>

        <Card.Footer className="card-footer">
          <div className="text-center pb-2 d-flex align-items-center">
            <Link className="read-more ms-2" to="/">
              Read More
            </Link>
            <span className="ms-1 arrow">
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </span>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default SingleService;
