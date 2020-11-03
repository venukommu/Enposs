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
import { Card, CardBody,Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";


class Download extends React.Component {
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
          <section className="section-profile-cover section-shaped">
            {/* Circles background */}
            <div className="shape shape-style-1 bg-gradient-success shadow-lg alpha-4">
              
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
                    <h1 className="display-3 text-white"> DOWNLOAD  </h1>
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
          {/*<section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="text-center mt-5">
                      <h1>Project Portfolio </h1>
                    </Col>
                  </Row>
                      <div className="card-profile-image">
                        
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/team-4-800x800.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="mr-4"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Connect
                        </Button>
                        <Button
                          className="float-right"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Message
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
             
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <img
                            alt="..."
                            style={{objectFit: "cover"}}
                            src={require("assets/img/theme/A18040103_10004_0.jpg")}
                          />
                        </CardBody>
                        </Card>
                        </Col>
                    
                        </Row>
                  <div className="text-center mt-5">
                      
                    <h3>
                      Jessica Jones{" "}
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Bucharest, Romania
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                          An artist of considerable range, Ryan — the name taken
                          by Melbourne-raised, Brooklyn-based Nick Murphy —
                          writes, performs and records all of his own music,
                          giving it a warm, intimate feel with a solid groove
                          structure. An artist of considerable range.
                        </p>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Show more
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>*/}
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                <Row className="row-grid"><h4 className="text-white">1.Certificate</h4></Row>
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <a href ={require('assets/img/pdf-reports/u03_1-1.pdf')} type="application/pdf" rel="noopener noreferrer" target="_blank" >
                        <img
                            alt="..."
                            style={{objectFit: "cover", width: "100%"}}
                            src={require("assets/img/theme/u03_1-1.jpg")}
                          />
                        </a>
                        </CardBody>
                      </Card>
                      <label>UL Approval Letter</label>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <a href ={require('assets/img/pdf-reports/u03_1-2.pdf')} type="application/pdf" target="_blank" rel="noopener noreferrer">
                        <img
                            alt="..."
                            style={{objectFit: "cover", width: "100%"}}
                            src={require("assets/img/theme/u03_1-2.jpg")}
                          />
                          </a>
                        </CardBody>
                      </Card>
                      <label>Certification & Test Report</label>
                    </Col>
                </Row>
                <Row className="row-grid"><h4>2.Patent</h4></Row>
                <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <a href ={require('assets/img/pdf-reports/u03_2-1.pdf')} type="application/pdf" target="_blank" rel="noopener noreferrer">
                        <img
                            alt="..."
                            style={{objectFit: "cover", width: "100%"}}
                            src={require("assets/img/theme/u03_2-1.jpg")}
                          />
                          </a>
                        </CardBody>
                      </Card>
                      <label>US Patent</label>
                    </Col>
                </Row>
                <Row className="row-grid"><h4>3.Comparative Report</h4></Row>
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <a href ={require('assets/img/pdf-reports/u03_3-1.pdf')} type="application/pdf" target="_blank" rel="noopener noreferrer">
                        <img
                            alt="..."
                            style={{objectFit: "cover", width: "100%"}}
                            src={require("assets/img/theme/u03_3-1.jpg")}
                          />
                          </a>
                        </CardBody>
                      </Card>
                      <label>Comparative Report</label>
                    </Col>
                  </Row>
                  <Row className="row-grid"><h4>4.Installation Method</h4></Row>
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <a href ={require('assets/img/pdf-reports/u03_4-1.pdf')} type="application/pdf" target="_blank" rel="noopener noreferrer">
                        <img
                            alt="..."
                            style={{objectFit: "cover", width: "100%"}}
                            src={require("assets/img/theme/u03_4-1.jpg")}
                          />
                          </a>
                        </CardBody>
                      </Card>
                      <label>Installation Method</label>
                    </Col>
                  </Row>
                  <Row className="row-grid"><h4>5.Power Saving Device Mechanism</h4></Row>
                    <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <a href ={require('assets/img/pdf-reports/u03_5-1.pdf')} type="application/pdf" target="_blank" rel="noopener noreferrer">
                        <img
                            alt="..."
                            style={{objectFit: "cover", width: "100%"}}
                            src={require("assets/img/theme/u03_5-1.png")}
                          />
                          </a>
                        </CardBody>
                      </Card>
                      <label>Power Saving Device Mechanism</label>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <a href ={require('assets/img/pdf-reports/u03_5-2.pdf')} type="application/pdf" target="_blank" rel="noopener noreferrer">
                        <img
                            alt="..."
                            style={{objectFit: "cover", width: "100%"}}
                            src={require("assets/img/theme/u03_5-2.png")}
                          />
                          </a>
                        </CardBody>
                      </Card>
                      <label>Power Saving Device Mechanism</label>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <a href ={require('assets/img/pdf-reports/u03_5-3.pdf')} type="application/pdf" target="_blank" rel="noopener noreferrer">
                        <img
                            alt="..."
                            style={{objectFit: "cover", width: "100%"}}
                            src={require("assets/img/theme/u03_5-3.png")}
                          />
                          </a>
                        </CardBody>
                      </Card>
                      <label>Power Saving Device Mechanism</label>
                    </Col>
                    </Row>
                    <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <a href ={require('assets/img/pdf-reports/u03_5-4.pdf')} type="application/pdf" target="_blank" rel="noopener noreferrer">
                        <img
                            alt="..."
                            style={{objectFit: "cover", width: "100%"}}
                            src={require("assets/img/theme/u03_5-4.png")}
                          />
                          </a>
                        </CardBody>
                      </Card>
                      <label>Power Saving Device Mechanism</label>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <a href ={require('assets/img/pdf-reports/u03_5-5.pdf')} type="application/pdf" target="_blank" rel="noopener noreferrer">
                        <img
                            alt="..."
                            style={{objectFit: "cover", width: "100%"}}
                            src={require("assets/img/theme/u03_5-5.png")}
                          />
                          </a>
                        </CardBody>
                      </Card>
                      <label>Power Saving Device Mechanism</label>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <a href ={require('assets/img/pdf-reports/u03_5-6.pdf')} type="application/pdf" target="_blank" rel="noopener noreferrer">
                        <img
                            alt="..."
                            style={{objectFit: "cover", width: "100%"}}
                            src={require("assets/img/theme/u03_5-6.png")}
                          />
                          </a>
                        </CardBody>
                      </Card>
                      <label>Power Saving Device Mechanism</label>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Download;
