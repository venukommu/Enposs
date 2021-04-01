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
  Col,
  Badge
} from "reactstrap";
import { appConfig } from "services/config.js";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import MapContainer from "../examples/MapContainer.js";
import contactpage from 'strapi/contactpage';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Contact extends React.Component {
    state = {
        contacts: [],
        name: '',
        email: '',
        contactnum: '',
        message: '',
        error: null
     }

  nameHandler = (event) => {
    this.setState({name: event.target.value});
  }

  emailHandler = (event) => {
    this.setState({email: event.target.value});
  }

  contactnumberHandler = (event) => {
    this.setState({contactnum: event.target.value});
  }

  messageHandler = (event) => {
    this.setState({message: event.target.value});
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
      const contacts = await fetch(`${appConfig.apiURL}/contact`, {
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
    const { error, contacts, name, email, contactnum, message} = this.state;

    let isEmpty = !name || !email || !contactnum || !message;

    const handleSubmit = async (e) => {
      //showAlert({ msg: 'accessing user data. please wait...' });
      e.preventDefault();

      if (isEmpty) {
        toast.error('Please fill out all form fields',{position:toast.POSITION.TOP_RIGHT,autoClose: 5000,});
      } else {
        let response = await contactpage( {name, email, contactnum, message} );
        if (response.status === 200) {
          toast.success(response.data.message,{position:toast.POSITION.TOP_RIGHT,autoClose: 5000,});
          this.setState({name: '',email: '',contactnum: '',message: ''});
        } else {
          toast.error(response.data.error,{position:toast.POSITION.TOP_RIGHT,autoClose: 5000,});
        }
      }
    }
    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }
    return (
      <>
        <DemoNavbar />
        <main ref="main">
        <section className="section-profile-cover section-shaped pb-250">
            {/* Circles background */}
            <div className="shape shape-default">
              
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
                    <Col lg="8">
                    {/*<h3 className="display-3 text-white" style={{ textAlign : "left" , fontSize: "30px", fontWeight: "800px", marginTop: "90px" }}>
                     ENPOSS AMERICA INC. <br/>
                      <div className="icon icon-shape bg-white rounded-circle text-primary">
                      <i className="ni ni-square-pin" /> </div>
                       6940 Beach Blvd D609, Buena Park, CA 90621, USA 
                       <br/>info@enposs.com</h3>
                    */}
                    <div>
                      <h1 className="text-white" style={{ textAlign : "left" ,fontFamily: "Noto Sans JP", fontSize: "48px", fontWeight: "900", marginTop: "120px" , lineHeight: "125%" }}>{/*Contact Information*/}{contacts.Title}</h1>
                        <div className="d-flex py-2 align-items-center">
                            <Badge className="badge-circle mr-3 text-warning" >
                              <i className="ni ni-square-pin" />
                            </Badge>
                            <h5 className="mb-0 text-white">
                            {/*6940 Beach Blvd D609, Buena Park, CA 90621, USA*/}{contacts.address}</h5>
                        </div>
                        <div className="d-flex py-2 align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3 text-warning">
                              <i className="ni ni-email-83" />
                            </Badge>
                          </div>
                          <div>
                            <h5 className="mb-0 text-white">
                            {/*info@enposs.com*/}{contacts.email}</h5>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
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
                <section className="section section-lg pt-lg-0 mt--200">
                <Container>
                    <Row className="justify-content-center">
                    <Col lg="6">
                        <Card className="bg-gradient-secondary shadow">
                        <CardBody className="p-lg-5">
                            <h4 className="mb-1">{/*How Can We Help?*/}{contacts.heading}</h4>
                            <p className="mt-0">
                            {/*Let's schedule a call to assess your requirement..*/}
                            {contacts.subheading}
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
                                type="text" id="name"
                                value={name}
                                onChange={this.nameHandler} 
                                //onFocus={e => this.setState({ nameFocused: true })}
                                //onBlur={e => this.setState({ nameFocused: false })}
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
                                type="email" id="email" value={email}
                                onChange={this.emailHandler}
                                //onFocus={e => this.setState({ emailFocused: true })}
                                //onBlur={e => this.setState({ emailFocused: false })}
                                />
                            </InputGroup>
                            </FormGroup>
                            <FormGroup
                            className={classnames({
                                //focused: this.state.numberFocused
                            })}
                            >
                            <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="ni ni-mobile-button" />
                                </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                placeholder="Contact number"
                                type="text" id="number" value={contactnum}
                                onChange={this.contactnumberHandler}
                                //onFocus={e => this.setState({ numberFocused: true })}
                                //onBlur={e => this.setState({ numberFocused: false })}
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
                                type="textarea" id="message" value={message}
                                onChange={this.messageHandler}
                            />
                            </FormGroup>
                            <div>
                            <Button
                                block
                                className="btn-round"
                                color="default"
                                size="lg"
                                type="button"
                                onClick={handleSubmit}
                            >
                                Send Message
                            </Button>
                            </div>
                        </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6">
                      <MapContainer />
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