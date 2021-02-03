import React from "react";
import {CartContext} from "context/CartContext";
import { appConfig } from "services/config.js";
import { Button,Card,Container,Row,Col } from "reactstrap";
import StripeCheckout from "react-stripe-checkout";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from 'context/user';
import { Link } from 'react-router-dom';

toast.configure();

class Cart extends React.Component  {
  //static contextType  = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      data: {
        address: "",
        city: "",
        state: "",
        stripe_id: ""
      },
      error: ""
    };
  }
  static contextType = CartContext;
  
  render() {
    const {shoppingCart,totalPrice, qty, dispatch} = this.context;
    const { history } = this.props;
    //console.log("user",user);
    const handleToken = async (token, usertoken) => {
      console.log(token);
      console.log("usertoken",usertoken);

      const product = {name: "All Products", price:totalPrice}  

      fetch(`${appConfig.apiURL}/orders`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      
      body: JSON.stringify({
        product,
        token,
      }),
      })
      .then(response => response.json())
      .then(data => {
        console.log('data: ', data)
    
      if (data.status === "succeeded") {
        //this.clearCart();
        //this.$router.push('/thanks');
        dispatch({type: 'EMPTY'});
        history.push('/');
        toast.success("you have paid successfully now,now you can continue shopping",{position:toast.POSITION.TOP_RIGHT,autoClose: 5000,});
      } else {
        toast.error(data.raw.message,{position:toast.POSITION.TOP_RIGHT,autoClose: false});     
      }
    })
    }
    
  return (
    <>
    <DemoNavbar />
    <main className="profile-page" ref="main">
      <section className="section-profile-cover section-shaped my-0">
        <div className="shape shape-style-1 shape-default bg-gradient-warning alpha-4">
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
                <h1 className="display-3 text-white">{shoppingCart.length > 0 ? 'SHOPPING CART' : 'YOUR CART IS CURRENTLY EMPTY'}</h1>
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
      {shoppingCart.length > 0 ?        
      <section className="section section-lg pt-lg-0 mt--200">
        <Container>
        <Card className="card-profile shadow mt--200">
          <Row className="justify-content-center">
            <Col lg="12">
              <Row className="row-grid">
                <Col lg="12">
                  <Row> 
                  <Col lg="4" className="text-center">Image</Col>
                  <Col>Title</Col>
                  <Col>Price</Col>
                  <Col className="text-center">qty</Col>
                  <Col>Total</Col>
                  <Col>Delete</Col>
                  </Row>
                  {shoppingCart.map(cart =>(
                    <Row key={cart.id} className="justify-content-between align-items-center text-warning">
                      <Col lg="4"><img
                        alt="..."
                        className="img-fluid rounded shadow"
                        src={`${appConfig.apiURL}${cart.images.url}`}
                      /> </Col>                       
                      <Col>{cart.title}</Col>
                      <Col>${cart.price}.00</Col>
                      <Col><Button
                        className="btn btn-primary btn-icon-only rounded-circle"
                        color="primary"
                        type="button"
                        onClick={() => dispatch({type: 'INC',id:cart.id,cart})}>
                        <span className="btn-inner--icon">
                          <i className="ni ni-fat-add" />
                        </span>
                      </Button>
                      {cart.qty}
                      <Button
                        className="btn btn-primary btn-icon-only rounded-circle"
                        color="primary"
                        type="button"
                        onClick={() => dispatch({type: 'DEC',id:cart.id,cart})}>
                        <span className="btn-inner--icon">
                          <i className="ni ni-fat-delete" />
                        </span>
                      </Button></Col>
                      <Col>${cart.price * cart.qty}.00</Col>
                      <Col><Button
                        className="btn btn-primary btn-icon-only rounded-circle"
                        color="primary"
                        type="button"
                        onClick={() => dispatch({type: 'DELETE',id:cart.id,cart})}>
                        <span className="btn-inner--icon">
                          <i className="ni ni-fat-remove" />
                        </span>
                      </Button></Col>
                      
                      </Row>
                  ))}               
                </Col>
              </Row>
            </Col>
          </Row>
          </Card>
          
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                {shoppingCart.length > 0 ?
                <div>
                      <div><h2 className="display-3">Cart Summary</h2></div>
                      <div>Total Items <span className="text-warning">{qty}</span> </div>
                      <div>Total Price <span className="text-warning"> ${totalPrice}.00</span></div>
                      <UserContext.Consumer> 
          {({user}) => ( 
            user.token ? (
              <div><StripeCheckout stripeKey="pk_test_yGm3aklBsFBQqf4mprmEtuss"
              token={(token) => {     
                handleToken(token, user.token);
              }}
              billingAddress
              shippingAddress
              amount={totalPrice * 100}
              name="All Products"></StripeCheckout></div>
            ) : (
        <Link to="/login" className="btn btn-primary btn-block">
          login
        </Link>
        // or
        //<Link to="/register" className="btn btn-primary btn-block">
        //register
        //</Link>
       )
       )}
      </UserContext.Consumer> 
                       </div> : ''}
              </Col>
            </Row>
        
        </Container>
        </section>
       : ''} 
     </main> 
    </>  
  )
}
}
export default Cart;