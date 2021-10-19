import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
// shared footer page
const Footer = () => {
  return (
    <div className="background-footer">
      <div className=" container pt-5">
        <Row>
          <Col xs={6} md={3}>
            <h4>CHISEL DENTAL</h4>
            <p className="d-flex">
              <span className="phone-icon">
                <FontAwesomeIcon className="footer-icon" icon={faPhone} />
              </span>
              <span>(00) 123 456 789</span>
            </p>
            <p className="d-flex">
              <span className="phone-icon">
                <FontAwesomeIcon className="footer-icon" icon={faEnvelope} />
              </span>
              <span>chiseldental@gmail.com</span>
            </p>
            <div className="d-flex">
              <div className="icon instagram">
                <FontAwesomeIcon icon={faInstagramSquare} />
              </div>
              <div className="icon twitter ms-2">
                <FontAwesomeIcon icon={faTwitterSquare} />
              </div>
              <div className="icon youtube ms-2">
                <FontAwesomeIcon icon={faYoutube} />
              </div>
              <div className="icon facebook ms-2">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </div>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <h4>DIRECT LINKS</h4>
            <p>About Us</p>
            <p>Blog</p>
            <p>Contact</p>
            <p>Testmoinals</p>
          </Col>
          <Col xs={6} md={3}>
            <h4>LINKS</h4>
            <p>Serivces</p>
            <p>Events</p>
            <p>Gallery</p>
            <p>FAQs</p>
          </Col>
          <Col xs={6} md={3}>
            <h4>SERVICES</h4>
            <p>Periodontics and Implantology</p>
            <p>Oral and Maxillofacial Surgery</p>
            <p>Orthodontics and Dentofacial Orthopaedics</p>
            <p>Laser Dentistry</p>
          </Col>
        </Row>
        <div>
          <p
            style={{
              textAlign: "center",
              marginTop: "40px",
              paddingBottom: "20px",
              color: "#999999",
            }}
          >
            2021 All Rights Reserved by &copy; CHISEL DENTAL
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
