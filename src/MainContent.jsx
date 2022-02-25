import React, { Component } from "react";
export default class MainContent extends Component {
  state = { pageTitle: "Customers", customersCOunt: 5 };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span className="badge bg-secondary m-2">
            {this.state.customersCOunt}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
      </div>
    );
  }

  //Executes when the user clicks on Refresh button
  onRefreshClick() {
    console.log("Refresh clicked");
  }
}