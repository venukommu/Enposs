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
//import Headroom from "headroom.js";
//import {CartContext} from "context/CartContext";
import {LanguageContext} from "context/LanguageProvider";
import { appConfig } from "services/config.js";
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
  Badge,
  DropdownMenu,
  DropdownItem,
  Media
} from "reactstrap";

export const languageOptions = {
  en: 'English',
  ko: 'Korean'
};

class DemoNavbar extends React.Component {
  state = {
    collapseClasses: "",
    collapseOpen: false,
    menus: [],
    menusections: [],
    flagLink: "",
    error: null
  };
  static contextType = LanguageContext
  componentDidMount = async () => {
    //let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    //headroom.init();
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    //this.refs.main.scrollTop = 0;
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
  
    const language = window.localStorage.getItem('lang');
    console.log(language);
    try {
      const menus = await fetch(`${appConfig.apiURL}/menu?_locale=${language}`, {
        method: 'GET',
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({  menus: menus.body  });
    } catch (error) {
      this.setState({ error });
    };

    try {
      const menusections = await fetch(`${appConfig.apiURL}/sections?_locale=${language}`, {
        method: 'GET',
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({  menusections  });
    } catch (error) {
      this.setState({ error });
    }
    
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
    const { language, languageChange } = this.context;
    const { error, menus, menusections } = this.state;

    console.log(menusections);

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }
    
    const refreshPage = ()=>{
      window.location.reload();
    }

    const handleLanguageChange = e => {
      languageChange(e.target.value);
    }
  
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light bg-gradient-default"
            expand="lg"
            id="navbar-main"
            style={{position:"fixed"}}
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link} onClick={() => {window.location.href="/"}}>
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
                      <Link to="/" onClick={() => {window.location.href="/"}}>
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
                  {menus.map(menu => (
                  <UncontrolledDropdown nav key={menu.id}>
                      <DropdownToggle key={menu.id} to={menu.url} tag={Link} nav onClick={() => {window.location.href=menu.url}}>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text text-uppercase font-weight-bold" style={{fontSize:"17px"}}>{menu.label}</span>
                      </DropdownToggle>
                    {menusections.map(section =>(
                      (menu.label === section.label)?
                      <DropdownMenu key={section.id}>
                        {section.links.map(link => (
                        <DropdownItem key={link.id} to={link.url} onClick={() => {window.location.href=link.url}} tag={Link}> 
                          {link.label}
                        </DropdownItem>
                        ))}
                      </DropdownMenu>
                      : ""
                    ))}
                  </UncontrolledDropdown>
                  ))}
                  </Nav>
                {/*<Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle to="#" tag={Link} nav >
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text text-uppercase font-weight-bold" style={{fontSize:"17px"}}>About</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/ourstory" onClick={() => {window.location.href="/ourstory"}} tag={Link}>
                        Our Story
                      </DropdownItem>
                      <DropdownItem to="/ceomessage" onClick={() => {window.location.href="/ceomessage"}} tag={Link}>
                        CEO Message
                      </DropdownItem>
                      <DropdownItem to="/timeline"  onClick={() => {window.location.href="/timeline"}}  tag={Link}>
                        Timeline
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>                  
                  <UncontrolledDropdown nav>
                    <DropdownToggle to="#" tag={Link} nav >
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text text-uppercase font-weight-bold" style={{fontSize:"17px"}}>Product</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/force" tag={Link} onClick={() => {window.location.href="/force"}}>
                        What is FORCE?
                      </DropdownItem>
                      <DropdownItem to="/benefits" tag={Link} onClick={() => {window.location.href="/benefits"}}>
                        Benefits of FORCE
                      </DropdownItem>
                      <DropdownItem to="/forceprinciples" tag={Link}  onClick={() => {window.location.href="/forceprinciples"}}>
                       Working Principle
                      </DropdownItem>
                      <DropdownItem to="/patents" tag={Link} onClick={() => {window.location.href="/patents"}}>
                        Patents
                      </DropdownItem>
                      <DropdownItem to="/certifications" tag={Link} onClick={() => {window.location.href="/certifications"}}>
                        Certifications
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>                                    
                  <UncontrolledDropdown nav>
                    <DropdownToggle  to="/news" tag={Link} nav onClick={() => {window.location.href="/news"}}>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text text-uppercase font-weight-bold" style={{fontSize:"17px"}}>News</span>
                    </DropdownToggle>
                   {/*} <DropdownMenu>
                      <DropdownItem to="#" tag={Link}>
                          Announcement
                      </DropdownItem>
                  </DropdownMenu>
                  </UncontrolledDropdown>                                                      
                  <UncontrolledDropdown nav>
                    <DropdownToggle to="/clients" tag={Link} onClick={() => {window.location.href="/clients"}} nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text text-uppercase font-weight-bold" style={{fontSize:"17px"}} >Clients</span>
                    </DropdownToggle>
                       {/*}<DropdownMenu>
                      <DropdownItem to="/clients" tag={Link} onClick={() => {window.location.href="/clients"}}>
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
                </UncontrolledDropdown>  
                   <UncontrolledDropdown nav>
                    <DropdownToggle to="/store#!/Force/p/296981076/category=0" tag={Link} nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text text-uppercase font-weight-bold" style={{fontSize:"17px"}}>Shop</span>
                    </DropdownToggle>
                  </UncontrolledDropdown>  
                  <UncontrolledDropdown nav>
                    <DropdownToggle to="#" tag={Link} nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text text-uppercase font-weight-bold" style={{fontSize:"17px"}}>Support</span>
                    </DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem to="/installforce" tag={Link} onClick={() => {window.location.href="/installforce"}}>
                        How to install FORCE
                      </DropdownItem>
                      <DropdownItem to="/faq" tag={Link} onClick={() => {window.location.href="/faq"}}>
                        FAQ
                      </DropdownItem>
                      {/*<DropdownItem to="#" tag={Link}>
                        Q&A
                      </DropdownItem>
                      <DropdownItem to="/contact" tag={Link} onClick={() => {window.location.href="/contact"}}>
                       Contact Us
                      </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown> */}      
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
                  </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                <select className="form-control mb-3" onChange={handleLinkChange}>
                  <img  src={require("assets/img/flags/f_kr.png")}  height="18" alt="Korean Site" /> <option value="Korean">Korean</option>
                  <img  src={require("assets/img/flags/f_jp.png")}  height="18" alt="Japanese Site" /> <option value="Japanese">Japanese</option>
                  <img  src={require("assets/img/flags/f_ch.png")}  height="18" alt="Chinese Site" /> <option value="Chinese">Chinese</option>
                  <img  src={require("assets/img/flags/f_vt.png")}  height="18" alt="Vietnamese Site" /> <option value="Vietnamese">Vietnamese</option>
                </select>*/}
                {/*<NavItem className="d-none d-lg-block ml-xs-4">
                <NavLink
                      className="nav-link-icon"
                      href="http://www.enposs.kr/"
                      id="tooltip112445449"
                      target="_blank"
                      title="Korean Site"
                    > 
                <img  src={require("assets/img/flags/f_kr.png")}  height="18" alt="Korean Site" /> </NavLink></NavItem> 
                <NavItem className="d-none d-lg-block ml-xs-4" >
                <NavLink
                      className="nav-link-icon"
                      href="http://www.enposs.jp/"
                      id="tooltip112445449"
                      target="_blank"
                      title="Japanese Site"
                    > 
                <img  src={require("assets/img/flags/f_jp.png")}  height="18" alt="Japanese Site" /> </NavLink></NavItem> 
                <NavItem className="d-none d-lg-block ml-xs-4" >
                <NavLink
                      className="nav-link-icon"
                      href="http://www.enposs.com.cn/"
                      id="tooltip112445449"
                      target="_blank"
                      title="Chinese Site"
                    >
                <img  src={require("assets/img/flags/f_ch.png")}  height="18" alt="Chinese Site" /> </NavLink></NavItem> 
                <NavItem className="d-none d-lg-block ml-xs-4" >
                <NavLink
                      className="nav-link-icon"
                      href="http://enposs.vn/"
                      id="tooltip112445449"
                      target="_blank"
                      title="Vietnamese Site"
                    > 
                <img  src={require("assets/img/flags/f_vt.png")}  height="18" alt="Vietnamese Site" /> </NavLink></NavItem> 
              </Nav>*/}
              <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      {/*<span className="nav-link-inner--text text-uppercase font-weight-bold">languages</span>*/}
                      <img  src={require("assets/img/flags/f_kr.png")}  height="18" alt="Korean Site" />Korean
                    </DropdownToggle>
                    <DropdownMenu>
                      <div className="dropdown-menu-inner">
                        <Media
                          className="d-flex align-items-center"
                          href="http://www.enposs.kr/"
                          target="_blank">
                          <Badge><img  src={require("assets/img/flags/f_kr.png")}  height="18" alt="Korean Site" /></Badge>
                          <Media body className="ml-2">
                            <h6>Korean</h6>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="http://www.enposs.jp/"
                          target="_blank">
                          <Badge><img  src={require("assets/img/flags/f_jp.png")}  height="18" alt="Japanese Site" /></Badge>
                          <Media body className="ml-2">
                            <h6>Japanese</h6>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="http://www.enposs.com.cn/"
                          target="_blank">
                          <Badge><img  src={require("assets/img/flags/f_ch.png")}  height="18" alt="Chinese Site" /></Badge>
                          <Media body className="ml-2">
                            <h6>Chinese</h6>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="http://enposs.vn/"
                          target="_blank">
                          <Badge><img  src={require("assets/img/flags/f_vt.png")}  height="18" alt="Vietnamese Site" /></Badge>
                          <Media  className="ml-2">
                            <h6>Vietnamese</h6>
                          </Media>
                        </Media>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  
                  <select className="form-control-sm text-uppercase font-weight-bold" onChange={handleLanguageChange} onClick={refreshPage} value={language}>
                  {Object.entries(languageOptions).map(([id, name]) => (
                    <option key={id} value={id}>{name}</option>
                  ))}
                  </select>
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