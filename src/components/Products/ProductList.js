import React from 'react';
//import img from './main2.jpg'; // Tell webpack this JS file uses this image
//import logo from './logo.png'; // Tell webpack this JS file uses this image
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

class App extends React.Component {
  // State of your application
  state = {
    products: [],
    error: null,
  };

  // Fetch your restaurants immediately after the component is mounted
  componentDidMount = async () => {
    // Parses the JSON returned by a network request
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
      const products = await fetch('http://localhost:1337/products', {
        method: 'GET',
        headers: headers,
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ products });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, product } = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (
      <div>
        {this.state.products.map(product => (
          <p className="lead text-white" style={{ textAlign : "justify" }}>
            {product.description}
          </p>
        ))}
      </div>
    );
  }
}

export default App;
