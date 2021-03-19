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

class CardsFooter extends React.Component {
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
    <section className="section pb-0 bg-gradient-default">
            <Container className="pt-lg pb-100">
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
              <Row className="row-grid mt-5 text-center justify-content-center">
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
            {/*SVG separator */}
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
            </div>
          </section>
          <Container>
            <Row className="row-grid align-items-center my-md">
              <Col lg="6">
                <h3 className="text-primary font-weight-light mb-2">
                  Forge ahead with <span className="font-italic text-warning" >FORCE</span>
                </h3>
                <h4 className="mb-0 font-weight-light">
                  Let's get in touch on any of these platforms.
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  //href="https://twitter.com/creativetim"
                  href="#"
                  id="tooltip475038074"
                  //target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-twitter" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip475038074">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  //href="https://www.facebook.com/creativetim"
                  href="#"
                  id="tooltip837440414"
                  //target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="dribbble"
                  //href="https://dribbble.com/creativetim"
                  href="#"
                  id="tooltip829810202"
                  //target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-dribbble" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="github"
                  //href="https://github.com/creativetimofficial"
                  href="#"
                  id="tooltip495507257"
                  //target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Star on Github
                </UncontrolledTooltip>
              </Col>
            </Row>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="https://www.enposs.com"
                    target="_blank"
                  >
                    Enposs Inc
                  </a>
                  .
                </div>
              </Col>
              <Col md="6">
                <Nav className="nav-footer justify-content-end">
                <NavItem>
                    <NavLink
                      //href="https://www.creative-tim.com?ref=adsr-footer"
                      //target="_blank"
                      to="/" tag={Link}
                    >
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      //href="https://www.creative-tim.com?ref=adsr-footer"
                      //target="_blank"
                      to="/ourstory" tag={Link}
                    >
                      About
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      //href="https://www.creative-tim.com/presentation?ref=adsr-footer"
                      //target="_blank"
                      to="/force" tag={Link}
                    >
                      Product
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      //href="http://blog.creative-tim.com?ref=adsr-footer"
                      //target="_blank"
                      to="/clients" tag={Link}
                    >
                      Clients
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      //href="http://blog.creative-tim.com?ref=adsr-footer"
                      //target="_blank"
                      href ={require('assets/img/pdf-reports/thesis.pdf')} type="application/pdf" target="_blank" rel="noopener noreferrer">
                      Thesis
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      //href="https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md"
                      //target="_blank"
                      to="/contact" tag={Link}
                    >
                      Contact Us
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
