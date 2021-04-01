import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
//import { Link } from "react-router-dom";

// reactstrap components
import {
  Card,
  CardBody,
  CardImg,
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
  //Button
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
//import CardTitle from "reactstrap/lib/CardTitle";
//import CardText from "reactstrap/lib/CardText";
import { appConfig } from "services/config.js";

// index page sections

class InstallForce extends React.Component {
  
  state = {
    forcecontent: [],
    forceinstallsteps: [],
    error: null,
    plainTabs: 1
  };

  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
  componentDidMount = async () => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;

    const parseJSON = resp => (resp.json ? resp.json() : resp);
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
      const forceinstallsteps = await fetch(`${appConfig.apiURL}/forceinstallsteps`, {
        method: 'GET',
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ forceinstallsteps });
    } catch (error) {
      this.setState({ error });
    }

  };
  
  handleEndReached = () => {
    console.log("load more");
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
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-default bg-gradient-default alpha-4">
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
                <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0
      }}
    >
      <iframe title="Enposs video"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        src="https://www.youtube.com/embed/PCL1Y_3wUPM"
        frameBorder="0"
      />
    </div>
               
                {/*}  <Row>
                    <Col lg="6">
                      <div><h1 className="display-3 text-white">How To Install</h1>
                      </div>
                    </Col>
      </Row>*/}
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
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                 {/*} <Card className="bg-gradient-white">
                  <h4 className="display-3 font-weight-bold text-primary">
                       
                          How To Install
                      </h4>
                  <CardBody>
                    <CardImg alt="..."
                      src={`${require("assets/img/theme/Installation1.PNG")}`}/>
                      <CardText />
                  </CardBody>
                  <CardBody>
                    <CardImg alt="..."
                      src={`${require("assets/img/theme/installation2.PNG")}`}/>
                  </CardBody>
                  
    </Card>*/}
                  {/*<Card className="bg-gradient-info text-white">
                    <CardBody>
                    <h4>Safety measures</h4>
                    <ul>
                      <li>Should confirm the main circuit breaker is open.</li>
                      <li>Conform the rate voltage and capacity of FORCE.</li>
                    </ul><br />
                    <h4>Steps of installation</h4>
                    <ul>
                      <li>Open the door of distribution panel</li>
                      <li>Check the main circuit breaker.</li>
                      <li>Turn off the main circuit breaker.</li>
                      <li>Check the location of each phase bus or secondary of the main circuit breaker.</li>
                      <li>Connect the FORCE on each phase.</li>
                      <li>Turn on the main circuit breaker.</li>
                    </ul><br/><br/>
                    </CardBody>
      </Card>*/}
            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 1}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 1
                    })}
                    onClick={e => this.toggleNavs(e, "plainTabs", 1)}
                    href="#pablo"
                    role="tab"
                  >
                   I.Installation of FORCE
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 2}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 2
                    })}
                    onClick={e => this.toggleNavs(e, "plainTabs", 2)}
                    href="#pablo"
                    role="tab"
                  >
                    II. Installation of FORCE
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"plainTabs" + this.state.plainTabs}>
                  <TabPane tabId="plainTabs1">
                    <p className="text-dark font-weight-bold">I.Installation of FORCE </p>
                    <p className="text-danger text-right font-weight-bold">* Always consult a Licensed Electrician before working on any electric.</p>
                    <p className="text-right font-weight-lighter">* In no way is this meant to be construed as instructional procedures to installing FORCE, or performing work in an Electrical panel.</p>
                    <p className="text-dark font-weight-bold">Parts: 2- Y-terminal (white), 2- Socket (yellow), 2- Wire, Device (FORCE), 2- Black rubber, 2- Cap, 4- 1 inch screw (Y-terminal and Socket are attached to wire)</p>
                      <Row>
                        <Col lg="7">
                          <ul>
                            <li> First locate your MAIN BREAKER, then TURN OFF THE MAIN BREAKER, Turn OFF All Breaker. <span className="text-danger">(**Please double-check with the electrical meter to ensure the electricity is off before removing the panel cover**)</span></li>
                            <li>After double-checking the electricity is OFF, then carefully remove the panel cover.  </li>
                            <li> Put Cap through Y-terminal and bring it towards the device to close (twist), make sure Socket is connected to the Force Device fully, and seal properly with Cap. </li>
                            <li> Put Black rubber (the narrow side facing Y-terminal) through Socket, then connect Socket to the Force Device until you hear "click". </li>
                            <li> Put Cap through Y-terminal and bring it towards the device to close (twist), make sure Socket is connected to the Force Device fully, and seal properly with Cap. </li>
                            <li> Put Black rubber (the narrow side facing Y-terminal) through Socket, then connect Socket to the Force Device until you hear "click".</li>
                            <li> Mount the FORCE device anywhere within 12 inches from the panel.</li>
                            <li> Unscrew the bolt & nut that is attached to the bus bar, then connect one Y-terminal (white color) on the left side of the bus bar and screw the bolt & nut tight. </li>
                            <li> Then follow the procedure # 2-4 to connect another Y-terminal to the right side of the bus bar.  </li>
                            <li>Safely install the panel cover back.   </li>
                            <li> Turn on the main breaker. DONE!   </li>
                          </ul>
                        </Col>
                        <Col lg="5">
                          <CardBody>
                            <CardImg alt="Installation of FORCE" src={`${require("assets/img/theme/1-Installation-Of-FORCE.png")}`}/>
                          </CardBody>
                        </Col>
                      </Row>
                  </TabPane>
                
                  <TabPane tabId="plainTabs2">
                    <p className="text-dark font-weight-bold">II.Installation of FORCE </p>
                    <p className="text-danger text-right font-weight-bold">* Always consult a Licensed Electrician before working on any electric.</p>
                    <p className="text-right font-weight-lighter">* In no way is this meant to be construed as instructional procedures to installing FORCE, or performing work in an Electrical panel.</p>
                    <p className="text-dark font-weight-bold">Parts: 2- Y-terminal (white), 2- Socket (yellow), 2- Wire, Device (FORCE), 2- Black rubber, 2- Cap, 4- 1 inch screw (Y-terminal and Socket are attached to wire)</p>
                    <Row>
                      <Col lg="7">
                        <ul>
                          <li> First locate your MAIN BREAKER, then TURN OFF THE MAIN BREAKER, Turn OFF All Breaker. <span className="text-danger">(**Please double-check with an electrical meter to ensure the electricity is off before removing the panel cover**)</span></li>
                          <li>  After double-checking the electricity is OFF, then carefully remove the panel cover. </li>
                          <li> Put Black rubber(the narrow side facing Y-terminal) through Socket, then connect Socket to the Force Device until you hear "click". </li>
                          <li>Put Cap through Y-terminal and bring it towards the device to close(twist), make sure Socket is connected to the Force Device fully, and seal properly with Cap.</li>
                          <li> Mount the FORCE device anywhere within 12 inches from the panel. </li>
                          <li> Cut off Y-terminal from the wire, and peel about ½ inches from the tip of the wire cover (COVER ONLY).</li>
                          <li>Connect wires to the switches. </li>
                          <li>Remove the very first two switches from 1 or 2 sides of the panel. </li>
                          <li> Connect both of the FORCE to attached switches on the top first two breakers of the panel that you have selected. </li>
                          <li> After installing the FORCE switches on the panel you selected, turn ON switches ONLY! <span className="text-danger">(NOT A MAIN BREAKER)</span>.</li> 
                          <li> Safely install the panel cover back. </li>
                          <li> Turn ON the MAIN BREAKER. DONE! </li>
                        </ul>
                      </Col>

                      <Col lg="5">
                        <CardBody>
                          <CardImg alt="FORCE Installation" src={`${require("assets/img/theme/forceInstallation2.PNG")}`}/>
                        </CardBody>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
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

export default InstallForce;