import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import API from "../utils/API";
import SignUp from "./SignUp";
import Profile from "../views/Profile";
class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      emailAddress: "",
      userPassword: "",
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

  async handleSubmit(e) {
    e.preventDefault();
    const result = await API.loginUser({
      emailAddress: this.state.emailAddress,
      userPassword: this.state.userPassword,
    });
    console.log("In signin result:", result);
    if (result) {
      localStorage.userId = ""
      localStorage.userName = ""
      console.log(result)
      localStorage.userId = result.userId
      localStorage.userName = result.fullName

      console.log("USERID IN SIGN IN: ", this.state.userId)
    }
    // console.log('The form was submitted with the following data:');
    // console.log(this.state);
  }

  render() {
    return (
      <Router>
        <div className="container">
          <div className="row justify-content-center pb-4">
            <div className="col col-sm col-lg-6 col-xl-8 pt-2 ">
              <div class="card pt-3 ">
                <Card.Img
                  src="https://wtop.com/wp-content/uploads/2016/12/ThinkstockPhotos-509640879.jpg"
                  style={{ height: "250px", width:"auto"}}
                />
                <Card.Body >
                  <Card.Title>Welcome to PET HOTEL</Card.Title>
                  <form onSubmit={this.handleSubmit} className="form-group">
                    <div className="form-group">
                      <label className="form-group__Label" htmlFor="name">
                        Email Address
                      </label>
                      <input
                        type="text"
                        id="emailAddress"
                        className="form-control"
                        placeholder="Enter your email address"
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
                      <Link to="./SignUp" className="form-group__Link">
                        Register
                      </Link>
                    </div>
                  </form>
                </Card.Body>
                <button
                  className="btn btn-primary  form-Button mr-20"
                  onClick={this.handleSubmit}                ><Link to="/profile" className="btn btn-primary  form-Button mr-20">
                  Sign In</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default SignInForm;
