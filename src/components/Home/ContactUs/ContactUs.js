import React from "react";
import "./ContactUs.css";
import {
  Button,
  Col,
  FloatingLabel,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import map from "../../../images/map.png";
import Header from "../Header/Header";
import Footer from "../../Shared/Footer/Footer";
// contact us page
const ContactUs = () => {
  return (
    <>
      <Header></Header>
      <div className="container py-5 ">
        <Row>
          <div className="contact-heading mb-3">
            <div className="heading-border">
              <h2 className="contact-heading mb-4">Get In Touch With Us</h2>
            </div>
          </div>
          <Col xs={12} md={6}>
            <img className="img-fluid" src={map} alt="" />
          </Col>
          <Col xs={12} md={6}>
            <div className="d-flex pb-3 contact-from">
              <div className="w-50 me-3">
                <FormControl placeholder="Name *" aria-label="First name" />
              </div>
              <div className="w-50">
                <FormControl placeholder="Email *" aria-label="Last name" />
              </div>
            </div>
            <FormControl
              className="mb-3"
              placeholder="Select Time *"
              aria-label="First name"
            />
            <FormControl
              className="mb-3"
              placeholder="Select Type *"
              aria-label="First name"
            />
            <FormControl placeholder="mm/dd/yyyy *" aria-label="First name" />
            <div className="pt-3">
              <FloatingLabel controlId="floatingTextarea2" label="Message *">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <div className="pt-3">
                <Button variant="danger">Book Now</Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ContactUs;
