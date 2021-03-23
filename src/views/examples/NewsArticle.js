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
import {Container, Row, Col, Card} from "reactstrap";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

class NewsArticle extends React.Component {
    state = {
      error: null,
   }
  
  // Fetch your restaurants immediately after the component is mounted
  componentDidMount = async () => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
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
            <section className="section section-lg section-shaped pb-250">
            <div className="shape shape-style-1 bg-gradient-info shape-default" >
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
                        <h6 className="display-3 text-white">
                        Nuqul Group and Vardot Announce Collaboration
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
          <section className="section">
          <Container>
              <Card className="card-profile shadow mt--200">
                <div className="px-4">
                 <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p style={{ textAlign : "justify"}}>
                        November 15, 2020 <br/>
                        <b>Amman, Jordan – November 12, 2020 – </b>Representatives from Nuqul Group and Vardot Enterprise Web Solutions have signed an agreement to build the group's digital experience.
                        <hr />
                        To reinforce its reputation as one of the most innovative conglomerates in the region and the world, Nuqul Group intends to build numerous digital experiences for the various properties under the holding management - creating in the process an interconnected ecosystem of cutting-edge digital experiences that represent Nuqul Group's vision and values.<br /><br />
                        "Global enterprises typically have complex technical requirements to ensure that their strategic digital objectives are reached. Drupal has yet again proven to be the ideal technology, and Vardot is looking forward to creating a successful digital experience and story with Nuqul Group."
–Mohammed Razem, CEO of Vardot
                        </p>
                      </Col>
                    </Row>
                  </div>
                  </div>
              </Card>
        </Container>
        </section>
        <CardsFooter />
      </>
    );
  }
}

export default NewsArticle;
