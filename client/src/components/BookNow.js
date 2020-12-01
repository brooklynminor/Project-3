import React, { Component, useState } from 'react';
import API from "../utils/API"
import "react-calendar/dist/Calendar.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
let startDate = ""
let endDate = ""
function Schedule() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  console.log(`[start Date]:`, state[0].startDate);
  console.log(`[End Date]:`, state[0].endDate);
  startDate = state[0].startDate
  endDate = state[0].endDate
  return (
    <div className="container">
      <DateRange
        onChange={(item) => setState([item.selection])}
        showSelectionPreview={false}
        moveRangeOnFirstSelection={true}
        months={1}
        ranges={state}
        direction="horizontal"
      />
    </div>
  );
}

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

    async handleSubmit(e) {
        e.preventDefault();
        console.log( "SCHEDULE DATA: ",startDate, endDate)
        const result = await API.addSchedule({
          petName: this.state.petName,
          ownerId: localStorage.userId,
          checkIn: startDate,
          checkOut: endDate})
        API.updateUserSchedule({id: result.data._id, ownerId: localStorage.userId})
        console.log('The form was submitted with the following data:');

        console.log("CALENDAR PROP: ",result);


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
              <Schedule/>
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