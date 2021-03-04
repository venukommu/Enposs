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
import { appConfig } from "services/config.js";

// index page sections

class Forceprinciples extends React.Component {
  
  state = {
    forceprinciple: [],
    forceprincipleimage: [],
    forceprinciplepoints: [],
    error: null,
  };

  componentDidMount = async () => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    //this.refs.main.scrollTop = 0;

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
      const forceprinciple = await fetch(`${appConfig.apiURL}/forceprinciples`, {
        method: 'GET',
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ forceprinciple, forceprincipleimage: forceprinciple.image, forceprinciplepoints: forceprinciple.principlesdata});
    } catch (error) {
      this.setState({ error });
    }

  };
  
  handleEndReached = () => {
    console.log("load more");
  };
  render() {
    const { error, forceprinciple, forceprincipleimage, forceprinciplepoints} = this.state;
console.log(forceprinciple);
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
                //backgroundImage: `url(${require('assets/img/theme/smooth-golden-wave-background_23-2148811073.jpg')})`
                backgroundImage:`url(${appConfig.apiURL}${forceprincipleimage.url})`,
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
                    <Col lg="6">
                      <div><h1 className="display-4 text-white">{/*Saves Electric Energy*/}{forceprinciple.title}</h1>
                      <p className="lead text-white"
                        style={{ textAlign : "justify" }}>
                        {/*Force uses natural material tourmaline It is mixed with substances like magnesium 
                        to produce surplus free electrons called EMF-7.
                        These free electrons reduce electrical losses caused by various factors like heat, 
                        vibration, Impedance,  harmonic distortion etc.*/}
                        {forceprinciple.description}</p>
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
            <section className="section section-lg pt-lg-0 mt--100">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid" >
                    <Col lg="12">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-4">
                          <h6 className="text-warning text-center text-uppercase">
                          {/*Principle of operation*/}{forceprinciple.priciplestitle}
                          </h6>
                          <h6 className="description mt-3 text-center"
                          style={{ textAlign : "justify" }}>
                          {/*It uses minerals with dielectric mine to increase the electrical conductivity of the power system, finally reducing the effective power. (APSIC : Active Power Saving by Increasing Conductivity의 원리)*/}
                          {forceprinciple.principlesdescription}
                          </h6>
                        <Row className="row-grid">
                        {forceprinciplepoints.map(points => 
                          <Col lg="4" key={points.id}>
                          <Card className="card-lift--hover bg-gradient-info shadow border-0">
                          <CardBody> 
                              <h6 className="text-white">
                              <ul>
                                {points.id%3 === 1 ? 
                                  <li>{points}</li>
                                : ""}
                              </ul> 
                              </h6>
                          </CardBody>
                          </Card>
                          </Col>
                          )}  
                        {/*<Col lg="4">
                            <Card className="card-lift--hover bg-gradient-info shadow border-0">
                            <CardBody> 
                                <h6 className="text-white">
                                <ul>
                                    <li>Usage of electricity saved by 5 per cent</li>
                                    <li>Increase surplus electrons by accelerating anion</li>
                                </ul> 
                                </h6>
                            </CardBody>
                            </Card>
                        </Col>
                        <Col lg="4">
                            <Card className="card-lift--hover bg-gradient-info shadow border-0">
                            <CardBody className="py-3"> 
                                <h6 className="text-white">
                                <ul>
                                    <li>Increased surplus electrons in turn emmit the microcurrent.</li>
                                    <li>Improves conductivity by increasing density free electron on connected electric circuit.</li>
                                    <li>Moves surplus electron saturation at the rate of 0.1 to 1mm/second.</li>
                                </ul> 
                                </h6>
                            </CardBody>
                            </Card>
                        </Col>
                        <Col lg="4">
                            <Card className="card-lift--hover bg-gradient-info shadow border-0">
                            <CardBody className="py-3"> 
                                <h6 className="text-white">
                                <ul>
                                    <li>Increased free electrons improves the transfer of electricity</li>
                                    <li>Reduces electric losses</li>
                                    <li>Improves current flow</li>
                                </ul> 
                                </h6>
                            </CardBody>
                            </Card>
                        </Col>*/}
                        </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          </div>
          
        </main>
        <CardsFooter />
      </>
    );
}
}

export default Forceprinciples;