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
 // Badge,
 //Button,
  Card,
 // CardBody,
  //CardImg,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import { appConfig } from "services/config.js";
//import ShowMoreText from 'react-show-more-text';
import Background from 'assets/img/theme/pexels-flickr-149394-min-final.jpg';
import ReactMarkdown from "react-markdown";

class OurStory extends React.Component {
  executeOnClick(isExpanded) {
    console.log(isExpanded);
}
  state = {
    error: null,
    companystory: [],
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
        const companystory = await fetch(`${appConfig.apiURL}/ourstory`, {
          method: 'GET',
          headers: headers,
        })
          .then(checkStatus)
          .then(parseJSON);
        this.setState({ companystory });
      } catch (error) {
        this.setState({ error });
      }

  };
  
  render() {
    const { error, companystory} = this.state;

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
            <div className="shape shape-default"
              style= {{
                backgroundPosition: "center",
                backgroundImage: `url("${Background}")`,
               }}>
               {/*} <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              <span />*/}
              </div>
             
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                <Row>
                    <Col lg="6">
                    {/*< ProductList />*/}
                    <div>
                        <h1 className="display-3 text-white" style={{ textAlign : "left" ,fontFamily: "Noto Sans JP", fontSize: "48px", fontWeight: "900", marginTop: "90px" , lineHeight: "125%" }}>
                        {/*Strategically Built for saving Power and the Planet*/}
                        {companystory.Title}
                        {/*ENPOSS Inc {" "}*/}
                        </h1><br />
                      <h3 className="display-4 text-info"
                        style={{ textAlign : "left" , marginBottom: "80px" }}>
                        {/*The initiative taken by our company was to reduce carbon footprint by reducing consumption of electricity. Hence was born Energy and Power Saving Systems -ENPOSS.*/}
                        {/*Our goal as a company is to reduce carbon emission by reducing the unnecessary consumption of electricity.*/}
                        {companystory.subtitle} 
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
           
      <section className="section section-lg pt-lg-0 mt--150">
            <Container>
            <Card className="card-profile shadow mt--100 bg-lighter">
              <Row className="row-grid align-items-center justify-content-center">
                <Col lg="12">
                   {/*} <CardImg
                      alt="..."
                     src={require("assets/img/theme/_113530377_bears_kt-miller.jpg")}
                      //src={`${appConfig.apiURL}${productimage.url}`}
                      top
    />*/}
                  <blockquote className="card-blockquote bg-gradient-lighter  shadow border-0">
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
                     </svg>*/}
                     <h4 className="display-3 font-weight-bold text-primary">
                          {companystory.storytitle}
                          {/*Our Story*/} 
                      </h4>
                      <span style={{ textAlign : "left"}}>
                     {/*} <ShowMoreText
                        Default options 
                        lines={7}
                        more='Show more'
                        less='Show less'
                        className='content-css'
                        anchorClass='my-anchor-css-class'
                        onClick={this.executeOnClick}
                        expanded={false}
                        //width={280}
                    >*/}
                      {/*Carbon Dioxide emissions are a leading cause of the greenhouse effect. This greenhouse gas traps heat within the earth's atmosphere like a blanket, and contributes to global warming. By reducing carbon dioxide emissions we can slow global warming.
                      <br /><br />
                      "Energy and Power Saving System" (ENPOSS) was born in 2005 out of a mission to save energy and save the planet. Our products are designed to reduce the consumption of electricity (and in turn its production), and thereby contribute to reductions in carbon dioxide emission. This helps slow global warming.
                      <br /><br />
                      ENPOSS developed its FORCE system to help users contribute towards the protection of the environment, by efficiently and effectively saving electric energy. By reducing electric energy consumption via our FORCE devices, we are pleased to be a part of the drive which reduces carbon dioxide emissions.
                      <br /><br />
                      Today, ENPOSS has an international presence. Our global market includes the United States, Japan, Korea, China, Russia, Vietnam, Malaysia, and Brazil. We are proud to be part of the widespread effort to protect the health and wealth of our planet. {/*}</ShowMoreText>*/}
                      <ReactMarkdown source={companystory.description} /></span>
                     </blockquote>
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

export default OurStory;
