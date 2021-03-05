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
 // Button,
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
//import { appConfig } from "services/config.js";
import ShowMoreText from 'react-show-more-text';
import Background from 'assets/img/theme/globe-with-circles-blue-background.jpg';

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
        const companystory = await fetch(`${appConfig.apiURL}/companystory`, {
          method: 'GET',
          headers: headers,
        })
          .then(checkStatus)
          .then(parseJSON);
        this.setState({ companystory });
      } catch (error) {
        this.setState({ error });
      }

      try {
        const homepagebanner = await fetch(`${appConfig.apiURL}/homebanner`, {
          method: 'GET',
          headers: headers,
        })
          .then(checkStatus)
          .then(parseJSON);
        this.setState({ homepagebanner, homepageimage : homepagebanner.bannerimage });
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
                        <h1 className="display-3 text-white" style={{ textAlign : "left" }}>
                        Saving Strategy for Power and Planet
                        {/*ENPOSS Inc {" "}*/}
                          <span></span>
                        </h1>
                      <h3 className="display-4 text-white"
                        style={{ textAlign : "left" }}>
                        {/*The initiative taken by our company was to reduce carbon footprint by reducing consumption of electricity. Hence was born Energy and Power Saving Systems -ENPOSS.*/}
                        Our mission as a company was to reduce carbon emission by reducing the consumption of electricity.
                        Hence was born Energy and Power Saving System -ENPOSS 
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
           
      <section className="section section-lg pt-lg-0 mt--200">
            <Container>
            <Card className="card-profile shadow mt--200 bg-lighter">
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
                     <h4 className="display-3 font-weight-bold text-white">
                          {/*}    {companystory.Title}*/}
                      </h4>
                      <p className="lead text-italic text-dark" style={{ textAlign : "justify"}}>
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
                      ENPOSS was born in 2005 to save energy and save the planet. Carbon Dioxide emissions cause greenhouse effect.
                      This greenhouse gas traps the heat like a blanket and causes global warming. 
                      Enposs reduces consumption of electricity and thereby contributes to reduction in carbon dioxide emission.
                      This in turn reduces global warming. By reducing carbon dioxide emissions we can slow global warming. Enposs has developed technology to reduce electricity consumption and has worked its way to reducing carbon footprint.
                      ENPOSS took the initiative of developing FORCE, an electricity saving device contributing towards environmental protection. FORCE is efficient and effective in saving electric energy. By reducing electric energy consumption we are pleased to be a part of the drive which reduces carbon dioxide emissions via our device FORCE. Today, ENPOSS has an international presence. 
                      It's global market includes the United States, China, Russia, Vietnam, Japan, Malaysia, and Brazil etc. With gadget called Force, 
                      ENPOSS is the force that is protecting the health and wealth of the earth.</ShowMoreText>
                        {/*{companystory.description}*/}</p>
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
