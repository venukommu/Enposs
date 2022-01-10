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
import resetPassword from 'strapi/resetPassword';
import { UserContext } from 'context/user';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import queryString from 'query-string';
//import { appConfig } from "services/config.js";

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      username: 'default',
      isMember: false,
      setIsMember: true
    };
  }

  passwordHandler = (event) => {
    this.setState({ password: event.target.value });
  }

  passwordConfirmationHandler = (event) => {
    this.setState({ passwordConfirmation: event.target.value });
  }

  //setIsMember = (isMember) => {
  //  this.setState({setIsMember: isMember});
  //}

  nameHandler = (setUsername) => {
    this.setState({ setUsername: setUsername });
  }

  static contextType = UserContext;
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    const urlCode = queryString.parse(this.props.location.search)
    const urlLink = urlCode.code

    const { history } = this.props;
    const { password, passwordConfirmation } = this.state;
    let isEmpty = !password || !passwordConfirmation;

    const handleSubmit = async (e) => {
      //showAlert({ msg: 'accessing user data. please wait...' });
      e.preventDefault();

      let response;
      if (isEmpty) {
        toast.error('Please fill out all form fields', { position: toast.POSITION.TOP_RIGHT, autoClose: false });
      }
      else if (password !== passwordConfirmation) {
        toast.error('Passwords do not match.', { position: toast.POSITION.TOP_RIGHT, autoClose: false });
      }
      else if (urlLink !== '') {
        console.log(urlLink);
        response = await resetPassword({ urlLink, password, passwordConfirmation });
        console.log("response", response);

        if (response.status !== 400 && response.status === 200) {
          const {
            jwt: token,
            //user: { username },
          } = response.data;
          console.log(token);
          toast.success(`Your user's password has been reset successfully.`, { position: toast.POSITION.TOP_RIGHT, autoClose: 5000, });
          history.push('/login');
        } else {
          toast.error('there was an error. please try again...', { position: toast.POSITION.TOP_RIGHT, autoClose: false });
        }
      } else {
        toast.error('Code not found and click the reset password link in email...', { position: toast.POSITION.TOP_RIGHT, autoClose: false });
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
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="PasswordConfirmation"
                              type="password"
                              id="passwordConfirmation"
                              value={passwordConfirmation}
                              onChange={this.passwordConfirmationHandler}
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
                            Reset Password
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

export default ResetPassword;
