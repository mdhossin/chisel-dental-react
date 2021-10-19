import React from "react";
import { Col, Row } from "react-bootstrap";
import first from "../../../../images/about/first.jpg";
import "./About.css";

// about us
const About = () => {
  return (
    <div className="container my-5">
      <div className="all text-center mb-5">
        <div className="heading-border">
          <h2>About Us</h2>
        </div>
      </div>
      <Row>
        <Col xs={12} md={6}>
          <div className="about">
            <img className="img-fluid" src={first} alt="" />
          </div>
        </Col>
        <Col xs={12} md={6}>
          <p>
            For nearly 10 years, our dentist, Dr. Nilay Bhatia and the dental
            team at Cosmodontist Dental Clinic have provided cosmetic dentistry
            as well as family dentistry services. Dr.Nilay understands that
            patients have a variety of practices in the area to choose from.
          </p>
          <h5 className="heading">
            Come and experience dentistry carried out a little differently in
            our Private Practice. A practice where you will:
          </h5>
          <div className="mt-4">
            <p>Be involved in your care and treatment choices</p>
            <p>Be welcomed and feel relaxed and cared for</p>
            <p>Appreciate the well qualified, experienced team</p>
            <p> Want the best dentistry available</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;
