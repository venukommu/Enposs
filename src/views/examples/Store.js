import React from 'react';
import { useEffect, useRef,useState } from "react";
import { withRouter } from "react-router";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import { Button,Card,Container,Row,Col } from "reactstrap";

const Store=(props) => {
  
    const storeDiv = useRef(null);
    const scriptRef = useRef(null);

    window.localStorage.setItem("show_ecwid_logs","true")
    window.ecwid_script_defer = true;
    window.ecwid_dynamic_widgets = true;
    window.ec = window.ec || Object();
    window.ec.storefront = window.ec.storefront || Object();
    window.ec.enable_catalog_on_one_page = true;
    window._xnext_initialization_scripts = [{
      widgetType: 'ProductBrowser',
      id: 'my-store-48163008',
      arg: ["id=productBrowser", "views=grid(20,3)"]  },
      {
        widgetType: 'CategoriesV2',
        id: 'my-categories-48163008',
        arg: ["id=categoriesV2"]
      }
      ,
      {
        widgetType: 'SearchWidget',
        id: 'my-search-48163008',
        arg: ["id=searchWidget"]
      }
    ];
   // document.getElementById('my-store-1003').appendChild(script);

    const script = document.createElement('script');
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.src = 'https://app.ecwid.com/script.js?48163008';
    script.defer = true;
    script.ref=scriptRef;
    script.async = true;

  useEffect(() => {
    console.log(!scriptRef.current)
      if(!scriptRef.current){
        storeDiv.current.appendChild(script);
      }
  });


    return (
      <>
        <DemoNavbar />
        
        <section className="section-profile-cover section-shaped my-0">
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
        <Card className="card-profile shadow mt--200">
        <div id="my-search-48163008"></div>
        <div id="my-categories-48163008"></div>
        <div id="my-store-48163008" ref={storeDiv}></div>
        <div className="ec-cart-widget"></div>
        </Card>
        </Container>
      </section>
      </>
      );

    }

    export default Store;


    