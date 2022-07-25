import React from "react";
import Product from "./Product";

function Products(props) {
  const { onReset, onDelete, onIncrement, onDecrement, products } = this.props;

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
          onDecrement={onDecrement}
        />
      ))}
    </div>
  );
}

export default Products;
