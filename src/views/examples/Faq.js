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

// reactstrap components
import {
 // Badge,
 //Button,
  Card,
 // CardBody,
  //CardImg,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
//import { appConfig } from "services/config.js";
//import ReactMarkdown from "react-markdown";

class Faq extends React.Component {
  executeOnClick(isExpanded) {
    console.log(isExpanded);
}
  state = {
    error: null,
    companystory: [],
    homepageimage: [],

  };

  componentDidMount = async () => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
   // this.refs.main.scrollTop = 0;

    //const parseJSON = resp => (resp.json ? resp.json() : resp);

    // Checks if a network request came back fine, and throws an error if not
    /*const checkStatus = resp => {
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
        const companystory = await fetch(`${appConfig.apiURL}/ourstory`, {
          method: 'GET',
          headers: headers,
        })
          .then(checkStatus)
          .then(parseJSON);
        this.setState({ companystory });
      } catch (error) {
        this.setState({ error });
      }*/

  };
  
  render() {
    //const { error} = this.state;

    // Print errors if any
    //if (error) {
    //  return <div>An error occured: {error.message}</div>;
    //}
    return (
      <>
        <DemoNavbar />
        <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
            <div className="shape shape-default bg-gradient-default alpha-4">
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
                    <Col lg="6">
                    {/*< ProductList />*/}
                    <div>
                        <h1 className="display-3 text-white" style={{ textAlign : "left" ,fontFamily: "Noto Sans JP", fontSize: "48px", fontWeight: "900", marginTop: "90px" , lineHeight: "125%" }}>
                        Q & A
                        </h1>
                      <h3 className="display-4 text-info"
                        style={{ textAlign : "left" , marginBottom: "80px" }}>
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
            {/* 1st Hero Variation */}
          </div>
           
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <div className="mt-3 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p style={{ textAlign : "left"}}>
        <div className="font-weight-bold">Q. Will there be any problems with the main panel after installing the FORCE?</div><br />
        
        <div className="text-danger">&emsp; A. No,</div><br />
    
        There will be no problems at all with the main panel because of the Force.<br /><br />
    
        <div className="font-weight-bold">Q. What if the FORCE gets heat during the operation?</div><br />
    
        <div className="text-danger">&emsp; A. There is no reason to get heat during operation.</div><br />
    
        The FORCE might get some heat, but it won’t get hot.<br /><br />
    
        <div className="font-weight-bold">Q. What should I do with the FORCE if I move to other places after install?</div><br />
         
        <div className="text-danger">&emsp;A. You can easily uninstall the Force out of an existing location and re-install at a new location, at this moment only think about whether the capacity of FORCE is proper or not. Also, we don’t provide installation service at this time, so customers are responsible for uninstalling and installing.</div><br />
    
        <div className="font-weight-bold">Q. Which location should the FORCE be installed?</div><br />
        <div className="text-danger">&emsp;A. The best location to install FORCE is secondary of the main circuit breaker of the main distribution board. (For more detail, please visit our website you can find installation under SUPPORT.)</div><br />
    
        <div className="font-weight-bold">Q.Does the main panel need to be turned off during the FORCE installation?</div><br />
        <div className="text-danger">&emsp;A. Yes,</div><br />
        For your safety, if you don't shut the main panel you will get injured (electric shock) by electricity.<br /><br />
    
        <div className="font-weight-bold">Q. How much electricity bill will be saved with the FORCE?</div><br />
        <div className="text-danger">&emsp;A. More than 5%,</div><br />
        The saving ratio will vary depending on the circumstances, and it is hard to calculate when it comes to electricity bill cost. But average saving will be up to 5%~15%<br /><br />
        <div className="font-weight-bold">Q. What's the principle of energy-saving? / How does FORCE reduce power consumption? </div><br />
        <div className="text-danger">&emsp;A. The FORCE, saves active power by increasing conductivity. And it reduces electrical losses by excess free electrons. (Active Power Saving by Increasing Conductivity)</div><br />

        <div className="font-weight-bold">Q. Is the FORCE able to install in factories or large buildings? </div><br />
        <div className="text-danger">&emsp;A. Yes, it is.</div><br />
        The Force can be installed anywhere that uses electricity, the Force is not restricted by the installation environment.<br /><br />
        <div className="font-weight-bold">Q. Is the rental(lease) service available? </div><br />
        <div className="text-danger">&emsp;A. Yes, see below for more detail.</div><br />
        However, we only provide rental service in the US only for industrial, commercial and vessels. (For more detail and inquiry, please visit our website, there is Contact us under SUPPORT)<br /><br />
        <div className="font-weight-bold">Q. What's the installation cost? </div><br />
        <div className="text-danger">&emsp;A. For residential, installation is not included with purchase of the Force. We prefer to call a local electrician for an installation. </div><br />
        If you want to install the Force for Commercial, industrial, and vessels, please contact us by ‘info@enposs.com’.<br /><br />
        <div className="font-weight-bold">Q. Are there any cases where the FORCE does not reduce power consumption? </div><br />
        <div className="text-danger">&emsp;A. Absolutely not, only the saving ratio is different.</div><br />
        Reduction failure has not occurred in the past 12 years, but the saving ratios are different depending on circumstances. Also, for sure there should be a reduction effect only if the FORCE is installed properly.<br /><br />
        <div className="font-weight-bold">Q. Is there any harmonic wave or noise after installing the FORCE? </div><br />
        <div className="text-danger">&emsp;A. No, it is not.</div><br />
        The Force doesn’t operate with electricity or the motors, so there will be no Noise, Heat or Harmonics distortion.<br /><br />
        <div className="font-weight-bold">Q. Is the FORCE supported by the government? </div><br />
        <div className="text-danger">&emsp;A. Not at the moment.</div><br />
        But once we have any type of support from the government we will post on the website under News, so please check our website frequently for updates. <br /><br />
        <div className="font-weight-bold">Q. Is the after service available for the FORCE? </div><br />
        <div className="text-danger">&emsp;A. Yes,</div><br />
        but our product is maintenance free commodities, The Force doesn’t need maintenance. If so, please contact us.<br /><br />
        <div className="font-weight-bold">Q. What if the FORCE has the same issues after service? </div><br />
        <div className="text-danger">&emsp;A. Enposs cares for Customers,</div><br />
        if there still is an issue with the product after serviced, please contact us within 30 days after serviced. <br /><br />
        <div className="font-weight-bold">Q. The FORCE's power saving rate is good at the first test, but can it drop over time? </div><br />
        <div className="text-danger">&emsp;A. No it is not</div><br />
        <div className="font-weight-bold">Q. How should I know the FORCE's power-saving effect after installation? </div><br />
        <div className="text-danger">&emsp;1. You can easily compare the electricity bill before and after installing FORCE as the same condition.<br />
          &emsp;2. You can check the meter to see the usage reduction.<br />
          &emsp;3. The electricity consumption is measured by the measuring instrument.
        </div><br />
        <div className="font-weight-bold">Q. Is there any way to know if the FORCE doesn't work or if the FORCE is bad? </div><br />
        <div className="text-danger">&emsp;A. There are few ways to check if the Force is bad or not.
First by visual inspection of the product to see if there is any physical damage on the outer box. or check the wires if it has cuts.
Second, you can check your electricity bill or meter outside of your house to see if there are any reductions in your usage.
Third, you can use measuring tools to check the electricity consumption. 
</div><br />
But, if you still have concerns about the Force’s performance, please contact us. <br /><br />
        <div className="font-weight-bold">Q. How long does it take to install the FORCE after contracting? </div><br />
        <div className="text-danger">&emsp;A. For residential customers, It depends on the shipment, normally shipping takes upto 5~7business days. Once you receive the Force you can call your local electrician for installation.
Commercial, Industrial, and Vessels customers, Please visit our website and contact us, We can give more information. 
</div><br />
        <div className="font-weight-bold">Q. What is the payment method? </div><br />
        <div className="text-danger text-left">&emsp;A. For residential customers, the payment method will be Credit or Debit card and Paypal.<br />
Commercial, Industrial, and Vessels customers, Please visit our website and contact us, We can give more information. 
</div><br />
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>                
        <CardsFooter />
      </>
    );
  }
}

export default Faq;
