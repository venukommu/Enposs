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
  Button,
  //UncontrolledCarousel,
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
              <div className="shape shape-style-1 shape-default bg-gradient-indigo"
             >
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
                    <h1 className="display-1 text-white text-lead"
                        style={{ textAlign : "left" , fontSize: "48px", fontWeight: "800px", marginTop: "90px" }}>Smart power saving, by increasing conductivity and absorbing energy loss</h1>
                      <h3 className="display-4 text-info"
                        style={{ textAlign : "left" , marginBottom: "60px" }}>
                        {/*FORCE effectively reduces power consumption by using the principle of APSIC acronym for Active Power Saving by Increasing Conductivity.
                        It employs nanotechnology to achieve dual benefit of adding electricity  and absorbing electrical losses.*/}
                       {/*Force operates on the principle of APSIC. Using natural tourmaline, a nanotechnology material to add free electrons to the circuit enhancing conductivity and absorbing various electrical losses, giving you the best of both worlds.*/}
                        The dual-action of FORCE both improves the flow of your electrical current and absorbs your energy loss, giving you two reasons it's good for your home.
                       </h3>
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
            <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid" >
                    <Col lg="12">
                      <Card className="shadow border-0">
                        <CardBody className="py-4">
                        <h4 className="display-3 font-weight-bold text-primary">
                            Working Principle
                          </h4>
                          <p 
                          style={{ textAlign : "left" }}>
                          {/*Force uses minerals with tourmaline to increase conductivity of the power system, thereby reducing the effective power used.
                          APSIC - Active Power saving by increasing conductivity.
                          Tourmaline mixed with magnesium and the likes, produces Electromagnetic Flux,EMF 7 which emits subtle current. EMF 6 is produced ionization and electrification of copper plates.
                          The double benefit is it absorbs all the losses by offsetting impedance, harmonic high low frequency, reactance etc.
                          Force utilizes Electromagnetic Flux called  EMF7.
                          which  is obtained by mixing nanoparticles of naturally occurring mineral ,tourmaline and other minerals. It acts by increasing electrical conductivity and reduces heat, noise, vibration and anything that negatively impacts the flow of electricity Thereby maximizing the power saving capacity by the system. */}
                          FORCE is a smart, dual-action device which actively saves power by increasing conductivity. First, it uses tourmaline and adds free electrons to the circuit. Second, it absorbs anything that causes loss of electricity (like heat and harmonic distortion, etc.)<br /> <br />

                          When nanoparticles of Tourmaline are mixed with other minerals, like magnesium, they produce Electromagnetic Flux (EMF 7), which emits (?)subtle current. Key activity is by EMF-7

                          (?)EMF 6 is produced by ionization and electrification of copper plates. <br /> <br />

                          (?)The subtle current released by Force, flows into the power line and increases the density of electrons, thereby improving current flow.

                          (?)It also has the capacity to absorb the losses by offsetting impedance, harmonic high low frequency, reactance, heat etc.

                          (?)These dual actions increase current flow and reduce power consumption. </p><br /><br />
                          <Row className="justify-content-center">
                          <Col lg="8">
                          <CardImg
                            alt="..."
                            src={require("assets/img/theme/1.PNG")}
                            //src={`${appConfig.apiURL}${productimage.url}`}
                            top
                          /></Col></Row>
                          {/*<Row className="justify-content-center">
                          <Col lg="12">
                        <UncontrolledCarousel items={items} /></Col></Row>*/}
                        </CardBody>
                        <Button className="text-center" href ={require('assets/img/pdf-reports/PresentationMaterial.pdf')} type="application/pdf" target="_blank" title="Click to Read More" rel="noopener noreferrer">Read More</Button>
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
                  <Card className="bg-gradient-indigo shadow border-0">
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
                  <Card className="bg-gradient-indigo shadow border-0">
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
                  <Card className="bg-gradient-indigo shadow border-0">
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