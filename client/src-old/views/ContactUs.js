import React, { useState } from "react";
import Form from "./components/Form";

function ContactUs(props) {
    const [ firstName, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ message, setMessage ] = useState("")

    function handleInputChange ( event ) {
        
        const {name, value} =  event.target;


        if( firstName === 'name' )
        setName(value)
        if( email=== 'email')
        setEmail(value)
        else if( message === 'message')
        setMessage(value)
    };

    function handleInputSubmit(event){
        event.preventDefault();
        alert(`Thank you for Submitting ${firstName}`)
        setName("")
        setEmail("")
        setMessage("")
    }

  return (
    <div>
      <div className="row">
        <div className="col">
            <Form/>
      </div>
    </div>
  </div>
  );
}
export default ContactUs;