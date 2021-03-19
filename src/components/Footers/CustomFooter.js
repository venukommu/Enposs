/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class CustomFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
         {/* <Container className="container-lg">
            <Row>
              <Col className="mb-5 mb-md-0" md="6">
                <Card className="card-lift--hover shadow border-0">
                  <Link to="/landing-page">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/landing.jpg")}
                    />
                  </Link>
                </Card>
              </Col>
              <Col className="mb-5 mb-lg-0" md="6">
                <Card className="card-lift--hover shadow border-0">
                  <Link to="/profile-page">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/profile.jpg")}
                    />
                  </Link>
                </Card>
              </Col>
            </Row>
    </Container>*/}
    <section  className="section pb-0 bg-gradient-default">
            <Container className="pt-lg pb-100 bg-gradient-default">
               {/*}<Row className="text-center justify-content-center">
               <Col lg="10">
                  <h2 className="display-3 text-white">Build something</h2>
                  <p className="lead text-white">
                    According to the National Oceanic and Atmospheric
                    Administration, Ted, Scambos, NSIDClead scentist, puts the
                    potentially record low maximum sea ice extent tihs year down
                    to low ice.
                  </p>
</Col>
              </Row>*/}
              <Row className="row-grid mt-5 text-center justify-content-center  ">
                <Col lg="2">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-settings text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Product</h5>
                  <a href="/force">
                  <p className="text-white mt-3">
                    What is Force?
                  </p></a>
                  <a href="/forceprinciples">
                  <p className="text-white mt-3">
                    Working Principle
                  </p></a>
                  <a href="/benefits">
                  <p className="text-white mt-3">
                    Benefits of Force
                  </p></a>
                </Col>
                <Col lg="2">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-ruler-pencil text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Resources</h5>
                  <p className="text-white mt-3">
                    Manuals
                  </p>
                  <a href="/patents">
                  <p className="text-white mt-3">
                    Patents
                  </p></a>
                  <a href="/certifications">
                  <p className="text-white mt-3">
                    Certifications
                  </p></a>
                </Col>
                <Col lg="2">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="fa fa-industry text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Company</h5>
                  <a href="/ourstory"><p className="text-white mt-3">
                    About Us 
                  </p></a>
                  <a href="/ceomessage">
                  <p className="text-white mt-3">
                    CEO Message
                  </p></a>
                  <a href="/timeline">
                  <p className="text-white mt-3">
                    Timeline
                  </p></a>
                  <a href="/news">
                  <p className="text-white mt-3">
                    News
                  </p></a>
                </Col>
                <Col lg="2">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="fa fa-support text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Support</h5>
                  <a href="/installforce"><p className="text-white mt-3">
                    How to install Force
                  </p></a>
                  <a href="#">
                  <p className="text-white mt-3">
                    FAQ
                  </p></a>
                  <a href="/#">
                  <p className="text-white mt-3">
                    Q&A
                  </p></a>
                  <a href="/contact">
                  <p className="text-white mt-3">
                    Inquiry
                  </p></a>
                </Col>
              </Row>
            </Container>
            {/*SVG separator 
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>*/}
          </section>
         
        </footer>
      </>
    );
  }
}

export default CustomFooter;
