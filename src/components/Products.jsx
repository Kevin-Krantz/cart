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

  handleIncrement = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  handleReset = () => {
    const products = this.state.products.map((product) => ({
      ...product,
      quantity: 0,
    }));
    this.setState({ products });
  };

  render() {
    return (
      <>
        <button onClick={this.handleReset} className="btn btn-primary">
          Reset
        </button>
        {this.state.products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        ))}
      </>
    );
  }
}

export default Products;
