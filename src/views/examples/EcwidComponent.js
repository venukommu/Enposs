import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import {Card,Container,Row,Col } from "reactstrap";
import Background from 'assets/img/theme/purple.jpg';
import CardsFooter from "components/Footers/CardsFooter.js";

class EcwidScript extends React.Component {
    componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
      $(ReactDOM.findDOMNode(this)).html(`
        <div class="strikingly-ecwid-container-2">
          <div id="productBrowser"></div>
          <script>
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
  
  export default function EcwidComponent() {
    return (
      <>
        <DemoNavbar />
        <div className="position-relative">
            <section className="section section-lg section-shaped pb-250">
            <div className="shape shape-style-1 shape-default"
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
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                      <Col lg="12">
                      {/*< ProductList />*/}
                        <div>
                          <h1 className="display-1 text-white text-lead"
                          style={{ textAlign : "left" , fontSize: "48px", fontWeight: "800px", marginTop: "90px" }}>
                            Order FORCE for your home.
                          </h1> 
                          <h3 className="display-4 text-info mt-2" style={{ textAlign : "left" , marginBottom : "60px" }}>
                            Save Money, AND Help Save the Planet.
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
                          FORCE energy-saving device for residential use 
                      </h4>
                      <p>(Contact us for other use-cases.)</p>
        <EcwidScript/>
        </Card>
        </Container>
      </section>
      <CardsFooter />
      </>
    );
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
