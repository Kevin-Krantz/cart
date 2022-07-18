import React, { Component } from "react";

class Product extends Component {
  state = {
    quantity: 9,
    tags: [
      { name: "tag1", id: 1 },
      { name: "tag2", id: 2 },
      { name: "tag3", id: 3 },
    ],
  };

  handleIncrement = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  handleDelete = (id) => {
    const tags = this.state.tags.filter((tag) => tag.id !== id);
    this.setState({ tags });
  };

  render() {
    return (
      <div className="m-2">
        <span className={this.getBadgeClasses()}>{this.formatQuantity()}</span>
        <button onClick={this.handleIncrement} className="btn btn-primary">
          Increment
        </button>
        {this.state.tags.map((tag) => (
          <li key={tag.id}>
            {tag.name}
            <button onClick={() => this.handleDelete(tag.id)}>delete</button>
          </li>
        ))}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge me-2 bg-";
    classes += this.state.quantity === 0 ? "warning text-dark" : "primary";
    return classes;
  }

  formatQuantity() {
    const { quantity } = this.state;
    return quantity === 0 ? "Zero" : quantity;
  }
}
export default Product;
