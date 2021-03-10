import React from "react";
// nodejs library that concatenates classes
//import classnames from "classnames";
//import { Link } from "react-router-dom";

// reactstrap components
import {
  //Badge,
  Card,
  CardBody,
  CardImg,
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

class Forceprinciples extends React.Component {
  
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
              <div className="shape shape-style-1 bg-gradient-purple shape-default">
              {/*style= {{
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: `url(${require('assets/img/theme/smooth-golden-wave-background_23-2148811073.jpg')})`
                //backgroundImage:`url(${appConfig.apiURL}${homepageimage.url})`,
               }}*/}
              
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
                      <div></div><h1 className="display-2 text-white" style={{ textAlign : "left" }}>Saves Electric Energy</h1><br></br>
                      <h4 className="display-4 text-white"
                        style={{ textAlign : "left" }}>
                        Force uses natural material tourmaline.It is mixed with substances like magnesium 
                        to produce surplus free electrons called EMF-7.
                        These free electrons reduce electrical losses caused by various factors like heat, 
                        vibration, Impedance,  harmonic distortion etc.</h4>
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
                      <Card className="shadow border-0">
                        <CardBody className="py-4">
                          <h6 className="text-dark display-4 text-center text-uppercase">
                            Working Principle
                          </h6>
                          <h6 className="description mt-3 text-center text-dark display-4"
                          style={{ textAlign : "justify" }}>
                          Force uses minerals with tourmaline to increase conductivity of the power system, thereby reducing the effective power used.<br/>
                          APSIC - Active Power saving by increasing conductivity.<br/> 
                          Tourmaline mixed with magnesium and the likes , produces Electromagnetic Flux , EMF 7 which emits subtle current . EMF 6 is produced ionization and electrification of copper plates.<br/>
                          The double benefit is it absorbs all the losses by offsetting impedance,  harmonic high low frequency,  reactance etc.
                          </h6>
                          <a href ={require('assets/img/pdf-reports/PresentationMaterial.pdf')} type="application/pdf" target="_blank" title="Click to Read More" rel="noopener noreferrer">
                          <CardImg
                            alt="..."
                            src={require("assets/img/theme/workingprinciple.jpg")}
                            //src={`${appConfig.apiURL}${productimage.url}`}
                            top
                          />
                          </a>
        
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section>
            <Container>
              <Row className="row-grid">
              <Col lg="4">
                  <Card className="bg-gradient-purple shadow border-0">
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
                  <Card className="bg-gradient-purple shadow border-0">
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
                  <Card className="bg-gradient-purple shadow border-0">
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