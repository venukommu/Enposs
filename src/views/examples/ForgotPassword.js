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
//import registerUser from 'strapi/registerUser';
import { UserContext } from 'context/user';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { appConfig } from "services/config.js";

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      username: 'default',
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

  passwordConfirmationHandler = (event) => {
    this.setState({passwordConfirmation: event.target.value});
  }

  setIsMember = (isMember) => {
    this.setState({setIsMember: isMember});
  }

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
    //const {resetPassword, alert} = this.context;
    const { history } = this.props;
    const { email, password, passwordConfirmation, username,  isMember, setIsMember} = this.state;
    let isEmpty = !email || !password || !username || alert.show;

    /*const toggleMember = () => {
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
    };*/
    const handleSubmit = async (e) => {
      //showAlert({ msg: 'accessing user data. please wait...' });
      e.preventDefault();

      //if (isEmpty) {
      //  toast.error('Please fill out all form fields',{position:toast.POSITION.TOP_RIGHT,autoClose: false});
      //} else {
  
      let response;
        response = await forgotPassword( {email} );
        console.log("response",response);
      
  
      if (response.status !== 400 && response.status === 200 ) {
        const {
          jwt: token,
          user: { username },
        } = response.data;
  
        const newUser = { token, username };
  
        //userLogin(newUser);
        toast.success(`you are logged in ${username}. shop away my friend`,{position:toast.POSITION.TOP_RIGHT,autoClose: 5000,});
        //showAlert({ msg: `you are logged in ${username}. shop away my friend` });
  
        history.push('/cart');
      }
      else if (response.status === 400) {
        toast.error(response.data.message[0].messages[0].message,{position:toast.POSITION.TOP_RIGHT,autoClose: false});
      } else {
        toast.error('there was an error. please try again...',{position:toast.POSITION.TOP_RIGHT,autoClose: false});
        //showAlert({
        //  msg: 'there was an error. please try again...',
        //  type: 'danger',
        //});
        // show alert
      }
    //}
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

export default ForgotPassword;
