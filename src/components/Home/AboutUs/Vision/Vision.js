import React from "react";
import { Col, Row } from "react-bootstrap";
import second from "../../../../images/about/second.jpg";
import "./Vision.css";
// our vision and mission page
const Vision = () => {
  return (
    <div className="container mb-5">
      <Row>
        <Col xs={12} md={6}>
          <div className="vision-img">
            <img className="img-fluid" src={second} alt="" />
          </div>
        </Col>
        <Col xs={12} md={6}>
          <h3 className="vision">Mission / Vision Statement</h3>
          <p>
            It is our mission to exceed expectations by providing exceptional
            dental care to our patients and at the same time, building
            relationships of trust with them. For that, we work together with
            our patients to improve their oral health, chewing ability and
            cosmetic appearance to enhance the quality of life.
          </p>

          <div className="mt-3">
            <p>
              Our vision is to be one of the leading dental clinics in India. To
              get there, we have shaped our practice around the principles of
              high-quality treatments, best-in-class customer service, coupled
              with advanced infrastructure like having an in-house full mouth
              X-ray machine, so that our patients get all round dental care at
              one place.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Vision;
