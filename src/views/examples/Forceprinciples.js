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
import { appConfig } from "services/config.js";
import ReactMarkdown from "react-markdown";
//import Background from 'assets/img/theme/265442.jpg';

// index page sections
class Forceprinciples extends React.Component {
  
  state = {
    forceprinciple: [],
    forceprincipleimage: [],
    mainpoints: [],
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
      const forceprinciple = await fetch(`${appConfig.apiURL}/forceprinciples`, {
        method: 'GET',
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ forceprinciple,mainpoints: forceprinciple.mainpointsarray.mainpoints, forceprincipleimage: forceprinciple.image });
    } catch (error) {
      this.setState({ error });
    }

  };
  
  handleEndReached = () => {
    console.log("load more");
  };
  render() {
    const { error,forceprinciple, mainpoints, forceprincipleimage} = this.state;

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
              <div className="shape"
               style= {{
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                //backgroundImage: `url("${Background}")`,
                //backgroundImage: `url(${require('assets/img/theme/main1.jpg')})`
                backgroundImage:`url("${forceprincipleimage.url}")`,
               }}
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
                    <Col lg="7">
                    <h1 className="display-1 text-white text-lead"
                        style={{ textAlign : "left" ,fontFamily: "Noto Sans JP", fontSize: "48px", fontWeight: "900", marginTop: "90px" , lineHeight: "125%" }}>
                          {/*Active Power Saving by Increasing Conductivity (APSIC)*/}{forceprinciple.Title}</h1><br />
                      <h3 className="display-4 text-info"
                        style={{ textAlign : "left" , marginBottom: "60px" }}>
                        {/*Force operates on the principle of APSIC.FORCE effectively reduces power consumption by using the principle of APSIC acronym for Active Power Saving by Increasing Conductivity.
                        It employs nanotechnology to achieve dual benefit of adding electricity  and absorbing electrical losses.
                        Force operates on the principle of APSIC. Using natural tourmaline, a nanotechnology material to add free electrons to the circuit enhancing conductivity and absorbing various electrical losses, giving you the best of both worlds.*/}
                        {/*FORCE operates on the principle of APSIC. Using tourmaline nano-particles, FORCE improves the flow of electricial current and absorbs energy losses.This dual action gives you energy efficient smart homes.*/}{forceprinciple.subtitle}</h3>
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
                            {/*Working Principle*/}{forceprinciple.heading}
                          </h4>
                          <span 
                          style={{ textAlign : "left" }}>
                          {/*Force uses minerals with tourmaline to increase conductivity of the power system, thereby reducing the effective power used.
                          APSIC - Active Power saving by increasing conductivity.
                          Tourmaline mixed with magnesium and the likes, produces Electromagnetic Flux,EMF 7 which emits subtle current. EMF 6 is produced ionization and electrification of copper plates.
                          The double benefit is it absorbs all the losses by offsetting impedance, harmonic high low frequency, reactance etc.
                          Force utilizes Electromagnetic Flux called  EMF7.
                          which  is obtained by mixing nanoparticles of naturally occurring mineral ,tourmaline and other minerals. It acts by increasing electrical conductivity and reduces heat, noise, vibration and anything that negatively impacts the flow of electricity Thereby maximizing the power saving capacity by the system. 
                          FORCE is a smart, dual-action device which actively saves power by increasing conductivity. First, it uses tourmaline and adds free electrons to the circuit. Second, it absorbs anything that causes loss of electricity (like heat and harmonic distortion, etc.)<br /> <br />


                          When nanoparticles of Tourmaline are mixed with other minerals, like magnesium, they produce an Electromagnetic Flux (EMF-7), which emits a subtle current. The key activity of the device is performed by EMF-7, as it emits electro magnetic electrons. The subtle current released by FORCE flows into the power line and increases the density of electrons, thereby improving current flow.<br /><br />
                          
                          At the same time, EMF 6 is produced by ionisation and electrification of copper plates –– which helps generate micro-electrons in the device. This means that the device also has the capacity to absorb energy losses by offsetting the negative effects of impedance, high or low harmonic frequencies, reactance, heat, etc.<br /><br />

                          This dual action, due to the two kinds of EMF produced by the FORCE device, helps increase the electron density –– and thereby improves current flow and reduces power consumption.<br /><br />*/}
                          {/*FORCE is a very smart, dual-action device which actively saves electric power by increasing conductivity. First, it improves the quality of electricity. Second, it saves electric power consumption by supplying excess free electrons on the object circuit.<br /><br />

                          EMF-7 in union with Tourmaline nanoparticles, and other materials will produce free electrons by the unionised reaction.The sub-tie current generated by excess free-electrons, flows into the connected target circuit, and increases the density of electrons in the circuit, thereby improving current flow. It can absorb the losses by offsetting impedance, harmonic distortion, high and low frequency, and heat, etc…<br /><br />

                          In other words, FORCE will improve the current flow and reduces electric power consumption.*/}
                          <ReactMarkdown source={forceprinciple.description} />
                          </span>
                          <Row className="justify-content-center">
                          <Col lg="8">
                          <CardImg
                            alt="..."
                            src={require("assets/img/theme/force.PNG")}
                            //src={`${appConfig.apiURL}${productimage.url}`}
                            top
                          /></Col></Row>
                          {/*<Row className="justify-content-center">
                          <Col lg="12">
                        <UncontrolledCarousel items={items} /></Col></Row>*/}
                        </CardBody>
                        <Button className="text-center" href ={require('assets/img/pdf-reports/ENPOSSCompanyprofile.pdf')} type="application/pdf" target="_blank" title="Click to Read More" rel="noopener noreferrer">Read More</Button>
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
              {mainpoints.map(mainpoint => (
              <Col lg="6" key={mainpoint.id}>
                  <Card className="bg-gradient-gray-dark shadow border-0">
                  <CardBody> 
                      <h6 className="text-white">
                        <ReactMarkdown source={mainpoint.description} />
                      {/*<ul>
                          <li>Usage of electricity saved by 5 per cent</li>
                          <li>Increase surplus electrons by accelerating anion</li>
                      </ul>*/} 
                      </h6>
                  </CardBody>
                  </Card>
              </Col>
              ))}  
              {/*<Col lg="6">
                  <Card className="bg-gradient-gray-dark shadow border-0">
                  <CardBody> 
                      <h6 className="text-white">
                      <ul>
                          <li>Increases surplus electrons by accelerating anions.</li>
                          <li>Surplus electrons in turn emit the micro-current.</li>
                          <li>Moves surplus electrons at the rate of 0.1 to 1mm/second.</li>
                      </ul> 
                      </h6>
                  </CardBody>
                  </Card>
              </Col>
              <Col lg="6">
                  <Card className="bg-gradient-gray-dark shadow border-0">
                  <CardBody className="py-3"> 
                      <h6 className="text-white">
                      <ul>
                          <li>Improves conductivity by increasing the density of free electrons on the connected electrical circuit.</li>
                          <li>More free electrons improve the transfer of electricity and reduce energy loss.</li>
                          <li>Results in better current flow throughout the electrical circuit.</li>
                      </ul> 
                      </h6>
                  </CardBody>
                  </Card>
                </Col>*/}
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