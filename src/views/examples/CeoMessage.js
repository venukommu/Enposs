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
//import { appConfig } from "services/config.js";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import ShowMoreText from 'react-show-more-text';
import Background from 'assets/img/theme/two-polar-bears-background-Recovered.jpg';

class CeoMessage extends React.Component {
  executeOnClick(isExpanded) {
    console.log(isExpanded);
}
  state = {
    aboutcompany: [],
    ceomessage: [],
    error: null,
    bannerimage: [],
    productimage: []
 }
 componentDidMount = async () => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    //this.refs.main.scrollTop = 0;
    /*const parseJSON = resp => (resp.json ? resp.json() : resp);

    // Checks if a network request came back fine, and throws an error if not
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
      const aboutcompany = await fetch(`${appConfig.apiURL}/aboutcompany`, {
        method: 'GET',
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ aboutcompany,bannerimage:aboutcompany.bannerimage,productimage:aboutcompany.productimage });
    } catch (error) {
      this.setState({ error });
    }

    try {
      const ceomessage = await fetch(`${appConfig.apiURL}/ceomessage`, {
        method: 'GET',
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ ceomessage });
    } catch (error) {
      this.setState({ error });
    }*/
    
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
        <main className="profile-page" ref="main">
        <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
            <div className="shape shape-style-1 shape-default"
              style= {{
                backgroundPosition: "center",
                backgroundImage: `url("${Background}")`,
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
                    {/*< ProductList />*/}
                      <div>
                        <h1 className="display-3 text-white">
                        {/*ENPOSS Inc {" "}*/}
                        </h1>
                        <h1 className="display-3 text-white" style={{ textAlign : "left" }}>
                        Be the FORCE that protects the planet</h1><br />
                        <h4 className="display-5  text-white"
                          style={{ textAlign : "left" }}>
                          Force reduces the use of electricity. So less fuel is used in producing it. This helps reduce carbon emission, global warming and melting of glaciers. Thus FORCE has a dynamic role in balancing our ecology and human survival.
                        </h4>
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
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--200">
                <div className="px-4">
                  <Row className="justify-content-center">
                    {/*<Col className="order-lg-2" lg="3">
                     <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                        {productimage.map((val,index) => (
                          <img key={index}
                            alt="..."
                            className="rectangle-circle"
                              src={`${appConfig.apiURL}${val.url}`}
                            />
                            ))}
                        </a>
                        </div>
                        </Col>*/}
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                       {/*<div className="card-profile-actions py-4 mt-lg-0">
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
                      </div>*/}
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      {/*<div className="card-profile-stats d-flex justify-content-center">
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
              </div>*/}
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                    CEO Greetings {" "}
                      <span className="font-weight-light"></span>
                    </h3>
                    {/*<div className="h6 font-weight-300">
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
            </div>*/}
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p style={{ textAlign : "left"}}>
                          <ShowMoreText
                          /* Default options */
                          lines={5}
                          more='Show more'
                          less='Show less'
                          className='content-css'
                          anchorClass='my-anchor-css-class'
                          onClick={this.executeOnClick}
                          expanded={false}
                          //width={280}
                      >
                          Energy is important for daily activities.
                          Electricity is an important form of energy.
                          Without electricity we would be unplugged into total darkness. Life would come to a grinding halt. <br />  <br /> 
                          Fossil fuels are extensively used to generate electricity. They are expensive and have become scarce. This burdens the economy. Fossil fuels used to generate electricity emit harmful greenhouse gases like carbon dioxide. Depletion in fossil fuels is an international issue
                          Environmental pollution by carbon dioxide results in  global warming. <br />  <br /> US fish and wildlife science has announced that polar bear population will fall 30 percent by 2050. 
                          Polar bears are endangered and we will lose the privilege of having them on the earth. If suitable measures are not taken, we all would push them to the brink of extinction. 
                          Enposs has taken a step forward to protect our environment.<br />  <br />
                          By using Enposs technology we can have beautiful,brighter and better tomorrows. 
                          Enposs is more than a decade old and is recognized for its outstanding technology. 
                          Customers all over the world can now save energy, environment and economy. 
                          Empower yourself with Enposs. 
                          {" "}  <br />  <br />
                          Save Energy , Save Earth. 
                          {" "}<br />
                          CEO
                          Sung gwun Choi <br /></ShowMoreText>
                        </p>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                         {/* Show more */}
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default CeoMessage;
