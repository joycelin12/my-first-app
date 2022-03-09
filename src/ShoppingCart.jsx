import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "iPhone 7", price: 5900, quantity: 0 },
      { id: 2, productName: "iPhone 8", price: 6900, quantity: 1 },
      { id: 3, productName: "iPhone 9", price: 7900, quantity: 2 },
      { id: 4, productName: "iPhone 10", price: 8900, quantity: 2 },
      { id: 5, productName: "iPhone 11", price: 9900, quantity: 5 },
      { id: 6, productName: "iPhone 12", price: 10900, quantity: 6 },
    ],
  };

  render() {
    return (
      <div className="container-fluid ">
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product key={prod.id} product={prod}>
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
}
