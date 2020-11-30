import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import API from "../utils/API"

class Login extends Component {

constructor(){
  super();

        this.state = {
            emailAddress: '',
            userPassword: '',
                      
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
      let target = e.target;
      let value = target.type === 'checkbox' ? target.checked : target.value;
      let name = target.name;

      this.setState({
        [name]: value
      });
  }


    handleSubmit(e) {
      e.preventDefault();
      API.loginUser({emailAddress: this.state.emailAddress,
        userPassword: this.state.userPassword,
        })
  }

  render(){
    return(
      <div class="row justify-content-center mt-2 mb-5 h-100">  
        <div class="col-md-4">

          <div class="card">
          <Card.Img src="https://wtop.com/wp-content/uploads/2016/12/ThinkstockPhotos-509640879.jpg" />
          <Card.Body>
            <Card.Title>
              Welcome to PET HOTEL
            </Card.Title>
            <form onSubmit={this.handleSubmit} className="form-group">
              <div className="form-group">
                <label className="form-group__Label" htmlFor="name">Email Address</label>
                <input type="text" id="emailAddress" className="form-control" placeholder="Enter your email" name="emailAddress" value={this.state.emailAddress} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label className="form-group__Label" htmlFor="phone">Password</label>
                <input type="text" id="userPassword" className="form-control" placeholder="Enter your password" name="userPassword" value={this.state.userPassword} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                  <Link to="./SignUp" className="form-group__Link mb-0">Register</Link>
              </div>
            </form>
            

            </Card.Body>

            <button className="btn btn-primary mt-0" onClick={this.handleSubmit}>Login</button>

          </div>
        </div>
        </div>
    )
  }
      
  

}

export default Login
      