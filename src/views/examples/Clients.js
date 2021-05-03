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
//import { Link } from "react-router-dom";
import { appConfig } from "services/config.js";

// reactstrap components
import { Card, CardBody,Container, Row, Col, Button, Modal, UncontrolledCarousel } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

class Clients extends React.Component {
  state = {
    clientscontent: [],
    clientsdata: [],
    //imagenames: [],
    error: null,
  }

  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
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

    try {
      const clientsdata = await fetch(`${appConfig.apiURL}/clientsdata`, {
        method: 'GET',
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ clientsdata });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
  const { error, clientscontent, clientsdata} = this.state;
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
                        {clientscontent.Title}
                        </h1><br />
                        <h3 className="display-4 text-info" style={{ textAlign : "left" , marginBottom: "80px" }}>
                          {/*Where permissible, we have shared reports looking into the reduction in energy comsumption experienced by our clients.*/}
                          {clientscontent.subtitle}
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
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                   {clientsdata.sort((a, b) =>  b.id - a.id).map(data => (
                    <Col lg="4" key={data.id}>
                      <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5" onClick={() => this.toggleModal(data.Title)}>
                        {/*<CardBody className="py-5" to={`/${name.imagename}`} tag={Link}>*/}
                        <img 
                            alt="..."
                            style={{objectFit: "cover", width: "100%"}}
                            src={`${data.image.url}`}
                            //src={`${appConfig.apiURL}${name.url}`}
                          />
                        </CardBody>
                      </Card>
                      <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">{data.Title}</span>
                      </h5><h6 className="text-info">{data.subtitle}</h6>
                      </div>
                    <Modal
                    className="modal-lg"
                    isOpen={this.state[data.Title]}
                    toggle={() => this.toggleModal(data.Title)}
                    key={data.id}
                    >
                    <div className="modal-header bg-gradient-default">
                      <h2 className="modal-title text-white">
                        {data.Title}
                      </h2>
                      <button
                        aria-label="Close"
                        className="close"
                        data-dismiss="modal"
                        type="button"
                        onClick={() => this.toggleModal(data.Title)}
                      >
                      <span aria-hidden={true} className="text-white">×</span>
                      </button>
                    </div>
                    <div className="modal-body">

                        <UncontrolledCarousel items={ data.carouselimages.map(val => ({ src: `${val.url}`, altText: "", caption: ""}))} interval={1500} />
                      {/*<ReactMarkdown source={newsdata.description} allowDangerousHtml={true}  renderers={{link: props => <a href={props.href} target="_blank" rel="nofollow noopener noreferrer">{props.children}</a>}}/>*/}
                    </div>
                    <div className="modal-footer">
                      <Button
                        className="ml-auto"
                        color="link"
                        data-dismiss="modal"
                        type="button"
                        onClick={() => this.toggleModal(data.Title)}
                      > Close
                      </Button>
                    </div>
                    </Modal>
                    </Col>
                    ))}
                    {/* <Col lg="4">
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
                   </Col>*/}
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
