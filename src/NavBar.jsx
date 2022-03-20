import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light navbar-style">
          <div className="container-fluid">
            <a className="navbar-brand" href="/#">
              eCommerce
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to="/dashboard"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to="/customers"
                    >
                      Customers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/cart">
                      Shopping Cart
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
