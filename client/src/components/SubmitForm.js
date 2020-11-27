import React, {useState} from "react";

function SubmitForm(props) {
  const [ item, setItem ]= useState({})

  function handleInputChange( event ){
    const { name, value }= event.target
    setItem( { ...item, [name]: value } )
  }

  function handleInputSubmit( event ){
    event.preventDefault()
    // add your submit form code here
    console.log(`submitting form: `, item)
  }
  
  return(
  <div className="container-md">
    <h2>Registration Form:</h2>
    <form onSubmit={handleInputSubmit} method="post">
      <div className="form-group">
        <label for="exampleFormControlTextarea1">Upload Image:</label>
        <img href='#' name='image' onChange={handleInputChange} value={item.image} alt="..."/>
      </div>
      <div className="form-group">
        <label for="exampleFormControlInput1">Pet Name:</label>
        <input type="text" onChange={handleInputChange} value={item.ownerName} name='ownername' className="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
      </div>
      <div className="form-group">
        <label for="exampleFormControlInput1">User ID:</label>
        <input type="text" onChange={handleInputChange} value={item.userId} name='userId' className="form-control" id="exampleFormControlInput1" placeholder="Enter your User ID"/>
      </div>
      <div className="form-group">
        <label for="exampleFormControlInput1">First Name:</label>
        <input type="text" onChange={handleInputChange} value={item.firstName} name='firstname' lassName="form-control" id="email" placeholder="Enter your first name" required/>
      </div>
      <div className="form-group">
        <label for="exampleFormControlTextarea1">Last Name:</label>
        <textarea type="text" onChange={handleInputChange} value={item.lastName} name='lastname' className="form-control" maxlength="6000" id="exampleFormControlTextarea1" placeholder="Enter your last name" rows="3" required></textarea>
      </div>
      <div className="form-group">
        <label for="exampleFormControlInput1">Phone Number:</label>
        <input type="text" name='phonenumber' onChange={handleInputChange} value={item.phoneNumber}  className="form-control" id="exampleFormControlInput1" placeholder="Enter your phone number"/>
      </div>
      <div className="form-group">
        <label for="exampleFormControlInput1">Email Address:</label>
        <input type="text" name='email' onChange={handleInputChange} value={item.email} className="form-control" id="email" placeholder="Enter your email" required/>
      </div>
      <div className="form-group">
        <label for="exampleFormControlTextarea1">Home Address:</label>
        <textarea type="text" name='adress' onChange={handleInputChange} value={item.address} className="form-control" maxlength="6000" id="exampleFormControlTextarea1" placeholder="Enter your home address" rows="3" required></textarea>
      </div>
      <button type="submit" value="send" style={{backgroundColor: "#a0bbad", borderColor:"#a0bbad"}} className="btn btn-primary">Save</button>
    </form>
  </div>
  );
}
export default SubmitForm;