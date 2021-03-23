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
//import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Chrono } from "react-chrono";
//import 'react-vertical-timeline-component/style.min.css';

const items = [
  {
   title: "2005",
   cardTitle:'* Power Saving Business\n* New Renewable Energy Business\n* Solar Cell and Solar Heat Business\n* Opened ENPOSS Company'
  },
  {
   title: "2006",
   cardTitle: '* Power Saving Business for Apartment complex and industries\n* Start power saving business in South Korea\n* R&D on Power Saving and Completed Safety test'
  },
  {
   title: "2007",
   cardTitle: '* Patent application for power improvement device "FORCE"\n* Applied for Patent for Domestic Power Saver\n* Patent PCT applied for Power Saver\n* Electrical Safety test by KTL\n* FORCE: Established production factory\n* Launched Power Saver called "FORCE"\n* Established Domestic Distribution Network\n* Global Sales in China and Mexico\n* Registered Rental space for Domestic Sales\n* Registered at the Office of Procurement FORCE: Started sales in Korea\n* FORCE: Started selling in China and Mexico'
  },
  {
    title: "2008",
    cardTitle: '* Established Enposs\n* FORCE: Certificate of Electrical Safety by CE\n* Obtained ISO 9001: 2000\n* FORCE: TUV performance test conducted\n* FORCE: Launched in Hong Kong'
   },
   {
    title: "2009",
    cardTitle: '* FORCE: Obtained IACS certification\n* FORCE: Mexico NOM safety certification acquired\n* FORCE: Performance certification carried out at NOM, Mexico\n* Enrolled to be certified as capable of reducing Co2\n* FORCE: Korean government supply registration\n* FORCE: Passed KTL EMI TEST'
   },
   {
    title: "2010",
    cardTitle: '* SGS TEST showed 6% reduction of power consumption\n* CE certification (CoC)\n* FORCE: Launched in the US and India\n* FORCE: SGS Laboratory Performance Test-7.12% Certification\n* Patent registration\n* SUWON UNIVERSITY-ENPOSS LAB establish\n* PCT patent registration\n* University of Suwon Industry-Academia Research Institute established'
   },
   {
    title: "2011",
    cardTitle: '* FORCE: MET certification with NLTC\n* Concluded an agreement with the Korea Air Force Academy Industry-Academia Research Institute'
   },
   {
    title: "2012",
    cardTitle: '* U.S. patent registration'
   },
  {
    title: "2013",
    cardTitle:'* Vietnam patent registration\n* Russian National Railroad MOU signed'
   },
   {
    title: "2017",
    cardTitle: '* Establish JV in Vietnam\n* Award classify from KR\n* Functional test certificate from Korean SGS'
   },
   {
    title: "2018",
    cardTitle: '* Opened a branch office in Los Angeles, USA\n* (Empos Japan Co., Ltd.)'
   },
   {
    title: "2018",
    cardTitle: '* Establish Branch office in LA, USA\n* Alloted as the Preffered supply company for Korean government office\n* Contract to supply for a shipping company\n* Established Empos Japan Co., Ltd.'
   },
   {
    title: "2019",
    cardTitle: '* Acquired a business office in Otama Village, Adachi District, Fukushima Prefecture (planned to have a factory)'
   },
 
 ];

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
              <Container className="shape-container d-flex align-items-center py-lg">
                <div className="col px-0">
                  <Row className="align-items-center justify-content-center">
                    <Col className="text-center" lg="6">
                      <h1 className="display-3 text-white">Timeline</h1>
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
              <Card className="card-profile shadow mt--200">
                <div className="px-4">
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
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="12">
                      {/*}  <p style={{ textAlign : "justify"}}>*/}
    <div style={{ width: "950px", height: "950px", whiteSpace: 'pre-line'}}>
      <Chrono items={items} mode="VERTICAL_ALTERNATING" />
    </div>
    {/*<VerticalTimeline>
    <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2005"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    //icon={<SchoolIcon />}
  >
    {/*<h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <ul>
    <li>Power Saving Business</li>
    <li>New Renewable Energy Business</li>
    <li>Solar Cell and Solar Heat Business</li>
    <li>Opened ENPOSS Company</li></ul>
    </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2006"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    //icon={<SchoolIcon />}
  >
    {/*<h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <ul>
    <li>Power Saving Business for Apartment complex and industries</li>
    <li>Start power saving business in South Korea</li>  
    <li>R&D on Power Saving and Completed Safety test</li></ul>
    </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2007"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    //icon={<WorkIcon />}
  >
    {/*<h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
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
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   // icon={<WorkIcon />}
  >
    {/*<h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
      <div  style={{ textAlign : "left" }}>
    <ul>
    <li> Established Enposs</li>
    <li>FORCE: Certificate of Electrical Safety by CE</li>
    <li>Obtained ISO 9001: 2000</li>
    <li>FORCE: TUV performance test conducted</li>
    <li>FORCE: Launched in Hong Kong</li></ul></div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2009"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   // icon={<WorkIcon />}
  >
    {/*<h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
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
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2010"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    //icon={<SchoolIcon />}
  >
    {/*<h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
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
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    //icon={<SchoolIcon />}
  >
    {/*<h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <div  style={{ textAlign : "left" }}>
    <ul>
    <li>FORCE: MET certification with NLTC</li>
    <li>Concluded an agreement with the Korea Air Force Academy Industry-Academia Research Institute</li></ul>
   </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    //icon={<SchoolIcon />}
  >
    {/*<h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <ul>
    <li>
    U.S. patent registration
  </li></ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    //icon={<SchoolIcon />}
  >
    {/*<h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <ul>
    <li>Vietnam patent registration</li>
    <li>Russian National Railroad MOU signed</li></ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2017"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    //icon={<SchoolIcon />}
  >
    {/*<h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <ul>
      <li>Establish JV in Vietnam</li>
      <li>Award classify from KR</li>
      <li>Functional test certificate from Korean
    SGS</li></ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2018"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    //icon={<SchoolIcon />}
  >
    {/*<h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <div  style={{ textAlign : "left" }}>
    <ul>
    <li>Opened a branch office in Los Angeles, USA</li>
    <li>(Empos Japan Co., Ltd.)</li></ul></div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2018"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    //icon={<SchoolIcon />}
  >
    {/*<h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <ul>
    <li>Establish Branch office in LA, USA</li>
    <li>Alloted as the Preffered supply company for</li>
    Korean government office
    <li>Contract to supply for a shipping company</li>
    <li>Established Empos Japan Co., Ltd.</li></ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2019"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    //icon={<SchoolIcon />}
  >
    {/*<h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
   <ul><li>Acquired a business office in Otama Village, Adachi District, Fukushima Prefecture (planned to have a factory)</li></ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    //icon={<StarIcon />}
  />
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
