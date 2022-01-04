import React from "react";

//const Newspages = ({ match, props }) => {
//    console.log(props);
//    const {
//      params: { slug }
//  } = match;
  
import {Container, Row, Col, Card} from "reactstrap";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import { appConfig } from "services/config.js";
import MetaTags from 'react-meta-tags';
    
class Newspages extends React.Component {
        state = {
          error: null,
          newsarticles: []
       }

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
      //const { match } = this.props;
      const { params: { slug } } = this.props.match;
      //console.log(slug);
      const { error, newsarticles} = this.state;
      //console.log(newsarticles);
  
      // Print errors if any
      if (error) {
        return <div>An error occured: {error.message}</div>;
      }
  
      return (
        <>
         <DemoNavbar />
         {newsarticles.filter(newsarticle => newsarticle.slug === slug).map(news => (
          <>
          <div className="position-relative">
              <section className="section section-lg section-shaped pb-250">
              <div className={"shape shape-default bg-gradient-"+news.classname} >
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
                          <h6 className="display-3 text-white">
                          <MetaTags> 
                            <meta property={news.Title} content={news.Title} />
                          </MetaTags>
                          {news.Title}
                          </h6>
                         </div>
                      </Col>
                    </Row>
                  </div>
                </Container>
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
            <section className="section">
            <Container>
                <Card className="card-profile shadow mt--200">
                  <div className="px-4">
                   <div className="mt-5 py-5 border-top text-center">
                      <Row className="justify-content-center">
                        <Col lg="9">
                          <p style={{ textAlign : "justify"}}>
                          <img
                          alt="..."
                          className="rectangle img-center img-fluid shadow shadow-lg--hover"
                          src={`${news.image.url}`}
                          //style={{ width: "200px" }}
                          />                          
                          <hr />
                          {news.description}
                          </p>
                        </Col>
                      </Row>
                    </div>
                    </div>
                </Card>
          </Container>
          </section>
          </>          
      ))}
          <CardsFooter />
        </>
      );
    }
  };

export default Newspages;