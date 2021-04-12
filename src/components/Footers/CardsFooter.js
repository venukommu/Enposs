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
          <Container>
            <Row className="row-grid align-items-center my-md">
              <Col lg="6">
                <h3 className="text-dark text-lead mb-2" style={{fontSize: "28px", fontWeight: "800px"}}>
                  {/*Forge ahead with <span className="font-italic text-warning text-lead">FORCE</span>*/}
                  Progress towards better tomorrow, Follow <span className="text-warning">Enposs</span> to progress together.
                </h3>
               {/*} <h4 className="mb-0 font-weight-light">
                  Let's get in touch on any of these platforms.
                </h4>*/}
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="4">
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href="https://twitter.com/Enposs1"
                  id="tooltip475038074"
                  target="_blank"
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
                  href="https://www.facebook.com/ForceGlobal/"
                  id="tooltip837440414"
                  target="_blank"
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
                  href="https://www.instagram.com/enposs_power.saving/"
                  id="tooltip829810202"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-instagram" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="linkedin"
                  //href="https://github.com/creativetimofficial"
                  href="#"
                  id="tooltip495507257"
                  //target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-linkedin" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Follow us
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
                      to="/" tag={Link} onClick={() => {window.location.href="/"}}
                    >
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      //href="https://www.creative-tim.com?ref=adsr-footer"
                      //target="_blank"
                      to="/ourstory" tag={Link} onClick={() => {window.location.href="/ourstory"}}
                    >
                      About
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      //href="https://www.creative-tim.com/presentation?ref=adsr-footer"
                      //target="_blank"
                      to="/force" tag={Link} onClick={() => {window.location.href="/force"}}
                    >
                      Product
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      //href="http://blog.creative-tim.com?ref=adsr-footer"
                      //target="_blank"
                      to="/clients" tag={Link}  onClick={() => {window.location.href="/clients"}}
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
                      to="/contact" tag={Link} onClick={() => {window.location.href="/contact"}}
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
