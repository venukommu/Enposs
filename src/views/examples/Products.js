import React from 'react';
//import {CartContext} from './CartContext';
import { Button,Card,CardImg,Row,Col } from "reactstrap";
import { appConfig } from "services/config.js";
import {CartContext} from "context/CartContext";
import { Link } from "react-router-dom";

class Products extends React.Component {
    static contextType = CartContext
    state = {
        enpossproducts: [],
        error: null,
      };
      
      componentDidMount = async () => {
        const parseJSON = resp => (resp.json ? resp.json() : resp);
    
        // Checks if a network request came back fine, and throws an error if not
        const checkStatus = resp => {
          if (resp.status >= 200 && resp.status < 300) {
            return resp;
          }
          return parseJSON(resp).then(resp => {
            throw resp;
          });
        };
        const headers = {
          'Content-Type': 'application/json',
        };
    
        try {
          const enpossproducts = await fetch(`${appConfig.apiURL}/enpossproducts`, {
            method: 'GET',
            headers: headers,
          })
            .then(checkStatus)
            .then(parseJSON);
          this.setState({ enpossproducts });
        } catch (error) {
          this.setState({ error });
        }
    
      };
   
    render() {
        const { error, enpossproducts} = this.state;
        const {dispatch} = this.context;
        //console.log("data variable",dispatch);
      // Print errors if any
      if (error) {
        return <div>An error occured: {error.message}</div>;
      }
      return (
        <>
         <div>
         <Row>
            {enpossproducts.map(product => (
                <Col className="mb-5 mb-md-0" md="6" key={product.id}>
                <Card className="card-lift--hover shadow border-0">
                    {/*<Link to={`http://localhost:1337/enpossproducts/${products.id}`}>*/}
                    <CardImg
                        alt="..."
                        //src={require("assets/img/theme/single phase.jpg")}
                        src={`${appConfig.apiURL}${product.images.url}`}
                    />
                    {/*</Link>*/}
                </Card>
                <Button to="/cart" tag={Link}
                    block
                    className="btn-round"
                    color="default"
                    size="lg"
                    type="button"
                    onClick={() => dispatch({type: 'ADD_TO_CART',id:product.id,product})}>
                    + Add To Cart (${product.price})
                </Button>
                </Col>
            ))}
                
        </Row>
        </div>
        </>
      )
    }

}
export default Products;