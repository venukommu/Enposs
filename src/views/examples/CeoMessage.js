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
import Background from 'assets/img/theme/two-polar-bears-layer.jpg';

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
                    <Col lg="6">
                    {/*< ProductList />*/}
                      <div>
                        <h1 className="display-4 text-white">
                        {/*ENPOSS Inc {" "}*/}
                         <span></span>
                        </h1>
                        <h2 className="display-2 text-white">
                       Be the FORCE that protects the planet.</h2>
                        <h4 className="display-5  text-white"
                          style={{ textAlign : "justify" }}>
                          Force reduces the use of electricity. so less fuel is used in producing it. This helps reduce carbon emission, global warming and melting of glaciers. Thus FORCE has a dynamic role in balancing our ecology and human survival.
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
                    <br></br>
                    <br></br>
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
                    <Row className="justify-content-center text-dark">
                      <Col lg="9">
                        <p style={{ textAlign : "justify"}}>
                          <ShowMoreText
                          /* Default options */
                          lines={5}
                          more='Read more'
                          less='Read less'
                          className='content-css'
                          anchorClass='my-anchor-css-class'
                          onClick={this.executeOnClick}
                          expanded={false}
                          //width={280}
                      >
                          In a rapidly changing world, the importance of energy is growing day by day. Out of those the electric energy is the most important element of human’s life on the earth, we can’t imagine without electric energy for human’s life, but fossil fuels are depleting. The high cost of depletion of fossil fuels is an important issue of national competitiveness as well as an economic burden. Also, electric energy generated by fossil fuels generates a lot of carbon dioxide. Carbon dioxide is constantly increasing, causing air pollution, environmental pollution, and global warming. With global warming constantly being raised due to atmospheric and environmental pollution, the U.S. Fish and Wildlife Service has announced that polar bear populations will decline by about 30% by 2050. Can't we live with polar bears anymore? It's difficult, but someone has to do it. ENPOSS is going to take a one step ahead to protect the environment of the earth with its technology because there is a beautiful day to be followed by tomorrow. For more than a decade, ENPOSS’s energy-saving device FORCE has entered the world and is recognized for its outstanding technology. Starting with the reduction of electrical energy, ENPOSS wants to improve the planet's environment and reduce the economic
                          burden of using electric energy for all customers around the world. CEO/ENPOSS Sung gwun Choi</ShowMoreText>
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
