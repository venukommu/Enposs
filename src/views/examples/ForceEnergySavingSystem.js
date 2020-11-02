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
import React from "react";

// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

class ForceEnergySavingSystem extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default bg-gradient-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <h1 className="display-3 text-white">PROJECT PORTFOLIO </h1>
                    <h1 className="display-3 text-white">City of Seymour WWTP</h1>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
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
          <section className="section section-lg">
            <Container>
            <Row className="justify-content-center">
            <Col>
              <Card className="card-profile shadow mt--300">
                <CardBody className="py-5">
                    <img 
                        alt="..."
                        src={require("assets/img/theme/A18040103_10003_0.jpg")}
                    />
                </CardBody>
              </Card>
              </Col>
            </Row>
            <Row className="justify-content-center">
            <Col>
                <img 
                    alt="..."
                    src={require("assets/img/theme/A18040103_10003_1.jpg")}
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
            <Col>
                <img 
                    alt="..."
                    src={require("assets/img/theme/A18040103_10003_2.jpg")}
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
            <Col>
                <img 
                    alt="..."
                    src={require("assets/img/theme/A18040103_10003_3.jpg")}
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
            <Col>
                <img 
                    alt="..."
                    src={require("assets/img/theme/A18040103_10003_4.jpg")}
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
            <Col>
                <img 
                    alt="..."
                    src={require("assets/img/theme/A18040103_10003_5.jpg")}
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
            <Col>
                <img 
                    alt="..."
                    src={require("assets/img/theme/A18040103_10003_6.jpg")}
                />
              </Col>
            </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default ForceEnergySavingSystem;
