import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import API from "../utils/API";
import SignIn from "./signin"

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      emailAddress: "",
      userPassword: "",
      phoneNumber: "",
      fullName: "",

      Agreed: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    API.addUser({
      emailAddress: this.state.emailAddress,
      userPassword: this.state.userPassword,
      phoneNumber: this.state.phoneNumber,
      emergencyNo: this.state.phoneNumber,
      fullName: this.state.fullName,
    });
    console.log("The form was submitted with the following data:");
    console.log(this.state);

  }

  render() {
    return (
      <Router>
      <div className="container mt-3">
        <div className="row">
          <div className="col col-md-12 col-xl-10 col-lg-8 col-sm-6">
            <div className="display-6 mb-3">Sign-Up</div>
            <form onSubmit={this.handleSubmit} className="form-group">
              <div className="form-group">
                <label className="form-group__Label" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="form-control"
                  placeholder="Enter your full name"
                  name="fullName"
                  value={this.state.fullName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-group__Label" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  className="form-control"
                  placeholder="Enter your phone number"
                  name="phoneNumber"
                  value={this.state.phoneNumber}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-group__Label" htmlFor="email">
                  E-Mail Address
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  className="form-control"
                  placeholder="Enter your email"
                  name="emailAddress"
                  value={this.state.emailAddress}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-group__Label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="userPassword"
                  className="form-control"
                  placeholder="Enter your password"
                  name="userPassword"
                  value={this.state.userPassword}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-group__CheckboxLabel">
                  <input
                    className="form-Checkbox"
                    type="checkbox"
                    name="Agreed"
                    value={this.state.Agreed}
                    onChange={this.handleChange}
                  />{" "}
                  I agree all statements in{" "}
                  <a href="#" className="form-TermsLink">
                    terms of service
                  </a>
                </label>
              </div>

              <div className="form-group">
                
                  <button onClick={this.handleSubmit} className="btn btn-primary mr-3 form-Button mr-20"><Link  to="/signin" className="btn btn-primary mr-3 form-Button mr-20">Sign Up</Link></button>
                  
                
                <Link to="/SignIn" className="form-group__Link">
                  I'm already member
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Switch>
      <Route path="/SignIn">
        <SignIn />
      </Route>
    </Switch>
  </Router>
    );
  }
}

export default SignUpForm;
