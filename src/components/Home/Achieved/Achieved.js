import React from "react";
import { Row } from "react-bootstrap";
import useServices from "../../hooks/useServices";
import Achieve from "../Achieve/Achieve";
import "./Achieved.css";
// main achiveved page
const Achieved = () => {
  const [services] = useServices();
  return (
    <div className="container my-5">
      <div className="text-center achieve-detail mb-5 all">
        <p>
          <small>Clinic figures</small>
        </p>
        <div className="heading-border mb-4">
          <h2>What Have We Achieved</h2>
        </div>
      </div>
      <div>
        <Row xs={1} md={4} className="g-4">
          {services.slice(18, 22).map((service) => (
            <Achieve key={service.id} obj={service}></Achieve>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Achieved;
