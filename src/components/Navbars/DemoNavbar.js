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
import { CartContext } from "context/CartContext";
import {
  UncontrolledCollapse,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  NavItem,
  //Button,
  NavLink,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import App from "views/examples/App.js";

class DemoNavbar extends React.Component {
  static contextType = CartContext
  componentDidMount() {
    //let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    //headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {
    const pathname = window.location.pathname
    //const currentURL = window.location.href
    //console.log(currentURL);
    //const {qty} = this.context;
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light bg-gradient-default"
            expand="lg"
            id="navbar-main"
            style={{ position: "fixed" }}
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link} onClick={() => { window.location.href = "/" }}>
                <img
                  alt="..."
                  src={require("assets/img/brand/EnpossLogo.png")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/" onClick={() => { window.location.href = "/" }}>
                        <img
                          alt="..."
                          src={require("assets/img/brand/EnpossLogo.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle to="#" tag={Link} nav >
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text text-uppercase font-weight-bold" style={{ fontSize: "17px" }}>About</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/ourstory" onClick={() => { window.location.href = "/ourstory" }} tag={Link}>
                        Our Story
                      </DropdownItem>
                      <DropdownItem to="/ceomessage" onClick={() => { window.location.href = "/ceomessage" }} tag={Link}>
                        CEO Message
                      </DropdownItem>
                      <DropdownItem to="/timeline" onClick={() => { window.location.href = "/timeline" }} tag={Link}>
                        Timeline
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle to="#" tag={Link} nav >
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text text-uppercase font-weight-bold" style={{ fontSize: "17px" }}>Product</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/force" tag={Link} onClick={() => { window.location.href = "/force" }}>
                        What is FORCE?
                      </DropdownItem>
                      <DropdownItem to="/benefits" tag={Link} onClick={() => { window.location.href = "/benefits" }}>
                        Benefits of FORCE
                      </DropdownItem>
                      <DropdownItem to="/forceprinciples" tag={Link} onClick={() => { window.location.href = "/forceprinciples" }}>
                        Working Principle
                      </DropdownItem>
                      <DropdownItem to="/patents" tag={Link} onClick={() => { window.location.href = "/patents" }}>
                        Patents
                      </DropdownItem>
                      <DropdownItem to="/certifications" tag={Link} onClick={() => { window.location.href = "/certifications" }}>
                        Certifications
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle to="/news" tag={Link} nav onClick={() => { window.location.href = "/news" }}>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text text-uppercase font-weight-bold" style={{ fontSize: "17px" }}>News</span>
                    </DropdownToggle>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle to="/clients" tag={Link} onClick={() => { window.location.href = "/clients" }} nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text text-uppercase font-weight-bold" style={{ fontSize: "17px" }} >Clients</span>
                    </DropdownToggle>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle to="/store#!/Force/p/296981076/category=0" tag={Link} onClick={() => { window.location.href = "/store#!/Force/p/296981076/category=0" }} nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text text-uppercase font-weight-bold" style={{ fontSize: "17px" }}>Shop</span>
                    </DropdownToggle>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle to="#" tag={Link} nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text text-uppercase font-weight-bold" style={{ fontSize: "17px" }}>Support</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/installforce" tag={Link} onClick={() => { window.location.href = "/installforce" }}>
                        How to install FORCE
                      </DropdownItem>
                      <DropdownItem to="/faq" tag={Link} onClick={() => { window.location.href = "/faq" }}>
                        FAQ
                      </DropdownItem>
                      <DropdownItem to="/contact" tag={Link} onClick={() => { window.location.href = "/contact" }}>
                        Contact Us
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <Nav className="ml-auto" navbar>
                  <NavItem className="d-none d-lg-block ml-xs-4" >
                    <NavLink
                      className="nav-link-icon"
                      href="http://www.enposs.kr/"
                      id="tooltip112445449"
                      target="_blank"
                      title="Korean Site"
                    >
                      <img src={require("assets/img/flags/f_kr.png")} height="18" alt="Korean Site" /> </NavLink></NavItem>
                  <NavItem className="d-none d-lg-block ml-xs-4" >
                    <NavLink
                      className="nav-link-icon"
                      href="http://www.enposs.jp/"
                      id="tooltip112445449"
                      target="_blank"
                      title="Japanese Site"
                    >
                      <img src={require("assets/img/flags/f_jp.png")} height="18" alt="Japanese Site" /> </NavLink></NavItem>
                  <NavItem className="d-none d-lg-block ml-xs-4" >
                    <NavLink
                      className="nav-link-icon"
                      href="http://www.enposs.com.cn/"
                      id="tooltip112445449"
                      target="_blank"
                      title="Chinese Site"
                    >
                      <img src={require("assets/img/flags/f_ch.png")} height="18" alt="Chinese Site" /> </NavLink></NavItem>
                  <NavItem className="d-none d-lg-block ml-xs-4" >
                    <NavLink
                      className="nav-link-icon"
                      href="http://enposs.vn/"
                      id="tooltip112445449"
                      target="_blank"
                      title="Vietnamese Site"
                    >
                      <img src={require("assets/img/flags/f_vt.png")} height="18" alt="Vietnamese Site" /> </NavLink></NavItem>
                  {/*((currentURL === "https://www.enposs.com/store#!/Force/p/296981076/category=0") || (currentURL !== "http://localhost:3000/store#!/Force/p/296981076/category=0")) ?*/}
                  { (pathname === "/")?
                    <App indexName="searchdata" />
                    : ""}

                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>

      </>
    );
  }
}

export default DemoNavbar;