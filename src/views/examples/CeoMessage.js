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
//import ShowMoreText from 'react-show-more-text';
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
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
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
                        <h1 className="display-1 text-white text-lead"
                        style={{ textAlign : "left" , fontSize: "48px",fontFamily: "Nato Sans", fontWeight: "800px", marginTop: "90px" }}>
                          Play a dynamic role in balancing our ecology and human survival.</h1>
                        <h3 className="display-4 text-info mt-2" style={{ textAlign : "left" , marginBottom : "20px" }}>
                          FORCE reduces the use of electricity. So less fuel is used in producing it. This helps reduce carbon emissions, global warming, and the melting of glaciers.
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
                  <div className="text-left mt-4 py-2">
                  <h4 className="display-3 font-weight-bold text-primary">
                    A Message from Our CEO {" "}
                      <span className="font-weight-light"></span>
                    </h4>
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
                  <div className="mt-3 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p style={{ textAlign : "left"}}>
                          {/*<ShowMoreText
                          
                          lines={3}
                          more='Show more'
                          less='Show less'
                          className='content-css'
                          anchorClass='my-anchor-css-class'
                          onClick={this.executeOnClick}
                          expanded={false}
                          //width={280}
                          >*/}
                          Energy is vital for daily activities, and electricity is probably the most important form of energy that we use on a daily basis. Without electricity we would be left disconnected, and in into total darkness. Life would come to a grinding halt. <br /><br />

                          Fossil fuels are used extensively to generate electricity. They are expensive and difficult to extract from the earth. Their depletion and distribution are international issues. In addition, the fossil fuels used to generate electricity emit harmful greenhouse gases, like carbon dioxide. Thus, the use of fossil fuels burdens the economy, as well the environment, in several different ways.<br /><br />

                          Polar bears are endangered, and we will lose the privilege of having them on the earth if suitable measures are not taken. The US Fish & Wildlife Service has announced that the polar bear population will fall 30 percent by 2050, pushing them to the edge of extinction. Enposs has taken a step to protect our environment. We encourage you to join us.<br /><br />

                          Enposs is more than a decade old and is recognized for its outstanding technology. Customers all over the world now save energy, and help save the environment and the economy at the same time. Join us in our hope for beautiful, brighter, and better tomorrows, by using Enposs technology.
                          {" "}  <br />  <br />
                          Empower yourself to save energy and help save the Earth. 
                          {" "}<br />
                          CEO
                          Sung gwun Choi <br />   {/*</ShowMoreText>*/}
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
