import React from "react";
import { Row } from "react-bootstrap";
import useServices from "../../hooks/useServices";
import Footer from "../../Shared/Footer/Footer";
import Blog from "../Blog/Blog";
import Header from "../Header/Header";
import "./Blogs.css";
// all blog page show here
const Blogs = () => {
  const [services] = useServices();
  return (
    <>
      <Header></Header>
      <div className="blogs">
        <div>
          <div className="container py-5">
            <div className="all-services text-center mb-5 all">
              <div className="heading-border mb-3">
                <h2 className="blog-heading">Most Popular Blogs</h2>
              </div>
            </div>
            <Row xs={1} md={3} className="g-4">
              {services.slice(12, 18).map((service) => (
                <Blog key={service.id} obj={service}></Blog>
              ))}
            </Row>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Blogs;
