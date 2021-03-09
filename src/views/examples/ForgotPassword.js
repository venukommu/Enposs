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
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import forgotPassword from 'strapi/forgotPassword';
import { UserContext } from 'context/user';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { appConfig } from "services/config.js";

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: 'default',
      isMember: true,
      setIsMember: true
    };
  }

  emailHandler = (event) => {
    this.setState({email: event.target.value});
  }

  //setIsMember = (isMember) => {
  //  this.setState({setIsMember: isMember});
  //}

  nameHandler = (setUsername) => {
    this.setState({setUsername: setUsername});
  }

  static contextType  = UserContext;
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    const { email} = this.state;
    let isEmpty = !email;

    const handleSubmit = async (e) => {
      //showAlert({ msg: 'accessing user data. please wait...' });
      e.preventDefault();
      if (isEmpty) {
        toast.error('Please fill out all form fields',{position:toast.POSITION.TOP_RIGHT,autoClose: false});
      }else {
        let response;
        response = await forgotPassword( {email} );
        console.log("response",response);
      if (response.status !== 400 && response.status === 200) {
        const {
          jwt: token
        } = response.data;
  
        console.log("token", token)
        toast.success('We received a request to reset the password, so kindly check youre mail and click the reset password link',{position:toast.POSITION.TOP_RIGHT,autoClose: 5000,});
        //history.push('/reset-password');
      } else {
        toast.error('there was an error. please try again...',{position:toast.POSITION.TOP_RIGHT,autoClose: false});
      }
    }  
    };
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <Form role="form">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Email" type="email" id="email" value={email}
                            onChange={this.emailHandler}
                            /> 
                          </InputGroup>
                        </FormGroup>
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="button"
                            onClick={handleSubmit}
                          >
                            SEND EMAIL
                          </Button>
                        </div>
                        
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default ForgotPassword;
