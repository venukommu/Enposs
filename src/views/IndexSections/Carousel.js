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
import {Container, Row, Col, UncontrolledCarousel} from "reactstrap";
import { Link } from "react-router-dom";

const items = [
  {
    src: require("assets/img/theme/1.png"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/photo30.png"),
    altText: "",
    caption: "",
    header: ""
  }
];

class Carousel extends React.Component {
    state = {
      //carouselcontent: [],
      //carouselimage: [],
      error: null,
   }
  
  // Fetch your restaurants immediately after the component is mounted
  componentDidMount = async () => {
    // Parses the JSON returned by a network request
    //const parseJSON = resp => (resp.json ? resp.json() : resp);

    // Checks if a network request came back fine, and throws an error if not
      /*const checkStatus = resp => {
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
      const carouselcontent = await fetch(`${appConfig.apiURL}/carouselcontent`, {
        method: 'GET',
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ carouselcontent, carouselimage: carouselcontent.names });
    } catch (error) {
      this.setState({ error });
    }*/
  };

  render() {
    //const { error, carouselimage} = this.state;

    // Print errors if any
   // if (error) {
     // return <div>An error occured: {error.message}</div>;
    //}
    //const items = carouselimage.map(val => ({ src: `${appConfig.apiURL}${val.url}`, altText: "",
    //caption: ""}))

    return (
      <>
        <section className="section section-shaped">
          <div className="shape bg-gradient-secondary">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          
          <Container className="py-md">
           <Row className="justify-content-between align-items-center">
              <Col lg="12">
                <h4 className="display-3"><span className="text-dark font-weight-bold">For smart Energy Efficient homes to combat Climate Change.</span></h4>
              </Col>
          </Row>
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                  <h3 className="text-dark"   style={{ fontSize: "42px", fontWeight: "800px"}}>
                  Empower yourself by choosing a better way to live and save.</h3>
                        {/*<p className="lead text-white mt-4">
                        {this.state.carouselcontent.description}
                        </p>*/}
                        <Link class="btn-warning mt-4 btn"  to="/store#!/Force/p/296981076/category=0">  <i className=" fa fa-shopping-cart mr-2" />Shop</Link>
                        <Link class="btn-secondary mt-4 btn ">Talk to Sales</Link>
                        <p className="ml-8 font-weight-light"> For Commercial and Industrial</p>
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
            </Row>
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
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </>
    );
  }
}

export default Carousel;
