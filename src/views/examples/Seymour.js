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
import { appConfig } from "services/config.js";

// reactstrap components
import {Container, Row, Col, UncontrolledCarousel} from "reactstrap";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

const items = [
  {
    src: require("assets/img/theme/A18040103_10003_0.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/A18040103_10003_1.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/A18040103_10003_2.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/A18040103_10003_3.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/A18040103_10003_4.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/A18040103_10003_5.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/A18040103_10003_6.jpg"),
    altText: "",
    caption: "",
    header: ""
  }
];

class Seymour extends React.Component {
    state = {
      carouselcontent: [],
      carouselimage: [],
      error: null,
   }
  
  // Fetch your restaurants immediately after the component is mounted
  componentDidMount = async () => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    // Parses the JSON returned by a network request
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
      const carouselcontent = await fetch(`${appConfig.apiURL}/seymour`, {
        method: 'GET',
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ carouselcontent });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, carouselcontent} = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }
    //const items = carouselimage.map(val => ({ src: `${appConfig.apiURL}${val.url}`, altText: "",
    //caption: ""}))

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
                <h1 className="display-3 text-white"> {/*City of Seymour WWTP*/}{carouselcontent.Title} </h1>
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
        {/*<Card className="card-profile shadow mt--200">*/}
        <Row className="justify-content-center">
            <Col lg="10">
            <UncontrolledCarousel items={items} />
            </Col>
        </Row>
        {/*</Card>*/}
        </Container>
        </section>
        <CardsFooter />
      </>
    );
  }
}

export default Seymour;
