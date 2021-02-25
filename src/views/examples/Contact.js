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
import { appConfig } from "services/config.js";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

class Contact extends React.Component {
    state = {
        contacts: [],
        contactimages: [],
        error: null
     }
componentDidMount = async () => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
    
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
      const contacts = await fetch(`${appConfig.apiURL}/contacts`, {
        method: 'GET',
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ contacts });
    } catch (error) {
      this.setState({ error });
    }
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
        <main ref="main">
            <section className="section section-lg bg-gradient-primary">
                <Container className="pt-lg pb-300">
                    <Row className="text-center justify-content-center">
                   
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