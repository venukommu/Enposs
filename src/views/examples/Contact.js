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
//import { appConfig } from "services/config.js";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

class Contact extends React.Component {
    state = {
        contacts: [],
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {},          // Shows the InfoWindow to the selected place upon a marker
        error: null
     }

  onMarkerClick = (props, marker, e) =>
    this.setState({
       selectedPlace: props,
       activeMarker: marker,
       showingInfoWindow: true
    });
 
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  componentDidMount = async () => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
    
    /*const parseJSON = resp => (resp.json ? resp.json() : resp);

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
    }*/
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
        <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default">
              
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            
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
                    <Col lg="6">
                        <Card className="bg-gradient-secondary shadow">
                        <CardBody className="p-lg-5">
                            <h4 className="mb-1">How Can We Help?</h4>
                            <p className="mt-0">
                            Let's schedule a call to assess your requirement..
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
                                type="text"
                                onFocus={e => this.setState({ numberFocused: true })}
                                onBlur={e => this.setState({ numberFocused: false })}
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
                    <Col lg="6">
                    <Map
                      google={this.props.google}
                      zoom={14}
                      initialCenter={
                        {
                          lat: 33.859834068446666,
                          lng: -117.99783060414177
                        }
                      } >
                      <Marker
                        onClick={this.onMarkerClick}
                        name={'6940 Beach Blvd D609, Buena Park, CA 90621, USA'}
                      />
                      <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}>
                        <div>
                          <h4>{this.state.selectedPlace.name}</h4>
                        </div>
                      </InfoWindow>
                    </Map>  
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

export default  GoogleApiWrapper({
  apiKey: 'AIzaSyCqHFLlCW6oz0MSQxnuNlvbBb5ypJWECvQ'
})(Contact);