import React, { Component } from "react";
export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Abby",
        phone: "123-596",
        address: { city: "Waycross" },
        photo: "https://picsum.photos/id/1000/60",
      },
      {
        id: 2,
        name: "Kanye",
        phone: "123-196",
        address: { city: "Maui" },
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 3,
        name: "Leo",
        phone: "123-296",
        address: { city: "Nahanta" },
        photo: "https://picsum.photos/id/1020/60",
      },
      {
        id: 4,
        name: "Philip",
        phone: null,
        address: { city: "Daytona" },
        photo: "https://picsum.photos/id/1070/60",
      },
      {
        id: 5,
        name: "SJoe",
        phone: "123-096",
        address: { city: "Jackson" },
        photo: "https://picsum.photos/id/1070/60",
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}
          <span className="badge bg-secondary m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  //Executes when the user clicks on Refresh button
  onRefreshClick = () => {
    this.setState({ customersCount: 7 });
  };

  getPhoneToRender = (phone) => {
    return phone ? (
      phone
    ) : (
      <div className="bg-warning p-2 text-center">No Phone</div>
    );
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="customer" />
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => {
                this.onChangePictureClick(cust, index);
              }}
            >
              Change Picture
            </button>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };

  onChangePictureClick = (cust, index) => {
    //console.log(cust);
    //console.log(index);
    var custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/1009/60";
    this.setState({ customers: custArr });
  };
}
