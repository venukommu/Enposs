import React from "react";
import { Button } from "reactstrap";
import { appConfig } from "services/config.js";

class BuyButton extends React.Component {
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
            url: `http://a273472aac16.ngrok.io/enpossproducts/snipcartparser`
        }
    }

    render() {
        return (
            <Button
                block
                color="default"
                size="lg"
                type="button"
                className="snipcart-add-item BuyButton"
                data-item-id={this.state.id}
                data-item-name={this.state.name}
                data-item-price={this.state.price}
                data-item-image={this.state.image}
                //data-item-weight={this.state.weight}
                data-item-url={this.state.url}>
                ADD TO CART {this.state.label} (${this.state.price})
            </Button>
        );
    }
}

export default BuyButton;