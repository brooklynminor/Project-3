import React, { useState } from "react";
import Form from "./components/Form";

function ContactUs(props) {
    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ message, setMessage ] = useState("")

    function handleInputChange ( event ) {
        const {name, value} =  event.target;
        const {email, value} =  event.target;
        const {message, value} =  event.target;

        if( name === 'name' )
        setName(value)
        if( email=== 'email')
        setEmail(value)
        else if( message === 'message')
        setMessage(value)
    };

    function handleInputSubmit(event){
        event.preventDefault();
        alert(`Thank you for Submitting ${name}`)
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