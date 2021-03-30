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
import { Link } from "react-router-dom";
import { appConfig } from "services/config.js";

// reactstrap components
import { Card, CardBody,Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

class Clients extends React.Component {
  state = {
    clientscontent: [],
    //imagenames: [],
    error: null,
  }
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
      const clientscontent = await fetch(`${appConfig.apiURL}/clients`, {
        method: 'GET',
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ clientscontent});
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
  const { error, clientscontent} = this.state;
 // const { error, portfoliocontent,imagenames} = this.state;


    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
        <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
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
          <Container className="py-lg-md d-flex">
                <div className="col px-0">
                <Row>
                    <Col lg="6">
                    {/*< ProductList />*/}
                      <div>
                        <h6 className="display-3 text-white" style={{ textAlign : "left" , fontSize: "48px", fontWeight: "800px", marginTop: "90px" }}>
                        {clientscontent.Title}
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
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                   {/*} {imagenames.map((name, index) => (
                    <Col lg="4" key={index}>
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5" to={`/${name.imagename}`} tag={Link}>*/}
                        {/* <img 
                            alt="..."
                            style={{objectFit: "cover", width: "100%"}}
                            src={`${appConfig.apiURL}${name.url}`}
                            src={`${appConfig.apiURL}${name.url}`}
                          />
                        </CardBody>
                      </Card>
                    </Col>
                    ))}*/}
                     <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5" to="/mcdonalds" tag={Link}>
                        <img
                            alt="..."
                            style={{objectFit: "cover", width: "100%"}}
                            src={require("assets/img/theme/A18040103_10004_0.jpg")}
                          />
                        </CardBody>
                      </Card>
                    </Col>
                   <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5" to="/seymour" tag={Link}>
                        <img
                            alt="..."
                            style={{objectFit: "cover", width: "100%"}}
                            src={require("assets/img/theme/A18040103_10003_0.jpg")}
                          />
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5" to="/blueashrecreationcenter" tag={Link}>
                        <img
                            alt="..."
                            style={{objectFit: "cover", width: "100%"}}
                            src={require("assets/img/theme/A18040103_10002_0.jpg")}
                          />
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          </div>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Clients;
