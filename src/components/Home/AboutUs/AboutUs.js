import React from "react";
import About from "./About/About";
import Header from "../../Home/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import Vision from "./Vision/Vision";
// render some pages here to fulfil about us page
const AboutUs = () => {
  return (
    <>
      <Header></Header>
      <About></About>
      <Vision></Vision>
      <Footer></Footer>
    </>
  );
};

export default AboutUs;
