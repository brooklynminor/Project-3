import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from "../utils/API"
import Calendar from "./Calendar"
class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {

            emailAddress: '',
            userPassword: '',
            phoneNumber: '',
            fullName: '',

            Agreed: false
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
        API.addUser({emailAddress: this.state.emailAddress,
        userPassword: this.state.userPassword,
        phoneNumber: this.state.phoneNumber,
        emergencyNo: this.state.phoneNumber,
        fullName: this.state.fullName})
        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
        <div className="container-md  mt-5">
          <div className='display-5 mb-3'>Book Your Pups Vacation!</div>
            <form onSubmit={this.handleSubmit} className="form-group">
              <div className="form-group">
                <label className="form-group__Label" htmlFor="name">Pet Name</label>
                <input type="text" id="petName" className="form-control" placeholder="Enter your pets name" name="petName" value={this.state.petName} onChange={this.handleChange} />
              </div>
              <div className='form-group__Label'>
                What days will your pup be here?
              </div>
              <div className="form-group mt-3 mb-4">
                <Calendar/>
              </div>

              <div className="form-group">
                  <button className="btn btn-primary mr-3 form-Button ml-5" onClick={this.handleSubmit}>Book Now</button>
              </div>
            </form>
          </div>
        );
    }
}

export default SignUpForm;