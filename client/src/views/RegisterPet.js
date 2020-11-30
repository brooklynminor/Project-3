import React from "react";
import SubmitForm from "../components/SubmitForm";

function RegisterPet(props) {

    // handleSubmit = event => {
    //     event.preventDefault();
    //     this.props.addItem(this.state.item);
    // }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
            <SubmitForm 
            userid={props.userId}
            firstname={props.firstName}
            lastname={props.lastName}
            ownerName={props.petName}
            email={props.email}
            phonenumber={props.phoneNumber}
            image={props.image}
            />
      </div>
    </div>
  </div>
  );
}
export default RegisterPet;