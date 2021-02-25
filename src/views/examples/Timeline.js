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
import { appConfig } from "services/config.js";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
class Timeline extends React.Component {
  
  state = {
    aboutcompany: [],
    ceomessage: [],
    error: null,
    bannerimage: [],
    productimage: []
 }
 componentDidMount = async () => {
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
    }
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
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
                      <Col lg="9">
                      {/*}  <p style={{ textAlign : "justify"}}>*/}
                        <VerticalTimeline>
                        <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2006"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    //icon={<SchoolIcon />}
  >
    {/*<h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>*/}
    <p>Start power saving business in South Korea    </p>  
    </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2007"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    //icon={<WorkIcon />}
  >
    {/*<h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>*/}
    <p>Patent application for power improvement device "FORCE"</p>
    <p>Patent PCT application</p>
    <p>[FORCE] Established production factory</p>
    <p>[FORCE] Started sales in Korea</p>
    <p>[FORCE] Started selling in China and Mexico</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   // icon={<WorkIcon />}
  >
    {/*<h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>*/}
    <p> Established Empos</p>

<p>[FORCE] CE safety certification acquired</p>

<p>Obtained ISO 9001: 2000</p>

<p>[FORCE] TUV performance test conducted</p>

<p>[FORCE] Launched in Hong Kong</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2009"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   // icon={<WorkIcon />}
  >
    {/*<h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>*/}
    <p>[FORCE] Obtained IACS certification</p>
    <p>[FORCE] Mexico NOM safety certification acquired</p>

    <p>[FORCE] Performance certification carried out at NOM, Mexico</p>

    <p>[FORCE] Korean government supply registration</p>

    <p>[FORCE] Passed KTL EMI TEST    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2010"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    //icon={<SchoolIcon />}
  >
    {/*<h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>*/}
    <p>CE certification (CoC)</p>

    <p>[FORCE] Launched in the US and India</p>

    <p>[FORCE] SGS Laboratory Performance Test-7.12% Certification</p>

    <p>Patent registration</p>

    <p>PCT patent registration</p>

    <p>University of Suwon Industry-Academia Research Institute established    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2011"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    //icon={<SchoolIcon />}
  >
    {/*<h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>*/}
    <p>
    <p>[FORCE] MET certification with NLTC</p>

    <p>Concluded an agreement with the Korea Air Force Academy Industry-Academia Research Institute</p>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    //icon={<SchoolIcon />}
  >
    {/*<h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>*/}
    <p>
    U.S. patent registration
</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    //icon={<SchoolIcon />}
  >
    {/*<h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>*/}
    <p>Vietnam patent registration</p>
    <p>Russian National Railroad MOU signed</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2018"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    //icon={<SchoolIcon />}
  >
    {/*<h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>*/}
    <p>Opened a branch office in Los Angeles, USA</p>
    <p>(Empos Japan Co., Ltd.)</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2018"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    //icon={<SchoolIcon />}
  >
    {/*<h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>*/}
    <p>Established Empos Japan Co., Ltd.</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2019"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    //icon={<SchoolIcon />}
  >
    {/*<h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>*/}
    <p>Acquired a business office in Otama Village, Adachi District, Fukushima Prefecture (planned to have a factory)</p>
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
