import React from "react";
import { Col, Row } from "react-bootstrap";
import doctorOne from "../../../images/ourteam/doctor-1.jpg";
import doctorTwo from "../../../images/ourteam/doctor-2.jpeg";
import "./OurTeam.css";
// our team page
const OurTeam = () => {
  return (
    <div className="container">
      <div className="team-heading text-center all">
        <div className="heading-border mb-4">
          <h2>Our Elite Team</h2>
        </div>
        <p className="mb-5">
          Our team dedicatedly works towards a common vision and attain a common
          objective, which is to satisfy our customers and provide them with a
          happy and healthy life.
        </p>
      </div>
      <div>
        <Row>
          <Col xs={12} md={6}>
            <Row>
              <Col xs={12} md={4}>
                <div className="team-img">
                  <img className="img-fluid" src={doctorOne} alt="" />
                </div>
              </Col>
              <Col xs={12} md={8}>
                <h3 className="team-detail">Dr. Nilay Bhatia</h3>
                <h6 className="team-sub-title">
                  BDS, PGAD (Manipal) <br /> Asthetic Dentist
                </h6>
                <p>
                  Dr. Nilay Bhatia is the Director and Principal dentist in
                  Gurgaon at Cosmodontist Dental Clinic. A BDS, PGAD from
                  Manipal is a proficient dentist having years of experience.
                  The advancement in dentistry over the years now has only made
                  the treatments more efficient and Dr. Bhatia thoroughly
                  believes in the use modern techniques and quality materials.
                  So book your dental check-up with the most acknowledged and
                  best dentist in Gurgaon.
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <Row>
              <Col xs={12} md={4}>
                <div className="team-img team-girl">
                  <img className="img-fluid" src={doctorTwo} alt="" />
                </div>
              </Col>
              <Col xs={12} md={8}>
                <h3 className="team-detail">Dr. Vidushi Mayor</h3>
                <h6 className="team-sub-title">
                  BDS, MDS (Prosthodontist) <br /> Implantologist
                </h6>
                <p>
                  Dr. Vidushi Mayor, one of the finest dentists in Gurgaon
                  started her journey of dentistry in 2006 as she graduated from
                  ITS dental college and hospital, Ghaziabad and completed her
                  graduation in 2010. After her internship, she continued to do
                  her <b>Masters in Prosthodontics and Implantology </b> from
                  one of the most prestigious colleges of India, JSS dental
                  college and hospital, Mysore.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OurTeam;
