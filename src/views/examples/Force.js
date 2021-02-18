import React from "react";
// nodejs library that concatenates classes
//import classnames from "classnames";
//import { Link } from "react-router-dom";

// reactstrap components
import {
  Card,
  CardBody,
  CardImg,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections

class Force extends React.Component {
  
  state = {
    force: [],
    error: null,
  };

  componentDidMount = async () => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;

  };
  
  render() {
    const { error} = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
              {/*style= {{
                backgroundPosition: "center",
                backgroundImage:`url(${appConfig.apiURL}${homepageimage.url})`,
               }}>*/}
                <span />
                <span />
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
                      <h1 className="display-3 text-white">What is FORCE ?</h1>
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
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className=" rounded-circle mb-4">
                            <img alt="..."
                              className="img-center img-fluid"
                                src={require("assets/img/theme/force_1_ceb4e9e6.png")}/>
                          </div>
                          <div>
                            <h6 className="text-primary text-uppercase">
                            Environment Friendly
                            </h6>
                            <p className="description mt-3"
                            style={{ textAlign : "justify" }}>
                            Force is a product made out of tourmaline 
                            as the main material that generates anion 
                            semi-permanently, applied the best 
                            environmental technology, and saves 
                            electric energy by improving 
                            the efficiency of the electric system.
                            </p>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <div className=" rounded-circle mb-4">
                            <img alt="..."
                              className="img-center img-fluid"
                                src={require("assets/img/theme/force_2.128f9e8d.png")}/>
                          </div>
                          <div>
                            <h6 className="text-primary text-uppercase">
                            Very high in safety
                            </h6>
                            <p className="description mt-3"
                            style={{ textAlign : "justify" }}>
                            The force is a non-current device 
                            that does not require a separate power supply, 
                            which is very high in safety and easy to install.

                            </p>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <div className=" rounded-circle mb-4">
                            <img alt="..."
                              className="img-center img-fluid"
                                src={require("assets/img/theme/force_3.f7979078.png")}/>
                          </div>
                          <div>
                            <h6 className="text-primary text-uppercase">
                            Apply multi load
                            </h6>
                            <p className="description mt-3"
                            style={{ textAlign : "justify" }}>
                            Force can be applied anywhere power is used, 
                            from manufacturing plant to ship, office building 
                            to the apartment, single phase, three phase, 
                            and high voltage(6,000V or less) and low voltage.

                            </p>
                          </div>
                        </CardBody>
                      </Card>
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

export default Force;