import React from "react";

function Form(props) {
    return(
    <div className="container-md">
<h2>Insert Inquiries </h2>
<br />
  <form action="mailto:brooklynminor4@gmail.com" method="post">
      <div className="form-group">
          <label for="exampleFormControlInput1">User ID</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
        </div>
      <div className="form-group">
          <label for="exampleFormControlInput1">First Name</label>
          <input type="text" className="form-control" id="email" placeholder="Enter your email" required/>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Last Name</label>
          <textarea type="text" className="form-control" maxlength="6000" id="exampleFormControlTextarea1" placeholder="Enter a message" rows="3" required></textarea>
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Phone Number</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
        </div>
      <div className="form-group">
          <label for="exampleFormControlInput1">Email Address</label>
          <input type="text" className="form-control" id="email" placeholder="Enter your email" required/>
        </div>
        {/* <div className="form-group">
          <label for="exampleFormControlTextarea1">Address</label>
          <textarea type="text" className="form-control" maxlength="6000" id="exampleFormControlTextarea1" placeholder="Enter a message" rows="3" required></textarea>
        </div> */}
        <button type="submit" value="send" style={{backgroundColor: "#a0bbad", borderColor:"#a0bbad"}} className="btn btn-primary">Save</button>
      
  </form>
  </div>
  );
}

export default Form;