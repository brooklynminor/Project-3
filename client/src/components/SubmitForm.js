import React, {Component} from "react";
import API from "../utils/API"
import { Link } from 'react-router-dom';

class RegisterPet extends Component {
  constructor() {
      super();

      this.state = {
          ownerId: '',
          petName: '',
          breed: '',
          size: '',
          note: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
      let target = e.target;
      let value = target.value;
      let name = target.name;

      this.setState({
        [name]: value
      });
  }

  handleSubmit(e) {
      e.preventDefault();
      API.addPet({ownerId: "5fc45aa8750ac1a260602633",
      petName: this.state.petName,
      breed: this.state.breed,
      size: this.state.size,
      note: this.state.note})
      console.log('The form was submitted with the following data:');
      console.log(this.state);
  }
  render() {
  return(
    <div className="container-md  mt-5">
      <div className="display-4">Register Your Pet</div>
    <form onSubmit={this.handleSubmit} className="form-group">
      <div className="form-group">
        <label className="form-group__Label" htmlFor="name">Pets Name: </label>
        <input type="text" id="petName" className="form-control" placeholder="Enter your full name" name="petName" value={this.state.petName} onChange={this.handleChange} />
      </div>
      <div className="form-group">
        <label className="form-group__Label" htmlFor="phone">Breed: </label>
        <input type="text" id="breed" className="form-control" placeholder="Enter your phone number" name="breed" value={this.state.breed} onChange={this.handleChange} />
      </div>

      <div className="form-group">
        <label className="form-group__Label" htmlFor="password">Size: </label>
        <input type="size" id="userPassword" className="form-control" placeholder="Enter your password" name="size" value={this.state.size} onChange={this.handleChange} />
      </div>
      <div className="form-group">
        <label className="form-group__Label" htmlFor="email">Special Requirements</label>
        <textarea type="note" id="emailAddress" className="form-control" placeholder="Enter your email" name="note" value={this.state.note} onChange={this.handleChange} />
      </div>
      <div className="form-group">
          <button className="btn btn-primary mr-3 form-Button mr-20" onClick={this.handleSubmit}>Sign Up</button> <Link to="./SignIn.js" className="form-group__Link">I'm already member</Link>
      </div>
    </form>
  </div>
);
}
}
export default RegisterPet;