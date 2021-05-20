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

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";
import Carousel from "../IndexSections/Carousel.js";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import { appConfig } from "services/config.js";
import ReactMarkdown from "react-markdown";

// index page sections
import Background from 'assets/img/theme/bg.png';
import CountUp from 'react-countup';
import CustomFooter from "components/Footers/CustomFooter";


class Landing extends React.Component {
 
  state = {
    homepagebanner: [],
    homewidgets: [],
    ourcustomers: [],
    productimage: {},
    homepageimage: [],
    plantforceimage: [],
    clientimages: [],
    force: [],
    forceimage: {},
    awesomefeatures:[],
    awesomefeaturesimage: {},
    enpossproducts: [],
    enpossproductsimages: {},
    countupvalue1: 0,
    countupvalue2: 0,
    error: null,
    clientsdata: [],
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
      this.setState({ homepagebanner, homepageimage: homepagebanner.image, homewidgets: homepagebanner.homepagewidgets, countupvalue1: homepagebanner.countupvalue1, countupvalue2: homepagebanner.countupvalue2, plantforceimage: homepagebanner.plantforceimage, clientimages: homepagebanner.clientimages });
    } catch (error) {
      this.setState({ error });
    }

    try {
      const clientsdata = await fetch(`${appConfig.apiURL}/clientsdata`, {
        method: 'GET',
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ clientsdata });
    } catch (error) {
      this.setState({ error });
    }

  };
 
  render() {
    //const { error,homepagebanner,productimage,homepageimage,forceimage,awesomefeaturesimage} = this.state;
    const { error,homepagebanner, homewidgets, countupvalue1, countupvalue2, clientsdata } = this.state;

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
              <div className="shape shape-default"
              style= {{
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: `url("${Background}")`,
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
              <Container className="py-xl-md d-flex">
                <div className="col px-0">
                <Row style={{ marginBottom: "120px" }}>
                    <Col md="8" lg="7" xs="12">
                    {/*< ProductList />*/}
                      <div>
                        <h5 className="display-20 text-white">
                         {/*ENPOSS Inc*/}
                        {/*homepagebanner.Title*/}
                        {/*ENPOSS Inc {" "}*/}
                          {/*<span>completed with examples</span>*/}
                        </h5>
                        <h1 className="display-1 text-dark text-lead"
                        style={{ textAlign : "center" ,fontFamily: "Noto Sans JP", fontSize: "48px", fontWeight: "900", marginTop: "90px" , lineHeight: "125%" }}>
                        {/*homepagebanner.description
       
                        ENPOSS is the manufacturer of FORCE energy saving system. Products are marketed through direct
                        sales, partners, representatives, dealers, and distributors.*/}
                        {/*Save Energy - Save Earth*/}
                        {homepagebanner.Title}
                        {/*"FORCE" - The Driving force to Save Energy, Earth and 'Money'*/}
                        </h1>
                      </div><br />
                      <div className="btn-wrapper">
                        <div>
                        <h3 className="display-4 text-warning mt-2" style={{ textAlign : "center" }}>
                        {/*FORCE is an energy-saving device proven to reduce your energy consumption*/}
                        {homepagebanner.subtitle}
                          {/*Conserve and Preserve*/}
                        </h3>
                      </div>
                      </div>
                  </Col>
                  <Col md="8" lg="5" xs ="12" style={{ marginTop: "90px" }}>
                  <div>
                    <img src={require("assets/img/theme/plant-force.png")} alt ="" style={{ width: "100%" }}/>
                    {/*<img src={`${plantforceimage.url}`} alt ="" style={{ width: "100%" }}/>*/}
                  </div>
                  </Col>
                </Row>
                <Row className="mt--150">
                  {/*<Col lg="2" xs="7"></Col>*/}
                  <Col lg="4" xs="8">
                    <p  className="text-dark text-lead font-weight-bold text-center" style={{ fontSize : "20px"}}>{/*Total CO<sub>2</sub> reduction*/}{homepagebanner.text1}</p>
                      <h3 className="display-7 text-white text-lead" style={{ textAlign : "center" }}>                    
                      <Button
                        className="btn btn-block btn-sm mt-n3"
                        color="danger"
                      >
                      {/*<span  className="text-white text-lead">CO<sub>2</sub>/day</span> <br />
                        <span  className="text-white text-lead">Total Reduced CO<sub>2 &nbsp;&nbsp;&nbsp;</sub></span> <br />*/}
                    <span  style={{ fontSize : "30px" }} className="text-white"> <CountUp end={countupvalue1} separator=","
                      decimals={2} decimal="." /></span> {/*tons*/}{homepagebanner.unit1}
                    </Button>                      
                    </h3>
                    <p  className="text-dark text-lead font-weight-bold text-center mt-n2" style={{ fontSize : "20px"}}>{/*per year*/}{homepagebanner.text3}</p>
                  </Col>                                                                    
                  <Col lg="4" xs="7"> </Col>
                  {/*<Col lg ="2"></Col>*/}
                  <Col lg="4" xs="8">
                    <p  className="text-dark text-lead font-weight-bold text-center" style={{ fontSize : "20px"}}>{/*Total power reduction*/}{homepagebanner.text2}</p>
                    <h3 className="display-7 text-white text-lead" style={{ textAlign : "center" }}>  
                    <Button className="btn btn-block btn-sm mt-n3  ml-auto" color="danger">
                      <span  style={{ fontSize : "30px" }} className="text-white"> <CountUp end={countupvalue2} separator=","  /> </span> {/*KWH*/}{homepagebanner.unit2}
                    </Button>                      
                    </h3>
                    <p  className="text-dark text-lead font-weight-bold text-center mt-n2" style={{ fontSize : "20px"}}>{/*per year*/}{homepagebanner.text3}</p>
                  </Col>

                </Row>
              </div>
            </Container>
              <div className="separator separator-bottom separator-skew">
                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                  <polygon className="fill-white" points="2560 0 2560 100 0 100" />
                </svg>
              </div>
            </section>
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
                              <ReactMarkdown source={widgets.description} allowDangerousHtml={true}/>
                              </p>
                            </div>
                            <Button to={widgets.routername} tag={Link}
                              className="mt-2"
                              color={widgets.classname}
                            >
                              Read More
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>  
              <Row className="justify-content-center text-center">
                <Col lg="12">
                  {/*<h3 className="display-3"><span className="text-warning font-weight-bold display-2">15</span> Years of Service</h3>*/}
                  <ReactMarkdown source={homepagebanner.section2heading} allowDangerousHtml={true}/>
                </Col>
              </Row>
              <Card className="bg-gradient-success shadow-lg border-0 mt-4">
                <div className="p-5">
                  <Row className="row-grid align-items-center text-center">
                    <Col lg="12">
                      <ReactMarkdown source={homepagebanner.section2text1} allowDangerousHtml={true}/>
                      <ReactMarkdown source={homepagebanner.section2text2} allowDangerousHtml={true}/>
                    </Col>
                  </Row>
                </div>
              </Card>
         <Carousel />
           <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="12">
                  <ReactMarkdown source={homepagebanner.section3paragraph} allowDangerousHtml={true}/>
                  <h4 className="display-3 font-weight-bold pt-3">{/*Some of Our Clients*/}{homepagebanner.ourclientstitle}</h4><br />
                  <Row>
                  {clientsdata.sort((a, b) =>  b.id - a.id).slice(0, 3).map(img => (                 
                  <Col className="mb-5 mb-lg-0" lg="4" md="6" key={img.id} to="/clients" tag={Link}>
                    <div className="px-4" >
                    <img
                      alt="..."
                      className="rectangle img-center img-fluid shadow shadow-lg--hover"
                      src={`${img.image.url}`}
                      //style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">{/*Blue Ash Recreation Center*/}{img.Title}</span>
                        <h6 className="text-info">{img.subtitle}</h6>
                      </h5>
                    </div>
                    </div>
                  </Col>
                  ))}
                  </Row>

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

export default Landing;

