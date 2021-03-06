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
import loginUser from 'strapi/loginUser';
import registerUser from 'strapi/registerUser';

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import { UserContext } from 'context/user';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      setEmail: '',
      password: '',
      setPassword: '',
      username: '',
      setUsername: 'default',
      isMember: false,
      setIsMember: false
      };
  }
  static contextType  = UserContext;

  emailHandler = (event) => {
    this.setState({email: event.target.value});
  }

  passwordHandler = (event) => {
    this.setState({password: event.target.value});
  }
  nameHandler = (event) => {
    this.setState({username: event.target.value});
  }
  
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    const { userLogin, alert } = this.context;
    const { email, password, username, isMember} = this.state;
    const { history } = this.props;
    let isEmpty = !email || !password || !username || alert.show;

    const handleSubmit = async (e) => {
      //toast.success(`accessing user data. please wait...`,{position:toast.POSITION.TOP_RIGHT,autoClose: 5000,});

      e.preventDefault();

      if (isEmpty) {
        toast.error('Please fill out all form fields',{position:toast.POSITION.TOP_RIGHT,autoClose: false});
      } else {
      let response;
      if (isMember) {
        response = await loginUser({ email, password });
      } else {
        response = await registerUser({ email, password, username });
      }

      if (response.status !== 400 && response.status === 200 ) {
        const {
          jwt: token,
          user: { username },
        } = response.data;

  const newUser = { token, username };
        userLogin(newUser);
        toast.success(`You are logged in ${username}. shop away my friend`,{position:toast.POSITION.TOP_RIGHT,autoClose: 5000,});
        history.push('/cart');
      }
      else if (response.status === 400) {
        toast.error(response.data.message[0].messages[0].message,{position:toast.POSITION.TOP_RIGHT,autoClose: false});
      }
       else {
        toast.error('there was an error. please try again...',{position:toast.POSITION.TOP_RIGHT,autoClose: false});
      }
    }
    };
  
   /* const  toggleMember = () => {
      setIsMember((prevMember) => {
        // console.log(prevMember);
        let isMember = !prevMember;
        isMember ? setUsername('default') : setUsername('');
        return isMember;
      });
    };*/
    
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
                      <div className="text-muted text-center mb-3">
                        <small>Sign up with</small>
                      </div>
                      <div className="text-center">
                        <Button
                          className="btn-neutral btn-icon mr-4"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={require("assets/img/icons/common/github.svg")}
                            />
                          </span>
                          <span className="btn-inner--text">Github</span>
                        </Button>
                        <Button
                          className="btn-neutral btn-icon ml-1"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={require("assets/img/icons/common/google.svg")}
                            />
                          </span>
                          <span className="btn-inner--text">Google</span>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <small>Or sign up with credentials</small>
                      </div>
                      <Form role="form">
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Name" type="text" id= "username" value ={username} 
                            onChange={this.nameHandler}/>
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
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
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Password"
                              type="password"
                              id="password"
                              value={password}
                              onChange={this.passwordHandler}
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="text-muted font-italic">
                          <small>
                            password strength:{" "}
                            <span className="text-success font-weight-700">
                              strong
                            </span>
                          </small>
                        </div>
                        <Row className="my-4">
                          <Col xs="12">
                            <div className="custom-control custom-control-alternative custom-checkbox">
                              <input
                                className="custom-control-input"
                                id="customCheckRegister"
                                type="checkbox"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheckRegister"
                              >
                                <span>
                                  I agree with the{" "}
                                  <a
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                  >
                                    Privacy Policy
                                  </a>
                                </span>
                              </label>
                            </div>
                          </Col>
                        </Row>
                        <div className="text-center">
                          <Button
                            className="mt-4"
                            color="primary"
                            type="button"
                            onClick={handleSubmit}>
                            Create account
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

export default Register;
