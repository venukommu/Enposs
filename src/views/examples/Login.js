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
import { Link } from 'react-router-dom';

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import loginUser from 'strapi/loginUser';
import registerUser from 'strapi/registerUser';
import { UserContext } from 'context/user';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      setEmail: '',
      password: '',
      setPassword: '',
      username: 'default',
      setUsername: 'default',
      isMember: true,
      setIsMember: true
    };
  }

  emailHandler = (event) => {
    this.setState({email: event.target.value});
  }

  passwordHandler = (event) => {
    this.setState({password: event.target.value});
  }


  setIsMember = (isMember) => {
    this.setState({setIsMember: isMember});
  }

  nameHandler = (setUsername) => {
    this.setState({username: setUsername});
  }

  static contextType  = UserContext;
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    const {userLogin, alert, showAlert} = this.context;
    const { history } = this.props;
    const { email, setEmail, password, setPassword, username, setUsername, isMember, setIsMember} = this.state;
    console.log(setIsMember);
    let isEmpty = !email || !password || !username || alert.show;

    const toggleMember = () => {
      this.setIsMember((prevMember) => {
        // console.log(prevMember);
        let isMember = !prevMember;
        isMember ? this.nameHandler('default') : this.nameHandler('');
        return (
        <Link to="/register" className="btn btn-primary btn-block">
        register
        </Link>
        )
      });
    };



    const handleSubmit = async (e) => {
      showAlert({ msg: 'accessing user data. please wait...' });
      e.preventDefault();
  
      let response;
  
      if (isMember) {
        response = await loginUser( {email, password} );
      } else {
        response = await registerUser( {email, password, username});
      }
  
      if (response) {
        const {
          jwt: token,
          user: { username },
        } = response.data;
  
        const newUser = { token, username };
  
        userLogin(newUser);
        showAlert({ msg: `you are logged in ${username}. shop away my friend` });
  
        history.push('/cart');
      } else {
        showAlert({
          msg: 'there was an error. please try again...',
          type: 'danger',
        });
        // show alert
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
                      <div className="text-muted text-center mb-3">
                        <small>Sign in with</small>
                      </div>
                      <div className="btn-wrapper text-center">
                        <Button
                          className="btn-neutral btn-icon"
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
                        <small>Or sign in with credentials</small>
                      </div>
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
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id=" customCheckLogin"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor=" customCheckLogin"
                          >
                            <span>Remember me</span>
                          </label>
                        </div>
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="button"
                            onClick={handleSubmit}
                          >
                            Sign in
                          </Button>
                        </div>
                        <p className="register-link">
                        {isMember ? 'need to register' : 'already a member'}
                        <button type="button" onClick={toggleMember}>
                          click here
                        </button>
                      </p>
                      </Form>
                    </CardBody>
                  </Card>
                  <Row className="mt-3">
                    <Col xs="6">
                      <a
                        className="text-light"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <small>Forgot password?</small>
                      </a>
                    </Col>
                    <Col className="text-right" xs="6">
                      <a
                        className="text-light"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <small>Create new account</small>
                      </a>
                    </Col>
                  </Row>
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

export default Login;
