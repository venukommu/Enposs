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
import { Card, CardBody, Container, Row, Col } from "reactstrap";
import { appConfig } from "services/config.js";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

class ForcePilotFinalReport extends React.Component {
  state = {
    finalreportcontent: [],
    images: {},
    error: null,
  }
  componentDidMount = async () => {
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
       const finalreportcontent = await fetch(`${appConfig.apiURL}/forcepilotfinalreport`, {
         method: 'GET',
         headers: headers,
       })
         .then(checkStatus)
         .then(parseJSON);
       this.setState({ finalreportcontent, images: finalreportcontent.images });
     } catch (error) {
       this.setState({ error });
     }
   };
 
   render() {
     const { error, finalreportcontent, images} = this.state;
 
     // Print errors if any
     if (error) {
       return <div>An error occured: {error.message}</div>;
     }
     console.log(images);
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default bg-gradient-default alpha-4">
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
                    <h1 className="display-3 text-white">{finalreportcontent.Title}</h1>
                    <h1 className="display-3 text-white">{finalreportcontent.subtitle}</h1>
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
          <section className="section section-lg">
            <Container>
            <Card className="card-profile shadow mt--300">
                <CardBody className="py-5">
                    {Object.values(images).map((item, index) => (
                      <Row className="justify-content-center" key={index}>
                      <Col>
                          <img
                            alt="..."
                            src={`http://localhost:1337${item.url}`}
                            />
                      
                      {/*    <img 
                              alt="..."                        
                              src={require("assets/img/theme/A18040103_10004_0.jpg")}
                      />*/}
                      </Col>
                      </Row>
                    ))}
                  
                  {/*<Row className="justify-content-center">
                  <Col>
                      <img 
                          alt="..."
                          src={require("assets/img/theme/A18040103_10004_1.jpg")}
                      />
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                  <Col>
                      <img 
                          alt="..."
                          src={require("assets/img/theme/A18040103_10004_2.jpg")}
                      />
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                  <Col>
                      <img 
                          alt="..."
                          src={require("assets/img/theme/A18040103_10004_3.jpg")}
                      />
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                  <Col>
                      <img 
                          alt="..."
                          src={require("assets/img/theme/A18040103_10004_4.jpg")}
                      />
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                  <Col>
                      <img 
                          alt="..."
                          src={require("assets/img/theme/A18040103_10004_5.jpg")}
                      />
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                  <Col>
                      <img 
                          alt="..."
                          src={require("assets/img/theme/A18040103_10004_6.jpg")}
                      />
                    </Col>
    </Row>*/}
                </CardBody>
              </Card>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default ForcePilotFinalReport;
