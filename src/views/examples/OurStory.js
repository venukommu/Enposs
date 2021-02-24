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
  CardImg,
  Container,
  Row,
  Col
} from "reactstrap";


// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import { appConfig } from "services/config.js";
import ShowMoreText from 'react-show-more-text';

class OurStory extends React.Component {
  executeOnClick(isExpanded) {
    console.log(isExpanded);
}
  state = {
    error: null,
    companystory: [],
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

  };
  
  render() {
    const { error,companystory} = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }
    return (
      <>
        <DemoNavbar />
        <section className="section-profile-cover section-shaped my-0">
        <div className="shape shape-style-1 shape-default bg-gradient-success alpha-4">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <Container className="shape-container d-flex align-items-center py-lg">
          <div className="col px-0">
            <Row className="align-items-center justify-content-center">
              <Col className="text-center" lg="6">
                <h1 className="display-3 text-white">Our Story</h1>
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
            <Card className="card-profile shadow mt--200">
              <Row className="row-grid align-items-center justify-content-center">
                <Col lg="12">
                    <CardImg
                      alt="..."
                     src={require("assets/img/theme/_113530377_bears_kt-miller.jpg")}
                      //src={`${appConfig.apiURL}${productimage.url}`}
                      top
                    />
                    <blockquote className="card-blockquote bg-default shadow border-0">
                      <svg
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
                      </h4>
                      <p className="lead text-italic text-white" style={{ textAlign : "justify"}}>
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
               {companystory.description}
              </ShowMoreText>
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
