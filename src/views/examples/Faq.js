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
    faqcontent: []

  };

  componentDidMount = async () => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
   // this.refs.main.scrollTop = 0;

    /*const parseJSON = resp => (resp.json ? resp.json() : resp);

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
        const faqcontent = await fetch(`${appConfig.apiURL}/faq`, {
          method: 'GET',
          headers: headers,
        })
          .then(checkStatus)
          .then(parseJSON);
        this.setState({ faqcontent });
      } catch (error) {
        this.setState({ error });
      }*/

  };
  
  render() {
    //const { error, faqcontent} = this.state;

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
                    <div>
                        <h1 className="display-3 text-white" style={{ textAlign : "left" ,fontFamily: "Noto Sans JP", fontSize: "48px", fontWeight: "900", marginTop: "90px" , lineHeight: "125%" }}>
                        Q & A
                        {/*faqcontent.Title*/}
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
                        <div style={{ textAlign : "left"}}>
                          {/*<ReactMarkdown source={faqcontent.description} allowDangerousHtml={true}/>*/}
<p className="font-weight-bold">Q. Will there be any problems with the main panel after installing the FORCE?</p>
<ol type="A" className="text-danger"><li>No,</li></ol>
There will be no problems at all with the main panel because of the Force.<br /><br />

<p className="font-weight-bold">Q. What if the FORCE gets heat during the operation?</p>
<ol type="A" className="text-danger"><li> There is no reason to get heat during operation.</li></ol>
The FORCE might get some heat, but it won’t get hot.<br /><br />
    
<p className="font-weight-bold">Q. What should I do with the FORCE if I move to other places after install?</p>
<ol type="A" className="text-danger"><li> You can easily uninstall the Force out of an existing location and re-install at a new location, at this moment only think about whether the capacity of FORCE is proper or not. Also, we don’t provide installation service at this time, so customers are responsible for uninstalling and installing.</li></ol>
    
<p className="font-weight-bold">Q. Which location should the FORCE be installed?</p>
<ol type="A" className="text-danger"><li> The best location to install FORCE is secondary of the main circuit breaker of the main distribution board. (For more detail, please visit our website you can find installation under SUPPORT.)</li></ol>

<p className="font-weight-bold">Q.Does the main panel need to be turned off during the FORCE installation?</p>
<ol type="A" className="text-danger"><li> Yes,</li></ol>
For your safety, if you don't shut the main panel you will get injured (electric shock) by electricity.<br /><br />
    
<p className="font-weight-bold">Q. How much electricity bill will be saved with the FORCE?</p>
<ol type="A" className="text-danger"><li> More than 5%,</li></ol>
The saving ratio will vary depending on the circumstances, and it is hard to calculate when it comes to electricity bill cost. But average saving will be up to 5%~15%<br /><br />

<p className="font-weight-bold">Q. What's the principle of energy-saving? / How does FORCE reduce power consumption?</p>
<ol type="A" className="text-danger"><li> The FORCE, saves active power by increasing conductivity. And it reduces electrical losses by excess free electrons. (Active Power Saving by Increasing Conductivity)</li></ol>

<p className="font-weight-bold">Q. Is the FORCE able to install in factories or large buildings?</p>
<ol type="A" className="text-danger"><li> Yes, it is.</li></ol>
The Force can be installed anywhere that uses electricity, the Force is not restricted by the installation environment.<br /><br />

<p className="font-weight-bold">Q. Is the rental(lease) service available?</p>
<ol type="A" className="text-danger"><li> Yes, see below for more detail.</li></ol>
However, we only provide rental service in the US only for industrial, commercial and vessels. (For more detail and inquiry, please visit our website, there is Contact us under SUPPORT)<br /><br />

<p className="font-weight-bold">Q. What's the installation cost?</p>
<ol type="A" className="text-danger"><li> For residential, installation is not included with purchase of the Force. We prefer to call a local electrician for an installation. </li></ol>
If you want to install the Force for Commercial, industrial, and vessels, please contact us by ‘info@enposs.com’.<br /><br />

<p className="font-weight-bold">Q. Are there any cases where the FORCE does not reduce power consumption?</p>
<ol type="A" className="text-danger"><li> Absolutely not, only the saving ratio is different.</li></ol>
Reduction failure has not occurred in the past 12 years, but the saving ratios are different depending on circumstances. Also, for sure there should be a reduction effect only if the FORCE is installed properly.<br /><br />

<p className="font-weight-bold">Q. Is there any harmonic wave or noise after installing the FORCE?</p>
<ol type="A" className="text-danger"><li> No, it is not.</li></ol>
The Force doesn’t operate with electricity or the motors, so there will be no Noise, Heat or Harmonics distortion.<br /><br />

<p className="font-weight-bold">Q. Is the FORCE supported by the government?</p>
<ol type="A" className="text-danger"><li> Not at the moment.</li></ol>
But once we have any type of support from the government we will post on the website under News, so please check our website frequently for updates. <br /><br />

<p className="font-weight-bold">Q. Is the after service available for the FORCE?</p>
<ol type="A" className="text-danger"><li> Yes,</li></ol>
But our product is maintenance free commodities, The Force doesn’t need maintenance. If so, please contact us.<br /><br />

<p className="font-weight-bold">Q. What if the FORCE has the same issues after service?</p>
<ol type="A" className="text-danger"><li> Enposs cares for Customers,</li></ol>
If there still is an issue with the product after serviced, please contact us within 30 days after serviced. <br /><br />

<p className="font-weight-bold">Q. The FORCE's power saving rate is good at the first test, but can it drop over time?</p>
<ol type="A" className="text-danger"><li> No it is not</li></ol>

<p className="font-weight-bold">Q. How should I know the FORCE's power-saving effect after installation?</p>
<ol type="1" className="text-danger"><li> You can easily compare the electricity bill before and after installing FORCE as the same condition.</li>
<li>You can check the meter to see the usage reduction.</li>
<li>The electricity consumption is measured by the measuring instrument.</li></ol>

<p className="font-weight-bold">Q. Is there any way to know if the FORCE doesn't work or if the FORCE is bad?</p>
<ol type="A" className="text-danger"><li> There are few ways to check if the Force is bad or not. <br /><br />
First by visual inspection of the product to see if there is any physical damage on the outer box. or check the wires if it has cuts. <br /><br />
Second, you can check your electricity bill or meter outside of your house to see if there are any reductions in your usage.<br /><br />
Third, you can use measuring tools to check the electricity consumption. </li></ol>
But, if you still have concerns about the Force’s performance, please contact us. <br /><br />

<p className="font-weight-bold">Q. How long does it take to install the FORCE after contracting?</p>
<ol type="A" className="text-danger"><li> For residential customers, It depends on the shipment, normally shipping takes upto 5~7business days. Once you receive the Force you can call your local electrician for installation.<br /><br />Commercial, Industrial, and Vessels customers, Please visit our website and contact us, We can give more information. </li></ol>

<p className="font-weight-bold">Q. What is the payment method? </p>
<ol type="A" className="text-danger"><li> For residential customers, the payment method will be Credit or Debit card and Paypal.<br /><br />Commercial, Industrial, and Vessels customers, Please visit our website and contact us, We can give more information. </li></ol>
                        </div>
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
