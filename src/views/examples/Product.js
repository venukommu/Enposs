import React, { Component } from 'react';
import { appConfig } from "services/config.js";
import BuyButton from './BuyButton';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true, product: {} }
  }

  async componentDidMount() {
    let response = await fetch(`${appConfig.apiURL}${this.props.match.params.id}`)
    let data = await response.json()
    this.setState({
      loading: false,
      product: data
    })
  }

  render() {
    if (!this.state.loading) {
      return (
        <div className="product">
          <div className="product__information">
            <h2 className="Product-title">{this.state.product.title}</h2>
            <img src={`${appConfig.apiURL}${this.state.product.images.url}`} />
            <BuyButton {...this.state} />
          </div>
          {/*<div className="product__description">
            {this.state.product.description}
          </div>*/}
        </div>
      );
    }

    return (<h2>Waiting for API...</h2>);
  }
}

export default Product;