import React, { Component } from "react";

class Product extends Component {
  render() {
    const { onIncrement, onDelete, product, onDecrement } = this.props;

    return (
      <div className="container">
        <div className="row">
          <span className="col-1">
            <span className={this.getBadgeClasses()}>
              {this.formatQuantity()}
            </span>
          </span>
          <span className="col">
            <button
              onClick={() => onIncrement(product)}
              className="btn btn-secondary me-2 mt-1"
            >
              +
            </button>
            <button
              onClick={() => onDecrement(product)}
              className="btn btn-secondary me-2"
            >
              -
            </button>
            <button
              onClick={() => onDelete(product.id)}
              className="btn btn-danger"
            >
              X
            </button>
          </span>
        </div>
      </div>
    );
  }

  // I bilden nedan har vi två kolumner. I den första kolumnen har vi våra counters och i den andra kolumnen har i våra kontrollknappar. Därmed är alla knappar alltid justerade oavsett hur stor eller liten vår badge är.
  // Det är din uppgift att det reda på hur bootstrap grids fungerar och implementera den precis som jag har gjort.

  getBadgeClasses() {
    let classes = "badge mt-2 bg-";
    classes +=
      this.props.product.quantity === 0 ? "warning text-dark" : "primary";
    return classes;
  }

  formatQuantity() {
    const { quantity } = this.props.product;
    return quantity === 0 ? "Zero" : quantity;
  }
}
export default Product;
