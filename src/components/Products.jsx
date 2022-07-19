import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  render() {
    const { onReset, onDelete, onIncrement, product } = this.props;

    return (
      <div className="container mt-4">
        <button onClick={onReset} className="btn btn-primary">
          Reset
        </button>
        {this.props.products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Products;
