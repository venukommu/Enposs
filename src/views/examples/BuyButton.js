import React from "react";

class BuyButton extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            id: props.products.id,
            name: props.products.label,
            price: props.products.price,
            //weight: props.product.weight,
            //description: props.product.description,
            url: "https://snipcart-strapi.herokuapp.com/snipcartParser"
        }
    }

    render() {
        return (
            <button
                className="snipcart-add-item BuyButton"
                data-item-id={this.state.id}
                data-item-name={this.state.name}
                data-item-price={this.state.price}
                //data-item-weight={this.state.weight}
                data-item-url={this.state.url}>
                ADD TO CART ({this.state.price}$)
            </button>
        );
    }
}

export default BuyButton;