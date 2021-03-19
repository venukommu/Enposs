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
import { Link } from "react-router-dom";
// reactstrap components
import {Container, Row, Col, Card, CardBody} from "reactstrap";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import CustomFooter from "components/Footers/CustomFooter";

class Newsroom extends React.Component {
    state = {
      error: null,
   }
  
  // Fetch your restaurants immediately after the component is mounted
  componentDidMount = async () => {
    
  };

  render() {
    const { error} = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }
    //const items = carouselimage.map(val => ({ src: `${appConfig.apiURL}${val.url}`, altText: "",
    //caption: ""}))

    return (
      <>
       <DemoNavbar />
        <div className="position-relative">
            <section className="section section-lg section-shaped pb-250">
            <div className="shape shape-style-1 bg-gradient-blue shape-default" >
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
                        <h6 className="display-3 text-white" style={{ textAlign : "left" , fontSize: "48px", fontWeight: "800px", marginTop: "90px" }}>
                        Newsroom
                        </h6>
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
        <section className="section section-lg pt-lg-0 mt--0">
        <Container>
          <Row>
            <Col lg="10">
              <Row to="/newsarticle" tag={Link}> 
              <Col lg="4">
                <Card className="bg-gradient-success shadow border-0">
                <CardBody className="py-3"> 
                    <h6 className="lead text-white text-uppercase">
                    Nuqul Group and Vardot Announce Collaboration
                    </h6>
                </CardBody>
                </Card>
              </Col>
              <Col><p className="text-uppercase">News<br />
              November 15, 2020</p><h5 className="lead text-dark mt-4">Nuqul Group and Vardot Announce Collaboration</h5></Col>
            </Row>
            <hr/>
            <Row>
              <Col lg="4">
                <Card className="bg-gradient-warning shadow border-0">
                <CardBody className="py-3"> 
                    <h6 className="lead text-white text-uppercase">
                    Vardot Ranked In Top 20 Worldwide Contributors To Drupal
                    </h6>
                </CardBody>
                </Card>
              </Col>
              <Col><p className="text-uppercase">News<br />
              December 15, 2020</p>
              <h5 className="lead text-dark mt-4">Vardot Ranked In Top 20 Worldwide Contributors To Drupal</h5></Col>
            </Row>
          </Col>
          </Row>      
        </Container>
        </section>
        <CustomFooter />
        <CardsFooter />
      </>
    );
  }
}

export default Newsroom;
