import React from "react";


function SubmitForm() {
    return(
    <div className="container-md">
<h2>Registration Form:</h2>
  <form onSubmit={this.handleSubmit} method="post">
  <div className="form-group">
          <label for="exampleFormControlTextarea1">Upload Image:</label>
          <img src={image} value={this.state.item.image} alt="up-load an image" />
        </div>
      <div className="form-group">
          <label for="exampleFormControlInput1">Pet Name:</label>
          <input type="text" onChange={this.changeHandler} value={this.state.item.petname} name={petname} className="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">User ID:</label>
          <input type="text" onChange={this.changeHandler} value={this.state.item.userId} name={userid} className="form-control" id="exampleFormControlInput1" placeholder="Enter your User ID"/>
        </div>
      <div className="form-group">
          <label for="exampleFormControlInput1">First Name:</label>
          <input type="text" onChange={this.changeHandler} value={this.state.item.firstName} className="form-control" id="email" placeholder="Enter your first name" required/>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Last Name:</label>
          <textarea type="text" onChange={this.changeHandler} value={this.state.item.lastName} className="form-control" maxlength="6000" id="exampleFormControlTextarea1" placeholder="Enter your last name" rows="3" required></textarea>
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Phone Number:</label>
          <input type="text" onChange={this.changeHandler} value={this.state.item.phoneNumber}  className="form-control" id="exampleFormControlInput1" placeholder="Enter your phone number"/>
        </div>
      <div className="form-group">
          <label for="exampleFormControlInput1">Email Address:</label>
          <input type="text" onChange={this.changeHandler} value={this.state.item.email} className="form-control" id="email" placeholder="Enter your email" required/>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Address:</label>
          <textarea type="text" onChange={this.changeHandler} value={this.state.item.address} className="form-control" maxlength="6000" id="exampleFormControlTextarea1" placeholder="Enter your home address" rows="3" required></textarea>
        </div>
        <button type="submit" value="send" style={{backgroundColor: "#a0bbad", borderColor:"#a0bbad"}} className="btn btn-primary">Save</button>
  </form>
  </div>
  );
}
export default SubmitForm;