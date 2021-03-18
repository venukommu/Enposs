import React from "react";
// nodejs library that concatenates classes
//import classnames from "classnames";
//import { Link } from "react-router-dom";

// reactstrap components
import {
  //Badge,
  Card,
  CardBody,
  //CardImg,
  Container,
  Row,
  Col,
  //Button
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
//import { appConfig } from "services/config.js";

// index page sections

class Force extends React.Component {
  
  state = {
    forcewidgets: [],
    error: null,
  };

  componentDidMount = async () => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;

    /*const parseJSON = resp => (resp.json ? resp.json() : resp);
    const checkStatus = resp => {
      if (resp.status >= 200 && resp.status < 300) {
        return resp;
      }
      return parseJSON(resp).then(resp => {
        throw resp;
      });
    };
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const forcewidgets = await fetch(`${appConfig.apiURL}/forcewidgets`, {
        method: 'GET',
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ forcewidgets });
    } catch (error) {
      this.setState({ error });
    }*/

  };
  
  handleEndReached = () => {
    console.log("load more");
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
              <div className="shape shape-style-1 shape-default"
              style= {{
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: `url(${require('assets/img/theme/force-device-on-wooden-texture-with-layer.jpg')})`
                //backgroundImage:`url(${appConfig.apiURL}${homepageimage.url})`,
               }}>
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
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="8">
                      <div>
                        <h1 className="display-1 text-white text-lead"
                        style={{ textAlign : "left" , fontSize: "48px", fontWeight: "800px", marginTop: "90px" }}>
                          Empowered to save Power</h1>
                        <h3 className="display-4 text-info mt-2" style={{ textAlign : "left" , marginBottom : "90px" }}>
                           Force is a smart, dual-action device which helps both increase the flow of electricity, and absorb any electrical losses.
                        </h3>
                      </div>
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
                  {/*forcewidgets.map(widgets => (
                      <Col lg="4" key={widgets.id}>
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-4">
                            <div className=" rounded-circle mb-4">
                              <img alt="..."
                                className="rounded-circle img-center img-fluid"
                                src={`${appConfig.apiURL}${widgets.images.url}`}
                                style={{ width: "100px" }}/>
                            </div>
                            <h6 className="text-primary text-uppercase">
                              {/*About Company
                              {widgets.Title}
                            </h6>
                            <p className="description mt-3"
                            style={{ textAlign : "justify" }}>
                            {widgets.description}
                            </p>
                          </CardBody>
                        </Card>
                      </Col>
                    ))*/}
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-4">
                          <div className=" rounded-circle mb-2">
                            <img alt="..."
                              className="rounded-circle img-center img-fluid"
                              src={`${require("assets/img/theme/force_1_ceb4e9e6.png")}`}
                              style={{ width: "100px" }}/>
                          </div>
                          <h6 className="text-success text-uppercase text-center">
                          Environmentally Friendly
                          </h6>
                          <p className="description mt-3"
                          style={{ textAlign : "left" }}>
                          Force uses naturally occurring material tourmaline which helps generate anions.
                          It uses eco- friendly technology to save electricity.</p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-4">
                          <div className=" rounded-circle mb-2">
                            <img alt="..."
                              className="rounded-circle img-center img-fluid"
                              src={`${require("assets/img/theme/force_2.128f9e8d.png")}`}
                              style={{ width: "100px" }}/>
                          </div>
                          <h6 className="text-info text-uppercase text-center">
                          Safe
                          </h6>
                          <p className="description mt-3"
                          style={{ textAlign : "left" }}>
                          Force does not require a separate power supply, making it safe to install when the power is off.
                          It's both easy to install and use.</p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-4">
                          <div className=" rounded-circle mb-2">
                            <img alt="..."
                              className="rounded-circle img-center img-fluid"
                              src={`${require("assets/img/theme/force_3.f7979078.png")}`}
                              style={{ width: "100px" }}/>
                          </div>
                          <h6 className="text-primary text-uppercase text-center">
                          Versatile
                          </h6>
                          <p className="description mt-3"
                          style={{ textAlign : "left" }}>
                          Force can make a diference for virtually any use of electricity throughout your property.
                          <br /><br /></p>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section pb-0 bg-gradient-default">
           <Container>
           <Row className="row-grid">
              <Col lg="12">
                <h1 className="display-3 text-white justify-content-center">Features</h1>
              </Col>
            </Row>
            <Row className="row-grid">
              <Col lg="1">
              </Col>  
              <Col lg="2">
                <Card className="card-lift--hover shadow border-0">
                  <CardBody className="py-4 text-center"> 
                    <div className="icon icon-shape icon-shape-danger rounded-circle mb-4 text-dark">
                      1
                    </div>
                      <h6 className="text-dark">
                      Saves electricity by 5-15%<br /><br />
                      </h6>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="2">
                <Card className="card-lift--hover shadow border-0">
                  <CardBody className="py-4 text-center"> 
                    <div className="icon icon-shape icon-shape-darker rounded-circle mb-4 text-dark">
                      2
                    </div>
                      <h6 className="text-dark">
                      Prolongs the life span of your appliances
                      </h6>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="2">
                <Card className="card-lift--hover shadow border-0">
                  <CardBody className="py-4 text-center"> 
                    <div className="icon icon-shape icon-shape-warning rounded-circle mb-4 text-dark">
                      3
                    </div>
                      <h6 className="text-dark">
                      Reduces harmonic distortion<br /><br />
                      </h6>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="2">
                <Card className="card-lift--hover shadow border-0">
                  <CardBody className="py-4 text-center"> 
                    <div className="icon icon-shape icon-shape-primary rounded-circle mb-4 text-dark">
                      4
                    </div>
                      <h6 className="text-dark">
                      Increases conductivity<br /><br /><br />
                      </h6>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="2">
                <Card className="card-lift--hover shadow border-0">
                  <CardBody className="py-4 text-center"> 
                    <div className="icon icon-shape icon-shape-success rounded-circle mb-4 text-dark">
                      5
                    </div>
                      <h6 className="text-dark">
                      Reduces impedance<br /><br /><br />
                      </h6>
                  </CardBody>
                </Card>
              </Col>
             {/*} <Col lg="2">
                <Card className="card-lift--hover shadow border-0">
                  <CardBody className="py-4"> 
                    <div className="icon icon-shape icon-shape-success rounded-circle mb-4 text-dark">
                      6
                    </div>
                      <h6 className="text-dark">
                      Force don't consume any power by itself.
                      </h6>
                  </CardBody>
                </Card>
                  </Col>*/}
              </Row><br /><br />

          </Container>
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
       {/*} <section className="section pb-0 bg-gradient-default">
          <Container >
             <h3 className="text-white">Brilliant Benefits</h3>
              <Row className="row-grid align-items-center">
              <Col className="order-md-1" lg="6">
                  <div className="pr-md-5">
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="primary">
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0 text-white">
                            Eco Friendly</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="danger">
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0 text-white">Highly Safe</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="info">
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0 text-white">
                            Easy to install</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="success">
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0 text-white">
                            Versatile</h6>
                          </div>
                        </div>
                      </li>
                      </ul></div></Col>
                  <Col className="order-md-1" lg="6">
                  <div className="pr-md-5">
                  <ul className="list-unstyled mt-5"> 
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="danger">
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0 text-white">
                            Energy saver</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="success">
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0 text-white">
                            Excellent technology</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="warning">
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0 text-white">
                            Economically viable solution</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="info">
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0 text-white">
                            High reliability</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row><br />
             </Container>*/}
             {/* SVG separator */}
              {/* <div className="separator separator-bottom separator-skew zindex-100">
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
                  </section>*/}
        </main>
        <CardsFooter />
      </>
    );
}
}

export default Force;