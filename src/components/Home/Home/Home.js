import React from "react";
import Footer from "../../Shared/Footer/Footer";
import AboutClinic from "../AboutClinic/AboutClinic";
import Achieved from "../Achieved/Achieved";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import OurTeam from "../OurTeam/OurTeam";
import Services from "../Services/Services";
// this is the main home page
const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <AboutClinic></AboutClinic>
      <Services></Services>
      <OurTeam></OurTeam>
      <Achieved></Achieved>

      <Footer></Footer>
    </div>
  );
};

export default Home;
