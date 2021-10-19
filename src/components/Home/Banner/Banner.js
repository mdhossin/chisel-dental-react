import React from "react";
import { Button, Carousel } from "react-bootstrap";
import "./Banner.css";
import sliderOne from "../../../images/slider/slider1.jpg";
import sliderTwo from "../../../images/slider/slider2.jpg";
import sliderThree from "../../../images/slider/slider3.jpg";
// this is the banner page
const Banner = () => {
  return (
    <div>
      <div className="carousel">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="w-100 slider-img"
              src={sliderOne}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="mx-auto w-75 text-center pb-5 slider-text">
                <span className="d-block text-start">
                  <span>YOUR HEALTH</span>
                </span>
                <h1 className="main-heading text-start">OUR FIRST PRIORITY</h1>
                <h4 className="description">We Serve Better Than Any Other</h4>
                <p>
                  Our team is passionate about helping you achieve optimal
                  Dental Health!!
                </p>

                <Button variant="danger">CALL US TODAY</Button>
                <Button className="ms-2" variant="danger">
                  READ MORE
                </Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src={sliderTwo}
              alt="Second slide"
            />

            <Carousel.Caption>
              <div className="mx-auto w-75 text-center pb-5 slider-text">
                <span className="d-block text-start">
                  <span>REASONABLE</span>
                </span>
                <h1 className="main-heading text-start">AND AFFORDABLE</h1>
                <h4 className="description">Dental Treatments</h4>
                <p>
                  Bringing you a full spectrum of dental services and
                  treatments!!
                </p>

                <Button variant="danger">CALL US TODAY</Button>
                <Button className="ms-2" variant="danger">
                  READ MORE
                </Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src={sliderThree}
              alt="Third slide"
            />

            <Carousel.Caption>
              <div className="mx-auto w-75 text-center pb-5 slider-text">
                <span className="d-block text-start">
                  <span>HIGHLY QUALIFIED</span>
                </span>
                <h1 className="main-heading text-start">EXPERIENCED STAFF</h1>
                <h4 className="description">High Quality Dental Equipment</h4>
                <p>
                  We are concerned for your comfort before, during and after
                  your treatment.!!
                </p>

                <Button variant="danger">CALL US TODAY</Button>
                <Button className="ms-2" variant="danger">
                  READ MORE
                </Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
