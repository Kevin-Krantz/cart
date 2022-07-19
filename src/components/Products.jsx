import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  state = {
    products: [
      { id: 1, quantity: 0 },
      { id: 2, quantity: 4 },
      { id: 3, quantity: 8 },
      { id: 4, quantity: 11 },
    ],
  };

  handleDelete = (id) => {
    const products = this.state.products.filter((p) => p.id !== id);
    this.setState({ products });
  };

  render() {
    return (
      <>
        {this.state.products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={this.handleDelete}
          />
        ))}
      </>
    );
  }
}

export default Products;
