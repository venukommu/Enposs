import React from "react";
import {CartContext} from "context/CartContext";
import { appConfig } from "services/config.js";
import { Button,Card,Container,Row,Col } from "reactstrap";
import StripeCheckout from "react-stripe-checkout";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

class Cart extends React.Component  {

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
    const handleToken = async (token) => {
      const product = {name: "All Products", price:totalPrice}  

      fetch(`${appConfig.apiURL}/orders`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      product,
      token,
      body: JSON.stringify({
      address: token.card.address_line1,
      amount: totalPrice,
      city: token.card.address_city,
      state: token.card.address_state,
      token: token.id
      }),
      })
      .then(response => response.json())
      .then(data => data.status === "succeeded" ? 
      toast.success("you have paid successfully now,now you can continue shopping",{position:toast.POSITION.TOP_RIGHT}) : '')
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
      <section className="section section-lg pt-lg-0 mt--200">
        <Container>
        <Card className="card-profile shadow mt--200">
          <Row className="justify-content-center">
            <Col lg="12">
              <Row className="row-grid">
                <Col lg="12">
                    {shoppingCart.length > 0 ?
                      shoppingCart.map(cart =>(
                        <Row key={cart.id} className="justify-content-between align-items-center text-warning">
                          <Col lg="3"><img
                            alt="..."
                            className="img-fluid rounded shadow"
                            src={`${appConfig.apiURL}${cart.images.url}`}
                          /> </Col>                       
                          <Col>{cart.title}</Col>
                          <Col>${cart.price}.00</Col>
                          <Col><Button
                            className="btn-icon btn-2 ml-1"
                            color="primary"
                            type="button"
                            outline
                            onClick={() => dispatch({type: 'INC',id:cart.id,cart})}>
                            <span className="btn-inner--icon">
                              <i className="ni ni-fat-add" />
                            </span>
                          </Button></Col>
                          <Col>{cart.qty}</Col>
                          <Col><Button
                            className="btn-icon btn-2 ml-1"
                            color="primary"
                            type="button"
                            outline
                            onClick={() => dispatch({type: 'DEC',id:cart.id,cart})}>
                            <span className="btn-inner--icon">
                              <i className="ni ni-fat-delete" />
                            </span>
                          </Button></Col>
                          <Col>${cart.price * cart.qty}.00</Col>
                          <Col><Button
                            className="btn-icon btn-2 ml-1"
                            color="primary"
                            type="button"
                            outline
                            onClick={() => dispatch({type: 'DELETE',id:cart.id,cart})}>
                            <span className="btn-inner--icon">
                              <i className="ni ni-fat-remove" />
                            </span>
                          </Button></Col>
                          
                          </Row>
                      )) : ''}                 
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
                      <div><StripeCheckout stripeKey="pk_test_yGm3aklBsFBQqf4mprmEtuss"
                      token={handleToken} 
                      billingAddress
                      shippingAddress
                      amount={totalPrice * 100}
                      name="All Products"></StripeCheckout></div> </div> : ''}
              </Col>
              </Row>
        </Container>
          </section>
     </main> 
    </>  
  )
}
}
export default Cart;