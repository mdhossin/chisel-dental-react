import React from "react";
import { Col, Row, Image, Button } from "react-bootstrap";
import "./AboutClinic.css";
import aboutImg from "../../../images/aboutus.jpeg";
// about clinic
const AboutClinic = () => {
  return (
    <div className="container mt-5 main-container">
      <Row className="about-detail">
        <Col xs={12} md={6}>
          <h5 className="mb-3 ">
            Asia’s Top-Ranked Cosmetic Dentistry Experts
          </h5>
          <h2 className="mb-3">Welcome to our Dental Clinic</h2>
          <p>
            Cosmodontist Dental and Implant Centre is one of the best dental
            clinic in Gurgaon. The clinic is headed by Dr. Nilay Bhatia , who is
            acknowledged as one of the best dentist in Gurgaon by his patients.
            With extensive knowledge and experience in transforming smiles, Dr.
            Bhatia has been a top-ranked smile expert in Gurgaon. Patients from
            all around the world come to Dr. Nilay and his team as their
            cosmetic dentistry of choice. His adept practice and the modern
            technology equipped at the premises combine to set the clinic as of
            the most visited dental clinic in Gurgaon. Click below to schedule
            an appointment with the best dentist in Gurgaon.
          </p>
          <Button variant="danger">Book An Appoinment</Button>
        </Col>
        <Col xs={12} md={6}>
          <Image className="about-img img-fluid" src={aboutImg} rounded />
        </Col>
      </Row>
    </div>
  );
};

export default AboutClinic;
