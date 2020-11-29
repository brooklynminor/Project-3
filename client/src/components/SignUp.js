import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false
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

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
        <div className="container-md  mt-5">
            <form onSubmit={this.handleSubmit} className="form-group">
              <div className="form-group">
                <label className="form-group__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="form-control" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label className="form-group__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="form-control" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label className="form-group__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="form-control" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="form-group">
                <label className="form-group__CheckboxLabel">
                    <input className="form-Checkbox" type="checkbox" name="Agreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="form-TermsLink">terms of service</a>
                </label>
              </div>

              <div className="form-group">
                  <button className="btn btn-primary mr-3 form-Button mr-20">Sign Up</button> <Link to="./SignIn.js" className="form-group__Link">I'm already member</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignUpForm;