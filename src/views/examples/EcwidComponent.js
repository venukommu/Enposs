import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import {Card,Container,Row,Col } from "reactstrap";

class EcwidScript extends React.Component {
    componentDidMount() {
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
        <DemoNavbar /><section className="section-profile-cover section-shaped my-0">
        <div className="shape shape-style-1 shape-default bg-gradient-warning alpha-4">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <Container className="shape-container d-flex align-items-center py-lg">
          <div className="col px-0">
            <Row className="align-items-center justify-content-center">
              <Col className="text-center" lg="6">
                <h1 className="display-3 text-white">Enposs Products</h1>
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
      <section className="section section-lg pt-lg-0 mt--200">
        <Container>
        <Card className="card-profile shadow mt--200" >
        <EcwidScript/>
        </Card>
        </Container>
      </section>
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
