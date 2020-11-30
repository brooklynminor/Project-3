import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from "../utils/API"
import Calendar from "./Calendar"
class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
          petName: ''
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
        API.addSchedule({
          petName: this.state.petName,
          ownerId:"5fc47f7e32d2ce756c5da8b7",
          checkIn: "2020-11-30T06:53:32.200Z",
          checkOut: "2020-11-30T06:53:32.200Z"})
        console.log('The form was submitted with the following data:');
        console.log("CALENDAR PROP: ");
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
                <Calendar />
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