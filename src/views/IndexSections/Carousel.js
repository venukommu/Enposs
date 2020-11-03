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
import {Container, Row, Col, UncontrolledCarousel} from "reactstrap";

const items = [
  {
    src: require("assets/img/theme/bulb.png"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/speedo.png"),
    altText: "",
    caption: "",
    header: ""
  }
];

class Carousel extends React.Component {
  render() {
    return (
      <>
        <section className="section section-shaped">
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h4 className="text-white font-weight-light">
                International Leading Technology Independent Research And Development Patent              </h4>
                <p className="lead text-white mt-4">
               Power Quality emprovement system <br></br>
               Quality Improvement System transforms the corporate power environment to help companies save energy.
                </p>
                {/*<ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0 text-white">
                            Enposs</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="fa fa-plug" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0 text-white">Force System</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0 text-white">
                              Super friendly support team
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                <Button
                  className="btn-white mt-4"
                  color="default"
                  href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                >
                  See all components
                </Button>*/}
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
