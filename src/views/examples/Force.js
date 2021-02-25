import React from "react";
// nodejs library that concatenates classes
//import classnames from "classnames";
//import { Link } from "react-router-dom";

// reactstrap components
import {
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
import { appConfig } from "services/config.js";

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

    const parseJSON = resp => (resp.json ? resp.json() : resp);
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
    }

  };
  
  render() {
    const { error,forcewidgets} = this.state;

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
                  {forcewidgets.map(widgets => (
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
                              {/*About Company*/}
                              {widgets.Title}
                            </h6>
                            <p className="description mt-3"
                            style={{ textAlign : "justify" }}>
                            {widgets.description}
                            </p>
                          </CardBody>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-shaped">
           <Container>
           <Row className="row-grid">
              <Col lg="12">
                <h1 className="display-3 text-dark justify-content-center">Features of force</h1>
              </Col>
            </Row>
            <Row className="row-grid">
              <Col lg="2">
                <Card className="card-lift--hover bg-gradient-danger shadow border-0">
                  <CardBody className="py-3"> 
                    <div className="icon icon-shape icon-shape-danger rounded-circle mb-4 text-white">
                      1
                    </div>
                      <p className="description mt-3 text-white">
                      Usage of electricity saved by 5 per cent
                      </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="2">
                <Card className="card-lift--hover bg-gradient-info shadow border-0">
                  <CardBody className="py-4"> 
                    <div className="icon icon-shape icon-shape-info rounded-circle mb-4 text-white">
                      2
                    </div>
                      <p className="description mt-3 text-white">
                      Reduces Impedance
                      </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="2">
                <Card className="card-lift--hover bg-gradient-warning shadow border-0">
                  <CardBody className="py-4"> 
                    <div className="icon icon-shape icon-shape-warning rounded-circle mb-4 text-white">
                      3
                    </div>
                      <p className="description mt-3 text-white">
                      Reduces harmonic distortion
                      </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="2">
                <Card className="card-lift--hover bg-gradient-primary shadow border-0">
                  <CardBody className="py-4"> 
                    <div className="icon icon-shape icon-shape-primary rounded-circle mb-4 text-white">
                      4
                    </div>
                      <p className="description mt-3 text-white">
                      Increases conductivity
                      </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="2">
                <Card className="card-lift--hover bg-gradient-success shadow border-0">
                  <CardBody className="py-4"> 
                    <div className="icon icon-shape icon-shape-success rounded-circle mb-4 text-white">
                      5
                    </div>
                      <p className="description mt-3 text-white">
                      Extends life cycle
                      </p>
                  </CardBody>
                </Card>
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