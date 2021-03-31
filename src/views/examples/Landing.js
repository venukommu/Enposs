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
// nodejs library that concatenates classes
//import classnames from "classnames";
import { Link } from "react-router-dom";
//import BuyButton from './BuyButton';


// reactstrap components
import {
  //Badge,
  Button,
  Card,
  CardBody,
  //CardImg,
  Container,
  Row,
  Col
} from "reactstrap";
import Carousel from "../IndexSections/Carousel.js";
//import Login from "../IndexSections/Login.js";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import { appConfig } from "services/config.js";

// index page sections
//import Download from "../IndexSections/Download.js";
import Background from 'assets/img/theme/pexels-quang-nguyen-vinh-2131935.jpg';
import CountUp from 'react-countup';
import CustomFooter from "components/Footers/CustomFooter";

class Landing extends React.Component {
  
  state = {
    homepagebanner: [],
    homewidgets: [],
    ourcustomers: [],
    productimage: {},
    homepageimage: [],
    force: [],
    forceimage: {},
    awesomefeatures:[],
    awesomefeaturesimage: {},
    enpossproducts: [],
    enpossproductsimages: {},
    error: null,
  };

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
      const homepagebanner = await fetch(`${appConfig.apiURL}/home`, {
        method: 'GET',
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ homepagebanner, homewidgets: homepagebanner.homewidgets });
    } catch (error) {
      this.setState({ error });
    }

    /*try {
      const homepagewidgets = await fetch(`${appConfig.apiURL}/homepagewidgets`, {
        method: 'GET',
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ homepagewidgets });
    } catch (error) {
      this.setState({ error });
    }
    try {
      const ourcustomers = await fetch(`${appConfig.apiURL}/ourcustomers`, {
        method: 'GET',
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ ourcustomers, productimage:ourcustomers.image });
    } catch (error) {
      this.setState({ error });
    }

    try {
      const force = await fetch(`${appConfig.apiURL}/force`, {
        method: 'GET',
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ force, forceimage:force.image });
    } catch (error) {
      this.setState({ error });
    }

    try {
      const awesomefeatures = await fetch(`${appConfig.apiURL}/awesomefeatures`, {
        method: 'GET',
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ awesomefeatures,awesomefeaturesimage:awesomefeatures.image });
    } catch (error) {
      this.setState({ error });
    }

    try {
      const enpossproducts = await fetch(`${appConfig.apiURL}/enpossproducts`, {
        method: 'GET',
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ enpossproducts,enpossproductsimages:enpossproducts.images });
    } catch (error) {
      this.setState({ error });
    }*/

  };
  
  render() {
    //const { error,homepagebanner,productimage,homepageimage,forceimage,awesomefeaturesimage} = this.state;
    const { error,homepagebanner, homewidgets } = this.state;
    console.log(homewidgets);
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
            <section className="section section-lg section-shaped pb-180">
              <div className="shape  shape-default"
              style= {{
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: `url("${Background}")`,
                //backgroundImage: `url(${require('assets/img/theme/main1.jpg')})`
                //backgroundImage:`url(${appConfig.apiURL}${homepageimage.url})`,
               }}>
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
                <Row style={{ marginBottom: "120px" }}>
                    <Col md="8" lg="7">
                    {/*< ProductList />*/}
                      <div>
                        <h5 className="display-20 text-white">
                         {/*ENPOSS Inc*/}
                        {/*homepagebanner.Title*/}
                        {/*ENPOSS Inc {" "}*/}
                          {/*<span>completed with examples</span>*/}
                        </h5>
                        <h1 className="display-1 text-white text-lead"
                        style={{ textAlign : "left" ,fontFamily: "Noto Sans JP", fontSize: "48px", fontWeight: "900", marginTop: "90px" , lineHeight: "125%" }}>
                        {/*homepagebanner.description
        
                        ENPOSS is the manufacturer of FORCE energy saving system. Products are marketed through direct 
                        sales, partners, representatives, dealers, and distributors.*/}
                        {/*Save Energy - Save Earth*/}
                        {homepagebanner.Title}
                        {/*"FORCE" - The Driving force to Save Energy, Earth and 'Money'*/}
                        </h1>
                      </div>
                      <div className="btn-wrapper">
                        {/*<Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="warning"
                         href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-plug" />
                          </span>
                          <span className="btn-inner--text">FORCE</span>
                        </Button>
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          // href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-lightbulb-o" />
                          </span>
                          <span className="btn-inner--text">
                            Energy Saving
                          </span>
                        </Button>*/}
                        <div>
                        <h3 className="display-4 text-info mt-2" style={{ textAlign : "left" }}>
                        {/*FORCE is an energy-saving device proven to reduce your energy consumption*/}
                        {homepagebanner.subtitle}
                          {/*Conserve and Preserve*/}
                        </h3> <br />
                        <Row>
                          {/*<Col md="4" xs="6"></Col>*/}
                          <Col xs="7" md="6">
                          <p  className="text-white text-lead font-weight-bold text-center" style={{ fontSize : "20px"}}>Total CO<sub>2</sub> reduction</p> 
                            <h3 className="display-7 text-white text-lead" style={{ textAlign : "center" }}>                    
                            <Button 
                              className="btn btn-block btn-sm mt-n3"
                              color="danger"
                            >
                              {/*<span  className="text-white text-lead">CO<sub>2</sub>/day</span> <br />
                               <span  className="text-white text-lead">Total Reduced CO<sub>2 &nbsp;&nbsp;&nbsp;</sub></span> <br />*/}
                            <span  style={{ fontSize : "30px" }} className="text-white"> <CountUp end={18121.12} separator=","
                              decimals={2} decimal="." /></span> tons
                            </Button>                      
                            </h3>
                            <p  className="text-white text-lead font-weight-bold text-center mt-n2" style={{ fontSize : "20px"}}>per year</p>
                          </Col>                                                                     
                         {/*} <Col xs="6" md="6"> 
                            <h5 className="display-7 text-white text-lead"
                              style={{ textAlign : "left",paddingTop: "20px" }}>
                              <span  className="text-white text-lead">Total Reduced CO<sub>2</sub></span>
                            </h5>
                      </Col>*/}
                       {/*} </Row>
                        <Row>*/}
                          {/*<Col md="4" xs="6"></Col> btn-icon mt-2 mb-3 mb-sm-0*/}
                          <Col xs="7" md="6">
                           <p  className="text-white text-lead font-weight-bold text-center" style={{ fontSize : "20px"}}>Total power reduction</p> 
                            <h3 className="display-7 text-white text-lead" style={{ textAlign : "center" }}>   
                            <Button 
                              className="btn  btn-block btn-sm mt-n3"
                              color="danger"
                            >                                                                          
                              {/*<span  className="text-white text-lead">power/day</span> <br />*/}
                              <span  style={{ fontSize : "30px" }} className="text-white"> <CountUp end={38886516} separator=","  /> </span> KWH
                            </Button>                      
                            </h3>
                            <p  className="text-white text-lead font-weight-bold text-center mt-n2" style={{ fontSize : "20px"}}>per year</p> 
                          </Col>
                         {/*} <Col xs="6" md="6"> 
                            <h5 className="display-7 text-white text-lead"
                              style={{ textAlign : "left",paddingTop: "20px"}}>
                              <span  className="text-white text-lead">Total Reduced power</span>
                            </h5>
                    </Col>*/}
                        </Row>
                        {/*} <h4 className="display-7 text-white"
                          style={{ textAlign : "justify" }}>
                        <span className="text-white">Our mission - Reduce carbon Emission </span>
                          </h4>*/}
                      </div>
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
          <section className="section section-lg pt-lg-0 mt--100">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                  {homewidgets.map(widgets => (
                      <Col lg="4" key={widgets.id}>
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="text-center mt-2">
                            <div className={'icon icon-shape icon-shape-' + widgets.classname + ' rounded-circle mb-2'}>
                              <i className={widgets.iconname} />
                            </div>
                            <div>
                              <h6 className={"text-" + widgets.classname + " text-uppercase"} style={{ textAlign : "center" }}>
                                {/*About Company*/}
                                {widgets.Title}
                              </h6>
                              <p className="description mt-3 text-dark"
                              style={{ textAlign : "left" }}>
                              {widgets.paragraph1}
                              </p>
                              <p className="description mt-3 text-dark"
                                style={{ textAlign : "left" }}>
                                {widgets.paragraph2}
                              </p>   
                            </div>
                            <Button to={widgets.routername} tag={Link}
                              className="mt-2"
                              color={widgets.classname}
                              //href="#pablo"
                              //onClick={e => e.preventDefault()}
                            >
                              Read More
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    ))}
                    {/*ENPOSS Inc. was started in Year 2005 with the express intent to bring cost effective
                      energy saving technology into our ENPOSS system.}*/}
                    {/*<Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="text-center mt-2">
                        <div className="icon icon-shape icon-shape-info rounded-circle mb-2">
                            <i className="fa fa-money" /> 
                          </div>
                          <div>
                          <h6 className="text-info text-uppercase" style={{ textAlign : "center" }}>
                            Save Money
                          </h6>  
                            <p className="description mt-3 text-dark"
                              style={{ textAlign : "left" }}>
                              Living in a world of uncertainty and inflation can be hard and complicated.
                            </p>
                            <p className="description mt-3 text-dark"
                              style={{ textAlign : "left" }}>
                              That’s why we made FORCE – a device which helps households and businesses save money by saving energy, the smart way.<br /><br /><br />
                            </p>                            
                          </div>
                          {/*<div>
                            <Badge color="primary" pill className="mr-1">
                              design
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              system
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              creative
                            </Badge>
                          </div>
                          
                          <Button to="/ourstory" tag={Link}
                            className="mt-2"
                            color="info"
                            //href="#pablo"
                            //onClick={e => e.preventDefault()}
                          >
                            Read More
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="text-center mt-2">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-2">
                            <i className="fa fa-globe" /> 
                          </div>
                          <div>
                          <h6 className="text-success text-uppercase" style={{ textAlign : "center" }}>
                            Save the Planet
                          </h6>
                          <p className="description mt-3 text-dark"
                              style={{ textAlign : "left" }}>
                              ENPOSS helps you to take the initiative to reduce your own carbon footprint by cutting your electricity usage.
                            </p>
                            <p className="description mt-3 text-dark"
                              style={{ textAlign : "left" }}>
                              This has the added benefit of helping clean the air we breathe &mdash; by reducing the amount of energy we waste, and by reducing our need for fossil fuels used to produce electricity in the first place.
                            </p>
                          </div>
                          {/*<div>
                            <Badge color="warning" pill className="mr-1">
                              marketing
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              product
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              launch
                            </Badge>
                          </div>
                          <Button to="/forceprinciples" tag={Link}
                            className="mt-2"
                            color="success"
                            //href="#pablo"
                            //onClick={e => e.preventDefault()}
                          >
                            Read more
                          </Button>
                        </CardBody>
                      </Card>
                      </Col>                    
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="text-center mt-2">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="fa fa-bolt" />
                          </div>
                          <div>
                            <h6 className="text-primary text-uppercase mt-n3">
                            Use FORCE
                            </h6>
                            <p className="description mt-3 text-dark"
                            style={{ textAlign : "left" }}>
                              FORCE energy-saving products are small, user-friendly devices that can be used in offices, factories, homes, and anywhere electricity is used.
                            </p>
                            <p className="description mt-3 text-dark" style={{ textAlign : "left" }}>Here we offer our domestic product, for residential properties up to 4,000 ft<sup>2</sup> or 1,500 kw/h usage.<br /></p>
                          </div>
                          {/*<div>
                            <Badge color="success" pill className="mr-1">
                              business
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              vision
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              success
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="/force"
                            //href="#pablo"
                            //onClick={e => e.preventDefault()}
                          >
                            Read more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>*/}
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>  
              <Row className="justify-content-center text-center">
                    <Col lg="12">
                      <h3 className="display-3"><span className="text-warning font-weight-bold display-2">15</span> Years of Service</h3>
                    </Col>
              </Row>
              <Card className="bg-gradient-success shadow-lg border-0 mt-4">
                <div className="p-5">
                  <Row className="row-grid align-items-center text-center">
                    <Col lg="12">
                      <h3 className="text-white font-weight-bold">
                      FORCE Reduces Power Consumption by a total of <span className="text-warning btn btn-sm btn-round" style={{fontSize:"38px",fontWeight:"900px",background:"white"}}>106538.4</span> Kwh/day
                      </h3>
                      <h3 className="text-white font-weight-bold">
                      FORCE Reduces Carbon Dioxide by a total of <span className="text-warning btn btn-sm btn-round" style={{fontSize:"38px",fontWeight:"900px",background:"white"}}>49.65</span> tons/day
                      </h3>
                    </Col>
                  </Row>
                </div>
              </Card>
             {/*} <Row className="justify-content-center text-center">
                <Col lg="12">
                        <h4 className="display-3"><span className="text-info font-weight-bold">For smart energy efficient homes to combat climate change.</span></h4>
                </Col>
                  </Row>*/}
         <Carousel />
             {/*<section className="section">
             <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    //src={require("assets/img/theme/en bulb.jpg")}
                    src={`${appConfig.apiURL}${awesomefeaturesimage.url}`}
                    />
                </Col>
              <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    {/* <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div> 
                    <h3>{this.state.awesomefeatures.Title}</h3>
                    <p>
                    {this.state.awesomefeatures.description}</p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="success">
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                            {this.state.awesomefeatures.item1}</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="success">
                              <i className="fa fa-plug" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">{this.state.awesomefeatures.item2}</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge className="badge-circle mr-3" color="success">
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                            {this.state.awesomefeatures.item3}</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                        </Col>
              </Row>
             </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      //src={require("assets/img/theme/img-1-1200x1000.jpg")}
                      src={`${appConfig.apiURL}${productimage.url}`}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                      {this.state.ourcustomers.imagetitle}
                      </h4>
                      <p className="lead text-italic text-white">
                      {this.state.ourcustomers.imagedescription}</p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    {/*<div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>{this.state.ourcustomers.Title}</h3>
                    <p className="lead"  style={{ textAlign : "justify" }}>
                    {this.state.ourcustomers.description}
                    </p>
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      {/*A beautiful UI Kit for impactful websites
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      //src={require("assets/img/theme/u02_0.png")}
                      src={`${appConfig.apiURL}${forceimage.url}`}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white"> {this.state.force.title}</h4>
                     {/* <p className="text-white">
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever.
                  </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                          {this.state.force.singlephasetitle}
                          </h5>
                          <p style={{textAlign : "justify"}}>
                          {this.state.force.singlephasedesc}
                          </p>
                          <a
                            className="text-success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            {/*Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">
                          {this.state.force.threephasetitle}
                          </h5>
                          <p style={{textAlign : "justify"}}>{this.state.force.threephasedesc}</p>
                          <a
                            className="text-warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            {/*Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>                  
                </Col>
              </Row>
            </Container>
            {/* SVG separator 
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
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">The amazing Team</h2>
                  <p className="lead text-muted">
                  Teamwork is the ability to work together toward a common vision, the ability to direct individual accomplishments toward organizational objectives. 
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/default.png")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Ryan Tompson</span>
                        <small className="h6 text-muted">Electric Engineer</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Romina Hadid</span>
                        <small className="h6 text-muted">
                          Power Engineer
                        </small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-3-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Alexander Smith</span>
                        <small className="h6 text-muted">Maintainence Engineer</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">John Doe</span>
                        <small className="h6 text-muted">Founder and CEO</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg pt-0">
            <Container>
              <Card className="bg-gradient-warning shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="8">
                      <h3 className="text-white">
                      Force power-saving technology
                      </h3>
                      <p className="lead text-white mt-3">
                      Force power-saving device has won the title of National Excellent 
                      Product and the Green Technology Certification Award issued by the Korean State. 
                      </p>
                    </Col>
                    <Col className="ml-lg-auto" lg="3">
                      {/*<Button
                        block
                        className="btn-white"
                        color="default"
                        href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        size="lg"
                      >
                        Download React
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section>
          {/*<section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">Build something</h2>
                  <p className="lead text-white">
                    According to the National Oceanic and Atmospheric
                    Administration, Ted, Scambos, NSIDClead scentist, puts the
                    potentially record low maximum sea ice extent tihs year down
                    to low ice.
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-settings text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Building tools</h5>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-ruler-pencil text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Grow your market</h5>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-atom text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Launch time</h5>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
              </Row>
            </Container>
            {/* SVG separator
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
                      <h4 className="mb-1">Want to work with us?</h4>
                      <p className="mt-0">
                        Your project is very important to us.
                      </p>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused
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
                          focused: this.state.emailFocused
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
          <Login />
          <Download />*/}
           <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="12">
                  <h2 className="display-3">We&#39;re going places</h2>
                  <p className="lead text-muted mt-n2">
                  FORCE is used in more than 7 countries, and still counting.<br />
                  Over 1234 customers, companies and industries use FORCE globally.
                  </p>
                  <h4 className="display-3 font-weight-bold pt-3">Some of Our Clients</h4><br />
                  <Row>
                  <Col className="mb-5 mb-lg-0" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rectangle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/A18040103_10002_0.jpg")}
                      //style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Blue Ash Recreation Center</span>
                        <h6 className="text-info">Ohio, USA</h6>
                      </h5>
                     {/*} <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>*/}
                    </div>
                  </div>
                {/*}  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">John Doe</span>
                        <small className="h6 text-muted">Customer Review</small>
                      </h5>
                      <p> Over 1234 customers, companies and industries use Force globally. </p>
                    <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
</div>
                    </div>
                  </div>
                </Col>*/}
                </Col>
                    <Col className="mb-5 mb-lg-0" lg="4" md="6">
                    <div className="px-4">
                      <img
                        alt="..."
                        className="rectangle img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/theme/A18040103_10004_0.jpg")}
                        //style={{ width: "200px" }}
                      />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Mc Donald's</span>
                        {/*<small className="h6 text-muted">Mc donald's</small>*/}
                      </h5>
                      <h6 className="text-info">Ohio, USA</h6>
                     {/*} <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
    </div>*/}
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rectangle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/A18040103_10003_0.jpg")}
                      //style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">City of Seymour</span>
                        <h6 className="text-info">Wisconsin, USA</h6>
                        {/*<small className="h6 text-muted">
                          Customer Review
                        </small>*/}
                      </h5>
                     {/*} <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>*/}
                    </div>
                  </div>
                </Col>
              </Row> 
                  {/*<Link className="display-4">See customer stories</Link>*/}
            </Col>
         </Row>
             {/*} <Row>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Ryan Tompson</span>
                        <small className="h6 text-muted">Customer Review</small>
                      </h5>
                      <p> FORCE saves consumption and safe to use.
                      FORCE saves power usage and gives satisfaction that we do our part in saving Carbon footprint.
</p>
                     <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
    </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Romina Hadid</span>
                        <small className="h6 text-muted">
                          Customer Review
                        </small>
                      </h5>
                      <p> FORCE saves consumption and safe to use.
                      FORCE saves power usage and gives satisfaction that we do our part in saving Carbon footprint.
</p>                    <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
  </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-3-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Alexander Smith</span>
                        <small className="h6 text-muted">Customer Review</small>
                      </h5>
                      <p> FORCE saves consumption and safe to use.
                      FORCE saves power usage and gives satisfaction that we do our part in saving Carbon footprint.
</p>                     <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
</div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">John Doe</span>
                        <small className="h6 text-muted">Customer Review</small>
                      </h5>
                      <p> FORCE saves consumption and safe to use.
                      FORCE saves power usage and gives satisfaction that we do our part in saving Carbon footprint.</p>                     
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
</div>
                    </div>
                  </div>
                </Col>
              </Row>*/}
            </Container>
          </section>
             {/*<section className="section section-lg pt-0">
            <Container>
              <Card className="bg-gradient-warning shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="8">
                      <h3 className="text-white">
                      Choose a better way to live and save.
                      </h3>
                   <p className="lead text-white mt-3">
                        I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers. I
                        understand culture.
        </p>
                    </Col>
                    <Col className="ml-lg-auto" lg="3">
                      <Button
                        block
                        className="btn-white"
                        color="default"
                        to="/store"  tag={Link}
                        size="lg"
                      >
                        Shop
                      </Button>
                      <Button
                        block
                        className="btn-white"
                        color="default"
                        //href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        size="lg"
                      >
                        Talk to sales
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section>*/}
        </main>
        {/*<section>
        <Container className="container-lg">
          {/* shopping cart with Stripe integration Code
            {/*<div>
             {/*<Products />
             <Store />
            </div>
              {/* Snipcart Code
              <h3 className="text-danger"> Snipcart demo</h3>
              <Row> 
            {this.state.enpossproducts.map(products => (
              <Col className="mb-5 mb-md-0" md="6" key={products.id}>
                <Card className="card-lift--hover shadow border-0">
                  <Link to={`/product/${products.id}`}>
                    <CardImg
                      alt="..."
                      //src={require("assets/img/theme/single phase.jpg")}
                      src={`${appConfig.apiURL}${products.images.url}`}
                    />
                  </Link>
                </Card>
              <BuyButton products={products} />
              </Col>
              ))}
            </Row>
            {/* End Snipcart Code
             {/*} <AppProvider>
<Cart products={this.state.enpossproducts}/>
            </AppProvider>
              {/*<Col className="mb-5 mb-lg-0" md="6">
                <Card className="card-lift--hover shadow border-0">
                  <Link to="#">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/3 phase.jpg")}
                    />
                  </Link>
                </Card>
                <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Buy Now
                        </Button>
            </Col>
    </Container>
    </section>*/}
    <CustomFooter />
    <CardsFooter />
    </>
    );
  }
}

export default Landing;