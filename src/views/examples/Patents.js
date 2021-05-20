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
import "./style.css";
const items = [
  {
    src: require("assets/img/theme/patent_us.8849f87c.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/patent_kr.6fde758f.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/patent_jp.b443a121.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/patent_cn.85815440.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/patent_vt.f4e1a87e.jpg"),
    altText: "",
    caption: "",
    header: ""
  }
];

class Patents extends React.Component {
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
      const carouselcontent = await fetch(`${appConfig.apiURL}/patents`, {
        method: 'GET',
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ carouselcontent, carouselimage: carouselcontent.images });
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
    //const items = carouselimage.map(val => ({ src: `${val.url}`, altText: "", caption: ""}))

    return (
      <>
        <DemoNavbar />
        <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
        <div className="shape shape-default bg-gradient-default alpha-4">
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
                        <h1 className="display-3 text-white" style={{ textAlign : "left" ,fontFamily: "Noto Sans JP", fontSize: "48px", fontWeight: "900", marginTop: "90px" , lineHeight: "125%" }}>
                        {carouselcontent.Title}
                        </h1><br />
                        <h3 className="display-4 text-info" style={{ textAlign : "left" }}>
                          {/*We have received patents in five countries, with others under application.*/}
                          {carouselcontent.subtitle}
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
      </div>
      <section className="section section-lg pt-lg-0 mt--200">
        <Container>
        {/*<Card className="card-profile shadow mt--200">*/}
        <Row className="justify-content-center">
            <Col lg="10">
            <UncontrolledCarousel items={items}  interval={1500} />
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

export default Patents;
