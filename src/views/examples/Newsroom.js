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
//import { Link } from "react-router-dom";
// reactstrap components
import {Container, Row, Col, Card, CardBody, Button, Modal} from "reactstrap";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import ReactMarkdown from "react-markdown";

class Newsroom extends React.Component {
    state = {
      newscontent: [],
      newsarticles: [],
      error: null,
   }
  
   toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  // Fetch your restaurants immediately after the component is mounted
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
      const newscontent = await fetch(`${appConfig.apiURL}/newsroom`, {
        method: 'GET',
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ newscontent, newsarticles: newscontent.newsarticles });
    } catch (error) {
      this.setState({ error });
    }

    try {
      const newsarticles = await fetch(`${appConfig.apiURL}/newsarticles`, {
        method: 'GET',
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ newsarticles });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, newscontent,newsarticles} = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }
    //const items = carouselimage.map(val => ({ src: `${appConfig.apiURL}${val.url}`, altText: "",
    //caption: ""}))

    return (
      <>
       <DemoNavbar />
        <div className="position-relative">
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
                        {/*The Newsroom*/}{newscontent.Title}
                        </h1><br />
                        <h3 className="display-4 text-info" style={{ textAlign : "left" }}>
                          {/*Browse our news items, as well as links to various industry-related or environmental news from a variety of sources.*/}
                          {newscontent.subtitle}
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
        <section className="section section-lg pt-lg-0 mt--0">
        <Container>
           {newsarticles.map((newsdata, index) => (
            <Row key={index}>
            <Col lg="10">
              <Row  onClick={() => this.toggleModal(newsdata.modalname)}>
              <Col lg="4">
                <Card className={'bg-gradient-' + newsdata.classname + ' shadow border-0'}>
                <CardBody className="py-3"> 
                    <h6 className="lead text-white text-uppercase">
                    {newsdata.Title}
                    {/*Nuqul Group and Vardot Announce Collaboration*/}
                    </h6>
                    
                </CardBody>
                </Card>
              </Col>
              <Col><p className="text-uppercase">{/*News*/}{newsdata.subheading}<br />
              {/*November 15, 2020*/}{newsdata.newsdate}</p>
              <h5 className="lead text-dark mt-4">{/*Nuqul Group and Vardot Announce Collaboration*/}{newsdata.Title}</h5>
              <p><ReactMarkdown source={newsdata.description} allowDangerousHtml={true}/></p>
              </Col>
            </Row>
            <hr />
            <Modal
              className="modal-xl"
              isOpen={this.state[newsdata.modalname]}
              toggle={() => this.toggleModal(newsdata.modalname)}
              key={index}
            >
              <div className={'modal-header bg-gradient-' + newsdata.classname} >
                <h2 className="modal-title text-white">
                  {newsdata.articletitle}
                </h2>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal(newsdata.modalname)}
                >
                <span aria-hidden={true} className="text-white">×</span>
                </button>
              </div>
              <div className="modal-body">
                <ReactMarkdown source={newsdata.articledescription} allowDangerousHtml={true}  renderers={{link: props => <a href={props.href} target="_blank" rel="nofollow noopener noreferrer">{props.children}</a>}}/>
              </div>
              <div className="modal-footer">
                <Button
                  className="ml-auto"
                  color="link"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal(newsdata.modalname)}
                >
                  Close
                </Button>
              </div>
            </Modal>
            </Col>
            </Row>
          ))}
          {/*<Row>
            <Col lg="10">
              <Row to="/newsarticle" tag={Link}> 
              <Col lg="4">
                <Card className="bg-gradient-success shadow border-0">
                <CardBody className="py-3"> 
                    <h6 className="lead text-white text-uppercase">
                    Nuqul Group and Vardot Announce Collaboration
                    </h6>
                </CardBody>
                </Card>
              </Col>
              <Col><p className="text-uppercase">News<br />
              November 15, 2020</p><h5 className="lead text-dark mt-4">Nuqul Group and Vardot Announce Collaboration</h5></Col>
            </Row>
            <hr/>
            <Row>
              <Col lg="4">
                <Card className="bg-gradient-warning shadow border-0">
                <CardBody className="py-3"> 
                    <h6 className="lead text-white text-uppercase">
                    Vardot Ranked In Top 20 Worldwide Contributors To Drupal
                    </h6>
                </CardBody>
                </Card>
              </Col>
              <Col><p className="text-uppercase">News<br />
              December 15, 2020</p>
              <h5 className="lead text-dark mt-4">Vardot Ranked In Top 20 Worldwide Contributors To Drupal</h5></Col>
            </Row>
          </Col>
          </Row>*/}      
        </Container>
        </section>
        <CardsFooter />
      </>
    );
  }
}

export default Newsroom;
