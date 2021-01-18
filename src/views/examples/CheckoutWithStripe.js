import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { appConfig } from "services/config.js";
import { injectStripe } from "react-stripe-elements";
import Strapi from "strapi-sdk-javascript/build/main";
//import Router from "next/router";
const apiUrl = "http://localhost:1337";
const strapi = new Strapi(apiUrl);

// sample function defined to compute total quantity of cart
function computeQuantity(cart) {
    return cart.reduce((count, itemInCart) => count + itemInCart.quantity, 0);
}
// similar functions can be defined to compute total price, email of the user, etc.

class CheckoutWithStripe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.products.id,
            name: props.products.title,
            price: props.products.price,
            image: `${appConfig.apiURL}${props.products.images.url}`,
            //weight: props.product.weight,
            //description: props.product.description,
            //url: "https://snipcart-strapi.herokuapp.com/snipcartParser"
            //url: "http://localhost:1337/enpossproducts"
            //url: "/"
            url: `http://localhost:1337/enpossproducts/${props.products.id}`
        }
        this.submitOrder = this.submitOrder.bind(this);
    }
    onToken = (res) => {
        console.log("res",res);
        fetch('http://localhost:1337/orders', {
            method: 'POST',
            body: JSON.stringify(res),
        }).then(res => {
            res.json().then(data => {
                console.log(`Payment token generated, ${data.name}`)
            })
        })
    };

  submitOrder() {
    const { context } = this.props;
    const { data } = this.state;
    console.log(context);
    console.log(this.props.stripe.createToken())
    this.props.stripe.createToken()
    .then(res => {
      strapi
        .createEntry("orders", {
          amount: context.total,
          //dishes: context.items,
          address: data.address,
          city: data.city,
          state: data.state,
          token: res.token.id
        })
        //.then(Router.push("/"));
    })
    .catch(err => this.setState({ error: err}))
  }

    render() {
        return (
            <StripeCheckout
                amount = {this.state.price * 100}
                name="STRIPE_INTEGRATION"
                // functions defined above can be used to add more information while making the API call.
                // description={`Order of ${computeQuantity(cart)} items!`}
                //image={`${appConfig.apiURL}${products.images.url}`}
                stripeKey="pk_test_yGm3aklBsFBQqf4mprmEtuss"
                currency="USD"
                email='USER_EMAIL'
                //token='tok_visa_debit_us_transferSuccess'
                token={this.onToken.bind(this)}                />          
        );
    }
}

export default CheckoutWithStripe
