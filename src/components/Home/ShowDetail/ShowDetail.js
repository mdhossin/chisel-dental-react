import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Footer from "../../Shared/Footer/Footer";
import Header from "../Header/Header";
import "./ShowDetail.css";
// show service detail page
const ShowDetail = () => {
  let { name } = useParams();
  const [data, setData] = useState([]);
  const [service, setService] = useState({});

  //  data load howa
  useEffect(() => {
    fetch("https://mdhossin.github.io/dentaldata/dentaldata.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // when the data set on the state after that call this
  useEffect(() => {
    const foundEmployee = data.find((service) => service.name === name);
    setService(foundEmployee);
  }, [data]);

  return (
    <>
      <Header></Header>
      <div className="container my-5">
        <Row>
          <Col xs={12} md={6}>
            <img className="img-fluid detail-img" src={service?.img} alt="" />
          </Col>
          <Col xs={12} md={6}>
            <div className="title-card">
              <div className="heading-border mb-3">
                <h3 className="detail-heading">{service?.name}</h3>
              </div>
            </div>
            <p>{service?.description}</p>
            <p>{service?.extra}</p>
          </Col>
        </Row>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ShowDetail;
