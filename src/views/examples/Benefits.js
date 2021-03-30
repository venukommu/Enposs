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

// reactstrap components
import {
 //Badge,
 // Button,
  Card,
 // CardBody,
  CardImg,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import { appConfig } from "services/config.js";
//import Background from 'assets/img/theme/12818.jpg';

class Benefits extends React.Component {
  state = {
    error: null,
    forcebenefits: [],
    homepageimage: [],

  };

  componentDidMount = async () => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
   // this.refs.main.scrollTop = 0;

    const parseJSON = resp => (resp.json ? resp.json() : resp);

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
        const forcebenefits = await fetch(`${appConfig.apiURL}/benefits`, {
          method: 'GET',
          headers: headers,
        })
          .then(checkStatus)
          .then(parseJSON);
        this.setState({ forcebenefits });
      } catch (error) {
        this.setState({ error });
      }

  };
  
  render() {
    const { error, forcebenefits} = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }
    return (
      <>
        <DemoNavbar />
        <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
            <div className="shape shape-style-1 bg-gradient-gray-dark">
            {/*} style= {{
                backgroundPosition: "center",
                backgroundImage: `url("${Background}")`,
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
                    {/*< ProductList />*/}
                      <div>
                      <h1 className="display-3 text-white" style={{ textAlign : "left" ,fontFamily: "Nato Sans", fontSize: "48px", fontWeight: "800px", marginTop: "90px" }}>
                        {/*Enjoy benefits that stack up*/}{forcebenefits.Title}
                        {/*ENPOSS Inc {" "}*/}
                        </h1>
                        <h3 className="display-4 text-info"
                        style={{ textAlign : "left" , marginBottom: "80px" }}>
                          {/*the knock-on effects are significant as time goes on*/}{forcebenefits.subtitle}</h3>
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
            <Card className="card-profile shadow mt--200" >
              <Row className="row-grid align-items-center justify-content-center">
                <Col lg="12"> 
                      <h4 className="pt-4 pl-4 display-3 font-weight-bold text-primary">
                            Expect several direct benefits
                      </h4>
                      <p className="px-4">(Besides helping to save the planet)</p>
                    <CardImg
                      alt="..."
                     src={require("assets/img/theme/asdf.PNG")}
                      //src={`${appConfig.apiURL}${productimage.url}`}
                      top
    />
              {/* <blockquote className="card-blockquote bg-default shadow border-0">*/}
                     {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                     </svg>
                     <h4 className="display-3 font-weight-bold text-white">
                      {companystory.Title}
                      </h4>*/}
                 {/*<Container >*/}
                   {/*} <h3 className="text-white">Brilliant Benefits</h3>*/}
                     {/*<Row className="row-grid align-items-center">
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
                                    <h3 className="mb-0 text-white">
                                    Eco friendly</h3>
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
                                    <h3 className="mb-0 text-white">Highly safe</h3>
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
                                    <h3 className="mb-0 text-white">
                                    Easy to install</h3>
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
                                    <h3 className="mb-0 text-white">
                                    Versatile</h3>
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
                                    <h3 className="mb-0 text-white">
                                    Energy saver</h3>
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
                                    <h3 className="mb-0 text-white">
                                    Excellent technology</h3>
                                </div>
                                </div>
                            </li>
                            <li className="py-2">
                                <div className="d-flex align-items-center">
                                <div>
                                    <Badge className="badge-circle mr-3" color="primary">
                                    <i className="ni ni-settings-gear-65" />
                                    </Badge>
                                </div>
                                <div>
                                    <h3 className="mb-0 text-white">
                                    Economical</h3>
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
                                    <h3 className="mb-0 text-white">
                                    High reliability</h3>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </Col>
                    </Row>
                </Container>
        </blockquote>*/}
            </Col>
            </Row>
            </Card>
            </Container>
          </section>
        <CardsFooter />
      </>
    );
  }
}

export default Benefits;
