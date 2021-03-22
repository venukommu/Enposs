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
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
import {CartContext} from "context/CartContext";
//import { UserContext } from 'context/user';
// reactstrap components
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
  //NavItem,
  //Button,
  //NavLink,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class DemoNavbar extends React.Component {
  static contextType = CartContext
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
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
    //const {qty} = this.context;
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
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
                      <Link to="/">
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
                {/* <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Components</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        <Media
                          className="d-flex align-items-center"
                          href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/overview?ref=adsr-navbar"
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <i className="ni ni-spaceship" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              Getting started
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              Learn how to use Argon compiling Scss, change
                              brand colors and more.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/colors?ref=adsr-navbar"
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-palette" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              Foundation
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              Learn more about colors, typography, icons and the
                              grid system we used for Argon.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alert?ref=adsr-navbar"
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-ui-04" />
                          </div>
                          <Media body className="ml-3">
                            <h5 className="heading text-warning mb-md-1">
                              Components
                            </h5>
                            <p className="description d-none d-md-inline-block mb-0">
                              Browse our 50 beautiful handcrafted components
                              offered in the Free version.
                            </p>
                          </Media>
                        </Media>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Examples</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/landing" tag={Link}>
                        Landing
                      </DropdownItem>
                      <DropdownItem to="/profile" tag={Link}>
                        Profile
                      <DropdownItem to="/about" tag={Link}>
                        About Company
                      </DropdownItem>
                      <DropdownItem to="/forceSystem" tag={Link}>
                        Force System
                      </DropdownItem>
                      <DropdownItem to="/portfolio" tag={Link}>
                        Project Portfolio
                      </DropdownItem>
                      <DropdownItem to="/download" tag={Link}>
                        Download
                      </DropdownItem>
                      <DropdownItem to="/login" tag={Link}>
                        Login
                      </DropdownItem>
                      <DropdownItem to="/register" tag={Link}>
                        Register
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav> */}
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle to="/ourstory" tag={Link} nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text text-uppercase">About</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/ourstory" tag={Link}>
                        Our Story
                      </DropdownItem>
                      <DropdownItem to="/ceomessage" tag={Link}>
                        CEO Message
                      </DropdownItem>
                      <DropdownItem to="/timeline" tag={Link}>
                        Timeline
                      </DropdownItem>
                      <DropdownItem to="#" tag={Link}>
                        Directions 
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>                  
                  <UncontrolledDropdown nav>
                    <DropdownToggle to="force" tag={Link} nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text text-uppercase">Product</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/force" tag={Link}>
                        What is Force?
                      </DropdownItem>
                      <DropdownItem to="/forceprinciples" tag={Link}>
                       Working Principle
                      </DropdownItem>
                      <DropdownItem to="/benefits" tag={Link}>
                        Benefits of Force
                      </DropdownItem>
                      <DropdownItem to="/patents" tag={Link}>
                        Patents
                      </DropdownItem>
                      <DropdownItem to="/certifications" tag={Link}>
                        Certifications
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>                                    
                  <UncontrolledDropdown nav>
                    <DropdownToggle  to="/news" tag={Link} nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text text-uppercase">News</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="#" tag={Link}>
                          Announcement
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>                                                      
                  <UncontrolledDropdown nav>
                    <DropdownToggle to="/clients" tag={Link} nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text text-uppercase">Clients</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/clients" tag={Link}>
                        Domestic
                      </DropdownItem>
                      <DropdownItem to="#" tag={Link}>
                        Overseas
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>                                                      
                {/*  <UncontrolledDropdown nav>
                    <DropdownToggle to="/patents" tag={Link} nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Patents</span>
                    </DropdownToggle>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle to="#" tag={Link} nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Certifications</span>
                    </DropdownToggle>
                </UncontrolledDropdown>  */}
                   <UncontrolledDropdown nav>
                    <DropdownToggle to="/store" tag={Link}  nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text text-uppercase">Shop</span>
                    </DropdownToggle>
                  </UncontrolledDropdown>  
                  <UncontrolledDropdown nav>
                    <DropdownToggle to="#" tag={Link} nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text text-uppercase">Support</span>
                    </DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem to="/installforce" tag={Link}>
                        How to install Force
                      </DropdownItem>
                      <DropdownItem to="#" tag={Link}>
                        FAQ
                      </DropdownItem>
                      <DropdownItem to="#" tag={Link}>
                        Q&A
                      </DropdownItem>
                      <DropdownItem to="/contact" tag={Link}>
                        Inquiry
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>       
                 {/*} <UncontrolledDropdown nav>
                    <DropdownToggle to="/contact" tag={Link} nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Contact</span>
                    </DropdownToggle>
              </UncontrolledDropdown> */}
                  {/*<UncontrolledDropdown nav>
                    <DropdownToggle to="/store" tag={Link}  onClick={() => {window.location.href="/store"}} nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">SHOP ENPOSS PRODUCTS</span>
                    </DropdownToggle>
                  </UncontrolledDropdown> 
                  <NavItem>
                    <NavLink to="/cart" tag={Link}
                      className="nav-link-icon"
                      //href="https://www.facebook.com/creativetim"
                      //id="tooltip333589074"
                      //target="_blank"
                    >
                      <i className="ni ni-cart" />
                      <span >{qty}
                      </span>
                    </NavLink>
                    {/*<UncontrolledTooltip delay={0} target="tooltip333589074">
                      Like us on Facebook
                      </UncontrolledTooltip>
                  </NavItem>
                  <UserContext.Consumer> 
                  {({user,userLogout}) => ( 
                    user.token ? (
                    <UncontrolledDropdown nav>
                      <DropdownToggle to="/" tag={Link} nav>
                        <i className="ni ni-collection d-lg-none mr-1" />
                        <span className="nav-link-inner--text" onClick={() => { userLogout(); }}>LOGOUT</span>
                      </DropdownToggle>
                    </UncontrolledDropdown>
                    ) : '' )}
                  </UserContext.Consumer>   */}                                                                    
                  {/* <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.facebook.com/creativetim"
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Like us on Facebook
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.instagram.com/creativetimofficial"
                      id="tooltip356693867"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
                    </NavLink> 
                    <UncontrolledTooltip delay={0} target="tooltip356693867">
                      Follow us on Instagram
                    </UncontrolledTooltip>
                  </NavItem> 
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://twitter.com/creativetim"
                      id="tooltip184698705"
                      target="_blank"
                    >
                      <i className="fa fa-twitter-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Twitter
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                      Follow us on Twitter
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://github.com/creativetimofficial/argon-design-system-react"
                      id="tooltip112445449"
                      target="_blank"
                    >
                      <i className="fa fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                      Star us on Github
                    </UncontrolledTooltip>
                  </NavItem>*/}
                </Nav>
                {/*<Nav className="ml-auto" navbar>
                <NavItem className="d-none d-lg-block ml-lg-4" >
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      //href="/store"
                      target="_self"
                      float= "right"
                      to="/store" tag={Link}
                      forceRefresh={true}
                    >
                <span className="btn-inner--icon">
                        <i className=" fa fa-shopping-cart mr-2" />
                     
                </span>
                      <span className="nav-link-inner--text ml-1">
                        Shop
                      </span>
                    </Button>
                  </NavItem> 
                </Nav>*/}
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;