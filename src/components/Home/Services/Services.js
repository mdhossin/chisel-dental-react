import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useServices from "../../hooks/useServices";
import Service from "../Service/Service";
import "./Services.css";
// home page services here
const Services = () => {
  const [services] = useServices();
  return (
    <>
      <div className="container py-5">
        <div className="all-services all text-center mb-5">
          <div className="heading-border mb-4">
            <h2 className="hover-effect">Our Services</h2>
          </div>
          <p className="mx-auto service-title">
            Enhance your natural beauty through our premium dental treatments,
            providing you with the most satisfying results. The diversity of our
            dental services and hi-tech facilities makes us one of the best
            dental clinic in Gurgaon.
          </p>
        </div>
        <Row xs={1} md={3} className="g-4">
          {services.slice(0, 9).map((service) => (
            <Service key={service.id} obj={service}></Service>
          ))}
        </Row>
        <div className="text-center mt-5">
          <Link to="/allservices">
            <Button variant="outline-danger">All Services</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Services;
