import React from "react";
import { Row } from "react-bootstrap";
import useServices from "../../hooks/useServices";
import Footer from "../../Shared/Footer/Footer";
import Header from "../Header/Header";
import SingleService from "../SingleService/SingleService";
import "./AllServices.css";
// display all serivces
const AllServices = () => {
  const [services] = useServices();
  return (
    <>
      <Header></Header>
      <div className="container py-5">
        <div className="all-services text-center mb-5 all">
          <p className="small-text">
            <small>What We Offer</small>
          </p>
          <div className="heading-border mb-4">
            <h2>Our All Services</h2>
          </div>
          <p className="mx-auto service-title">
            Enhance your natural beauty through our premium dental treatments,
            providing you with the most satisfying results. The diversity of our
            dental services and hi-tech facilities makes us one of the best
            dental clinic in Gurgaon.
          </p>
        </div>
        <Row xs={1} md={3} className="g-4">
          {services.slice(0, 12).map((service) => (
            <SingleService key={service.id} obj={service}></SingleService>
          ))}
        </Row>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AllServices;
