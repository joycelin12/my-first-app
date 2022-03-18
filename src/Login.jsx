import React, { Component } from "react";
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }
  render() {
    return (
      <div className="col-lg-9">
        <h4 className="m-1 p-2 border-bottom">Login</h4>
        {/*Email starts*/}
        <div className="form-group form-row">
          <label className="col-lg-4">Email</label>
          <input type="text" className="form-control" />
        </div>
        {/*Email ends*/}

        {/*Password starts*/}
        <div className="form-group form-row">
          <label className="col-lg-4">Password</label>
          <input type="password" className="form-control" />
        </div>
        {/*Password ends*/}
      </div>
    );
  }
}
