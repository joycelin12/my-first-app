import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  //Executes when component is mounted
  constructor(props) {
    //console.log("constructor - ShoppingCart");
    super(props); // calling super class's constructor
    //initialization of the state
    //json-server react-db.json --watch --port=5000
    this.state = {
      products: [
        //{ id: 1, productName: "iPhone 7", price: 5900, quantity: 0 },
        // { id: 2, productName: "iPhone 8", price: 6900, quantity: 1 },
        // { id: 3, productName: "iPhone 9", price: 7900, quantity: 2 },
        // { id: 4, productName: "iPhone 10", price: 8900, quantity: 2 },
        // { id: 5, productName: "iPhone 11", price: 9900, quantity: 5 },
        // { id: 6, productName: "iPhone 12", price: 10900, quantity: 6 },
      ],
    };
  }

  render() {
    console.log("render - ShoppingCart");
    return (
      <div className="container-fluid ">
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  // render ends here

  //Executes after constructor and render method(includes life cycle of child components, if any) of current constructor
  componentDidMount = async () => {
    //fetch data from data source
    //1st method of fetching data
    /*var promise = fetch("http://localhost:5000/products", { method: "GET" });
    promise.then((response) => {
      console.log(response);

      var promise2 = response.json();
      promise2.then((prods) => {
        console.log(prods);

        this.setState({ products: prods });
      });
    });*/
    //2nd method of fetching data
    var response = await fetch("http://localhost:5000/products", {
      method: "GET",
    });
    var prods = await response.json();
    console.log(prods);
    this.setState({ products: prods });

    //console.log("componentDidMount - ShoppingCart");
  };

  componentDidUpdate(prevProps, prevState) {
    //console.log(
    // "componentDidUpdate - ShoppingCart",
    // prevProps,
    // prevState,
    // this.props,
    // this.state
    //);
    //if (prevProps.x != this.props.x) {
    // make http call
    //}
  }

  componentWillUnmount() {
    //console.log("componentWillUnmount - ShoppingCart");
  }

  componentDidCatch(error, info) {
    //console.log("componentDidCatch - ShoppingCart");
    //console.log(error, info);

    localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  }

  //executes when the user clicks on + button
  handleIncrement = (product, maxValue) => {
    //console.log("handleIncrement", product);

    //get index of the selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    //console.log(allProducts[index]);
    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;

      //update the state of current component (parent component)
      this.setState({ product: allProducts });
    }
  };

  handleDecrement = (product, minValue) => {
    //console.log("handleDecrement", product);
    //get index of the selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    //console.log(allProducts[index]);

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
      //update the state of current component (parent component)
      this.setState({ product: allProducts });
    }
  };

  //executes when the user clicks on Delete(X) button in the Product component
  handleDelete = (product) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure to delete?")) {
      //delete product based on index
      allProducts.splice(index, 1);

      //update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };
}
