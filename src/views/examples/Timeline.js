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
//import { appConfig } from "services/config.js";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Background from 'assets/img/theme/photo-1506784693919-ef06d93c28d2.jpeg';

class Timeline extends React.Component {
  
  state = {
    aboutcompany: [],
    ceomessage: [],
    error: null,
    bannerimage: [],
    productimage: []
 }

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
      const aboutcompany = await fetch(`${appConfig.apiURL}/aboutcompany`, {
        method: 'GET',
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ aboutcompany,bannerimage:aboutcompany.bannerimage,productimage:aboutcompany.productimage });
    } catch (error) {
      this.setState({ error });
    }

    try {
      const ceomessage = await fetch(`${appConfig.apiURL}/ceomessage`, {
        method: 'GET',
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ ceomessage });
    } catch (error) {
      this.setState({ error });
    }*/

  };
  render() {
    const { error} = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
        <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
            <div className="shape shape-style-1 shape-default"
              style= {{
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: `url("${Background}")`,
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
                  <Row>
                    <Col lg="6">
                    <div>
                    <h1 className="display-3 text-white" style={{ textAlign : "left" , fontSize: "40px", fontWeight: "800px", marginTop: "90px" }}>
                      There couldn't have been a better time for FORCE on the world scene</h1>
                    <h3 className="display-4 text-info"
                        style={{ textAlign : "left" , marginBottom: "80px" }}>
                        A time when the world is gasping for fresh air and frantic about going green.
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
              <Card className="card-profile bg-gradient-lighter shadow mt--200">
                <div className="px-4">
                <h4 className="display-3 font-weight-bold text-primary">
                          {/*}    {companystory.Title}*/}
                          Timeline
                      </h4>
                  <Row className="justify-content-center">
                  
                    {/*<Col className="order-lg-2" lg="3">
                     <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                        {productimage.map((val,index) => (
                          <img key={index}
                            alt="..."
                            className="rectangle-circle"
                              src={`${appConfig.apiURL}${val.url}`}
                            />
                            ))}
                        </a>
                        </div>
                        </Col>*/}
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                       {/*<div className="card-profile-actions py-4 mt-lg-0">
                       <Button
                          className="mr-4"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Connect
                        </Button>
                        <Button
                          className="float-right"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Message
                       </Button>
                      </div>*/}
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      {/*<div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div>
              </div>*/}
                    </Col>
                  </Row>
                  {/*<div className="text-center mt-5">
                    <br></br>
                    <br></br>
                    <h3>
                   Timeline{" "}
                      <span className="font-weight-light"></span>
                    </h3>
                  <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Bucharest, Romania
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science
            </div>
                  </div>*/}
                  <div className="mt-5 py-5 border-top">
                    <Row className="justify-content-center">
                      <Col lg="12">
                      {/*}  <p style={{ textAlign : "justify"}}>*/}
                      
    <VerticalTimeline>
    <VerticalTimelineElement
    className="vertical-timeline-element"
    contentArrowStyle={{ borderRight: '7px solid  rgb(241,90,34)' }}
    textClassName="bg-gradient-white"
    //date="2006"
    visible={ true }
    iconStyle={{ background: 'rgb(241,90,34)', color: '#fff' }}
    iconClassName="icon icon-shape"
    icon={"2005"}
    
  >
    {/*<h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>*/}
    <ul>
    <li>Power Saving Business</li>
    <li>New Renewable Energy Business</li>
    <li>Solar Cell and Solar Heat Business</li>
    <li>Opened ENPOSS Company</li></ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentArrowStyle={{ borderRight: '7px solid  rgb(241,90,34)' }}
    //date="2006"
    visible={ true }
    iconStyle={{ background: 'rgb(241,90,34)', color: '#fff' }}
    iconClassName="icon icon-shape"
    icon={"2006"}
  >
    {/*<h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>*/}
    <ul>
    <li>Power Saving Business for Apartment complex and industries</li>
    <li>Started power saving business in South Korea</li>  
    <li>R&D on Power Saving and Completed Safety test</li></ul>
    </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentArrowStyle={{ borderRight: '7px solid  rgb(241,90,34)' }}
    //date="2007"
    visible={ true }
    iconStyle={{ background: 'rgb(241,90,34)', color: '#fff' }}
    iconClassName="icon icon-shape"
    icon={"2007"}
  >
    {/*<h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>*/}
    <div  style={{ textAlign : "left" }}><ul>
    <li>Patent application for power improvement device "FORCE"</li>
    <li>Applied for Patent for Domestic Power Saver</li>
    <li>Patent PCT applied for Power Saver</li>
    <li>Electrical Safety test by KTL</li>
    <li>FORCE: Established production factory</li>
    <li>Launched Power Saver called "FORCE"</li>
    <li>Established Domestic Distribution Network</li>
    <li>Global Sales in China and Mexico</li>
    <li>Registered Rental space for Domestic Sales</li>
    <li>Registered at the Office of Procurement</li>
    <li>FORCE: Started sales in Korea</li>
    <li>FORCE: Started selling in China and Mexico</li></ul></div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentArrowStyle={{ borderRight: '7px solid  rgb(241,90,34)' }}
    //date="2008"
    visible={ true }
    iconStyle={{ background: 'rgb(241,90,34)', color: '#fff' }}
    iconClassName="icon icon-shape"
    icon={"2008"}
  >
    {/*<h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>*/}
      <div  style={{ textAlign : "left" }}>
    <ul>
    <li> Established ENPOSS</li>
    <li>FORCE: Certificate of Electrical Safety by CE</li>
    <li>Obtained ISO 9001: 2000</li>
    <li>FORCE: TUV performance test conducted</li>
    <li>FORCE: Launched in Hong Kong</li></ul></div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentArrowStyle={{ borderRight: '7px solid  rgb(241,90,34)' }}
    //date="2009"
    visible={ true }
    iconStyle={{ background: 'rgb(241,90,34)', color: '#fff' }}
    iconClassName="icon icon-shape"
    icon={"2009"}
  >
    {/*<h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>*/}
    <div  style={{ textAlign : "left" }}>
    <ul>
    <li>FORCE: Obtained IACS certification</li>
    <li>FORCE: Mexico NOM safety certification acquired</li>
    <li>FORCE: Performance certification carried out at NOM, Mexico</li>
    <li>Enrolled to be certified as capable of reducing Co2</li>
    <li>FORCE: Korean government supply registration</li>
    <li>FORCE: Passed KTL EMI TEST</li></ul></div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentArrowStyle={{ borderRight: '7px solid  rgb(241,90,34)' }}
    //date="2010"
    visible={ true }
    iconStyle={{ background: 'rgb(241,90,34)', color: '#fff' }}
    iconClassName="icon icon-shape"
    icon={"2010"}
  >
    {/*<h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>*/}
    <div  style={{ textAlign : "left" }}>
    <ul>
    <li>SGS TEST showed 6% reduction of power consumption</li>
    <li>CE certification (CoC)</li>
    <li>FORCE: Launched in the US and India</li>
    <li>FORCE: SGS Laboratory Performance Test-7.12% Certification</li>
    <li>Patent registration</li>
    <li>SUWON UNIVERSITY-ENPOSS LAB
      establish</li>
    <li>PCT patent registration</li>
    <li>University of Suwon Industry-Academia Research Institute established</li></ul></div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentArrowStyle={{ borderRight: '7px solid  rgb(241,90,34)' }}
    //date="2011"
    visible={ true }
    iconStyle={{ background: 'rgb(241,90,34)', color: '#fff' }}
    iconClassName="icon icon-shape"
    icon={"2011"}
  >
    {/*<h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>*/}
    <div  style={{ textAlign : "left" }}>
    <ul>
    <li>FORCE: MET certification with NLTC</li>
    <li>Concluded an agreement with the Korea Air FORCE Academy Industry-Academia Research Institute</li></ul>
   </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentArrowStyle={{ borderRight: '7px solid  rgb(241,90,34)' }}
    //date="2012"
    visible={ true }
    iconStyle={{ background: 'rgb(241,90,34)', color: '#fff' }}
    iconClassName="icon icon-shape"
    icon={"2012"}
  >
    {/*<h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>*/}
    <ul>
    <li>
    U.S. patent registration
  </li></ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentArrowStyle={{ borderRight: '7px solid  rgb(241,90,34)' }}
    //date="2013"
    visible={ true }
    iconStyle={{ background: 'rgb(241,90,34)', color: '#fff' }}
    iconClassName="icon icon-shape"
    icon={"2013"}
  >
    {/*<h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>*/}
    <ul>
    <li>Vietnam patent registration</li>
    <li>Russian National Railroad MOU signed</li></ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentArrowStyle={{ borderRight: '7px solid  rgb(241,90,34)' }}
    //date="2017"
    visible={ true }
    iconStyle={{ background: 'rgb(241,90,34)', color: '#fff' }}
    iconClassName="icon icon-shape"
    icon={"2017"}
  >
    {/*<h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>*/}
    <ul>
      <li>Establish JV in Vietnam</li>
      <li>Award classify from KR</li>
      <li>Functional test certificate from Korean
    SGS</li></ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentArrowStyle={{ borderRight: '7px solid  rgb(241,90,34)' }}
    //date="2018"
    visible={ true }
    iconStyle={{ background: 'rgb(241,90,34)', color: '#fff' }}
    iconClassName="icon icon-shape"
    icon={"2018"}
  >
    {/*<h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>*/}
    <div  style={{ textAlign : "left" }}>
    <ul>
    <li>Opened a branch office in Los Angeles, USA</li>
    <li>(ENPOSS Japan Co., Ltd.)</li></ul></div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentArrowStyle={{ borderRight: '7px solid  rgb(241,90,34)' }}
    //date="2018"
    visible={ true }
    iconStyle={{ background: 'rgb(241,90,34)', color: '#fff' }}
    iconClassName="icon icon-shape"
    icon={"2018"}
  >
    {/*<h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>*/}
    <ul>
    <li>Establish Branch office in LA, USA</li>
    <li>Alloted as the Preffered supply company for</li>
    Korean government office
    <li>Contract to supply for a shipping company</li>
    <li>Established ENPOSS Japan Co., Ltd.</li></ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentArrowStyle={{ borderRight: '7px solid  rgb(241,90,34)' }}
    //date="2019"
    visible={ true }
    iconStyle={{ background: 'rgb(241,90,34)', color: '#fff' }}
    iconClassName="icon icon-shape"
    icon={"2019"}
  >
    {/*<h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>*/}
   <ul><li>Acquired a business office in Otama Village, Adachi District, Fukushima Prefecture (planned to have a factory)</li></ul>
  </VerticalTimelineElement>
  {/*<VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    //icon={<StarIcon />}
  />*/}
</VerticalTimeline>
                       {/*} </p>*/}
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                         {/* Show more */}
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Timeline;
