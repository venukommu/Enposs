import React from "react";
import classnames from "classnames";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

class Contact extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
            <section className="section section-lg bg-gradient-primary">
                <Container className="pt-lg pb-300">
                    <Row className="text-center justify-content-center">
                    <Col lg="10">
                        <h2 className="display-3 text-white">AFTER SALES SERVICE</h2>
                        {/*<p className="lead text-white">
                        According to the National Oceanic and Atmospheric
                        Administration, Ted, Scambos, NSIDClead scentist, puts the
                        potentially record low maximum sea ice extent tihs year down
                        to low ice.
    </p>*/}
                    </Col>
                    </Row>
                    <Row className="row-grid mt-5">
                    <Col lg="4">
                        {/*<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="CardsFooterni ni-settings text-primary" />
                        </div>*/}
                        <img
                      alt="..."
                      //className="img-center img-fluid"
                      src={require("assets/img/theme/1578730282_1551667336.png")}
                    />
                        <h5 className="text-white mt-3">WARRANTY</h5>
                        <p className="text-white mt-3">
                        8-year equipment warranty (according to the warranty policy).
                        </p>
                    </Col>
                    <Col lg="4">
                        {/*<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-ruler-pencil text-primary" />
                    </div>*/}
                        <img
                      alt="..."
                      //className="img-center img-fluid"
                      src={require("assets/img/theme/1586924757_spok.jpg")}
                    />
                        <h5 className="text-white mt-3">COMMITMENTS OF ORIGIN OF PRODUCTS</h5>
                        <p className="text-white mt-3">
                        SProducts Imported Directly From Enposs Korea.
                        </p>
                    </Col>
                    <Col lg="4">
                        {/*<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-atom text-primary" />
                        </div>*/}
                        <img
                      alt="..."
                      //className="img-center img-fluid"
                      src={require("assets/img/theme/1578730282_1551674767.png")}
                    />
                        <h5 className="text-white mt-3">REPLACE</h5>
                        <p className="text-white mt-3">
                        Replace new equipment ( according to the warranty policy)
                        </p>
                    </Col>
                    </Row>
                </Container>
                {/* SVG separator */} 
                <div className="separator separator-bottom separator-skew zindex-100">
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
                <section className="section section-lg pt-lg-0 section-contact-us">
                <Container>
                    <Row className="justify-content-center mt--300">
                    <Col lg="8">
                        <Card className="bg-gradient-secondary shadow">
                        <CardBody className="p-lg-5">
                            <h4 className="mb-1">Want to join with us?</h4>
                            <p className="mt-0">
                            Your project is very important to us.
                            </p>
                            <FormGroup
                            className={classnames("mt-5", {
                                //focused: this.state.nameFocused
                            })}
                            >
                            <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="ni ni-user-run" />
                                </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                placeholder="Your name"
                                type="text"
                                onFocus={e => this.setState({ nameFocused: true })}
                                onBlur={e => this.setState({ nameFocused: false })}
                                />
                            </InputGroup>
                            </FormGroup>
                            <FormGroup
                            className={classnames({
                                //focused: this.state.emailFocused
                            })}
                            >
                            <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="ni ni-email-83" />
                                </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                placeholder="Email address"
                                type="email"
                                onFocus={e => this.setState({ emailFocused: true })}
                                onBlur={e => this.setState({ emailFocused: false })}
                                />
                            </InputGroup>
                            </FormGroup>
                            <FormGroup className="mb-4">
                            <Input
                                className="form-control-alternative"
                                cols="80"
                                name="name"
                                placeholder="Type a message..."
                                rows="4"
                                type="textarea"
                            />
                            </FormGroup>
                            <div>
                            <Button
                                block
                                className="btn-round"
                                color="default"
                                size="lg"
                                type="button"
                            >
                                Send Message
                            </Button>
                            </div>
                        </CardBody>
                        </Card>
                    </Col>
                    </Row>
                </Container>
            </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Contact;