import React, {useState} from "react";

function Form() {
  const [ item, setItem ]= useState({})

  function handleInputChange( event ){

    const { name, value }= event.target
    setItem( { ...item, [name]: value } )

 }
 function handleInputSubmit(){
   console.log(item)
}
    return(
    <div className="container-md">
<h2>Insert Inquiries</h2>
<br />
  <form action="mailto:brooklynminor4@gmail.com" onSubmit={handleInputSubmit} method="post">
      <div className="form-group">
          <label for="exampleFormControlInput1">Name:</label>
          <input type="text" value={item.firstname} onChange={handleInputChange} className="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
        </div>
      <div className="form-group">
          <label for="exampleFormControlInput1">Email Address:</label>
          <input type="text" value={item.email} onChange={handleInputChange} className="form-control" id="email" placeholder="Enter your email" required/>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Message:</label>
          <textarea type="text"value={item.message} onChange={handleInputChange} className="form-control" maxlength="6000" id="exampleFormControlTextarea1" placeholder="Enter a message" rows="3" required></textarea>
        </div>
        <button type="submit" value="send" style={{backgroundColor: "#a0bbad", borderColor:"#a0bbad"}} className="btn btn-primary">Submit</button>
      
  </form>
  </div>
  );
}

export default Form;