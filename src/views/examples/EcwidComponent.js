import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import {Card,Container,Row,Col,CardBody,
  CardImg } from "reactstrap";
//import Background from 'assets/img/theme/purple.jpg';
import CardsFooter from "components/Footers/CardsFooter.js";
import { appConfig } from "services/config.js";
import { Link } from "react-router-dom";
//import Table from "views/examples/Table";
//import TableResponsive from "views/examples/TableResponsive";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("assets/img/theme/image1.jpg"),
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: require("assets/img/theme/image2.jpg"),
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: require("assets/img/theme/image3.jpg"),
    altText: '',
    caption: '',
    header: ''
  }
];
class EcwidScript extends React.Component {
   currentURL = window.location.href

    componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
      $(ReactDOM.findDOMNode(this)).html(`
        <div class="strikingly-ecwid-container-2">
          <div id="productBrowser"></div>
          <script>
          ecwidMessages = {
            "PriceIncludedWidget.price_included":"Price including"
            }
            ecwidLoaded = false;
            function load_ecwid() {
              Ecwid.OnAPILoaded.add(function() {
                if (!ecwidLoaded) {
                  ecwidLoaded = true;
                  xProductBrowser("categoriesPerRow=3", "views=grid(3,3) list(10) table(20)", "categoryView=grid", "searchView=list", "id=productBrowser");
                }
              });
            }
            window.ecwid_dynamic_widgets = true;
            if (!document.getElementById('ecwid-script')) {
              var script = document.createElement('script');
              script.charset = 'utf-8';
              script.type = 'text/javascript';
              script.src = 'https://app.ecwid.com/script.js?48163008&data_platform=strikingly';
              script.id = 'ecwid-script'
              script.onload = load_ecwid
              document.body.appendChild(script);
            } else {
              load_ecwid()
            }
          </script>
        </div>
      `)
    }
  
    componentWillUnmount() {
      window.Ecwid.destroy()
      window.ecwidLoaded = false;
    }
    render() {
     
      return <div id="content"></div>
    }
  }
  
  export default class EcwidComponent extends React.Component {
    state = {
      error: null,
      storecontent: []
    };
  
    componentDidMount = async () => {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
  
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
          const storecontent = await fetch(`${appConfig.apiURL}/shop`, {
            method: 'GET',
            headers: headers,
          })
            .then(checkStatus)
            .then(parseJSON);
          this.setState({ storecontent });
        } catch (error) {
          this.setState({ error });
        }
      }
      render() {
        const currentURL = window.location.href
        const pathname = window.location.pathname
        console.log("pathname",pathname )
        const { error, storecontent} = this.state;
  
          // Print errors if any
        if (error) {
          return <div>An error occured: {error.message}</div>;
        }
    return (
      <>
        <DemoNavbar />
        <div className="position-relative">
            <section className="section section-lg section-shaped pb-250">
            <div className="shape"
                style={{backgroundColor: "#2B0752"}}
            >
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
                  <Row>
                      <Col lg="12">
                      {/*< ProductList />*/}
                        <div>
                          <h1 className="display-1 text-white text-lead"
                          style={{ textAlign : "left" ,fontFamily: "Noto Sans JP", fontSize: "48px", fontWeight: "900", marginTop: "90px" , lineHeight: "125%" }}>
                            {/*Order FORCE for your home.*/}{storecontent.Title}
                          </h1> <br />
                          <h3 className="display-4 text-info mt-2" style={{ textAlign : "left" , marginBottom : "60px" }}>
                            {/*Save Money, AND Help Save the Planet.*/}{storecontent.subtitle}
                        </h3>                     
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
          </div>
      <section className="section section-lg pt-lg-0 mt--200">
        <Container>
        <Card className="card-profile shadow mt--200 bg-secondary p-4">
        <h4 className="display-3 font-weight-bold text-primary">
                          {/*}    {companystory.Title}*/}
        {/*FORCE energy-saving device for residential use*/}{storecontent.heading} 
        </h4><br />
        <Link to="/contact" onClick={() => {window.location.href="/contact"}} >{/*(Contact us for other use-cases.)*/}{storecontent.subheading}</Link>
        <EcwidScript/>
       </Card>
       {((currentURL === "https://www.enposs.us/store#!/Force/p/296981076/category=0") || (currentURL === "https://www.enposs.com/store#!/Force/p/296981076/category=0") || (currentURL === "http://localhost:3000/store#!/Force/p/296981076/category=0"))  ? 
        <Card className="card-profile shadow mt--50 bg-secondary p-4">
        <h3 className="text-warning">Installation Rebate</h3>
        <p style ={{fontSize:"18px"}}>upto $290 with validated installation receipt. Fill out the rebate form <strong>&#8595;</strong>
        </p> <a href="https://forms.gle/bSfvuVTyBgMJhcgB8" target="_blank" rel="noopener noreferrer">https://forms.gle/bSfvuVTyBgMJhcgB8</a> <br /><br />
      <h2> Product Details</h2>
      <Row> <Col lg="5">
            <CardBody>
              <CardImg alt="Force" src={`${require("assets/img/theme/blueforce.png")}`}/>
            </CardBody>
          </Col>
      <Col lg="7">
       <br/><br/>
        <ul style ={{fontSize:"18px"}}>
        <li>Weight: 3.00 kg</li><br/>
        <li>Phase 2 Wire, 5Kw</li><br/>
        <li>Wx L xH = 80mm x 130mm x 35mm</li><br/>
        <li>For residential up to 4,000sq or 1,500 kw/h usage</li><br/>
        <li>“If residential is above 4,000sq or usage over 1,500 kw/h then please contact us for a quote. </li></ul></Col></Row>     
      <Row> <Col lg="7">   
        <h3><br /><span className="text-warning">A</span>ctive <span className="text-warning">P</span>ower <span className="text-warning">S</span>aving By <span className="text-warning">I</span>ncreasing <span className="text-warning">C</span>onductivity</h3>
        <br />
        <p style ={{fontSize:"18px"}}>One of FORCE Key elements, EMF-7, is an application of 
          nano-working and mixing of minerals from nature.
          This application [EMF-7] increases electrical conductivity 
          and reduces impedance, heat, noise and vibration.
          By improving the efficiency of the power system,
          power saving can be realized.</p></Col>
        <Col lg="5">
              <CardBody>
                <CardImg style ={{height: "75%"}} alt="APSIC" src={`${require("assets/img/theme/apsic.png")}`}/>
              </CardBody>
        </Col>
      </Row><br /><br />
    <h2> Product Description</h2>
    <Row className="justify-content-center text-center">
                <Col lg="2" md="6">
                  <div>
                    <img
                      alt="..."
                      className="rectangle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/electricbillsaving.png")}
                      //style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col lg="2" md="6">
                  <div>
                    <img
                      alt="..."
                      className="rectangle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/electricity.png")}
                      //style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col  lg="2" md="6">
                  <div>
                    <img
                      alt="..."
                      className="rectangle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/reduceimpedence.png")}
                      //style={{ width: "200px" }}
                    />
                  </div>
                </Col> 
                <Col lg="2" md="6">
                  <div>
                    <img
                      alt="..."
                      className="rectangle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/reduceharmonic.png")}
                      //style={{ width: "200px" }}
                    />
                  </div>
                </Col> 
                <Col lg="2" md="6">
                  <div>
                    <img
                      alt="..."
                      className="rectangle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/reduceimpedence.png")}
                      //style={{ width: "200px" }}
                    />
                  </div>
                </Col> 
   </Row>
    <h4> <br /> R.O.I (return of investment)</h4>
    <ul style ={{fontSize:"18px"}}>
    <li>This is table of ROI (return of investment) in month</li>
    <li>For example, if your monthly electricity bill is about $200, your return of investment takes 30 month with 15% saving by FORCE</li>
    <li>Four slashed cases are not recommended</li></ul> 
   {/*} <TableResponsive style={{textAlign: "center"}}></TableResponsive><br /><br />*/}
    <Row className="justify-content-center text-center"> <Col lg="8">
    <CardBody>
        <CardImg alt="Table" src={`${require("assets/img/theme/table.png")}`}/>
    </CardBody></Col></Row>
    {/*<Table></Table>*/}
    {" "}
    <h4>Image Examples Of Installed FORCE</h4>
    <p style ={{fontSize:"18px"}}>Residential Installation(United States)</p>
   {/*} <Row>
                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rectangle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/image1.jpg")}
                      //style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rectangle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/image2.jpg")}
                      //style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rectangle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/image3.jpg")}
                      //style={{ width: "200px" }}
                    />
                  </div>
                </Col> 
    </Row>*/} <br />
   <Row  className="justify-content-center text-center">
   <Col lg="8">
   <UncontrolledCarousel items={items} /></Col></Row>
        </Card> : ''}
        </Container>
        </section>
      <CardsFooter />
      </>
    );
  }
}
  
  const content = document.getElementById('content')

  //document.getElementById('page1').addEventListener('click', () => {
  //  ReactDOM.render(<EcwidComponent/>, content)
  //})
  //document.getElementById('page2').addEventListener('click', () => {
  //  ReactDOM.render(<PageComponent/>, content)
  //})
 
  if (content) {
        ReactDOM.render(<EcwidComponent/>, content)
  }
