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
import CustomFooter from "components/Footers/CustomFooter";
//import { appConfig } from "services/config.js";

// index page sections

class InstallForce extends React.Component {
  
  state = {
    forcewidgets: [],
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

    /*const parseJSON = resp => (resp.json ? resp.json() : resp);
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
      const forcewidgets = await fetch(`${appConfig.apiURL}/forcewidgets`, {
        method: 'GET',
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ forcewidgets });
    } catch (error) {
      this.setState({ error });
    }*/

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
              <div className="shape shape-style-1 shape-default">
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
               
                  <Row>
                    <Col lg="6">
                      <div><h1 className="display-3 text-white">How To Install</h1>
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
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Card className="bg-gradient-white">
                  <CardBody>
                    <CardImg alt="..."
                      src={`${require("assets/img/theme/install.jpg")}`}/>
                  </CardBody>
                  </Card>
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
                    Safety measures
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
                    Steps of installation
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"plainTabs" + this.state.plainTabs}>
                  <TabPane tabId="plainTabs1">
                    <ul>
                      <li>Should confirm the main circuit breaker is open.</li>
                      <li>Conform the rate voltage and capacity of FORCE.</li>
                    </ul>
                  </TabPane>
                  <TabPane tabId="plainTabs2">
                    <ul>
                      <li>Open the door of distribution panel</li>
                      <li>Check the main circuit breaker.</li>
                      <li>Turn off the main circuit breaker.</li>
                      <li>Check the location of each phase bus or secondary of the main circuit breaker.</li>
                      <li>Connect the FORCE on each phase.</li>
                      <li>Turn on the main circuit breaker.</li>
                    </ul>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
                  </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CustomFooter />
        <CardsFooter />
      </>
    );
}
}

export default InstallForce;