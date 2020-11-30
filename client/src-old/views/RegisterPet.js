import React from "react";
import SubmitForm from "../components/SubmitForm";

function RegisterPet(props) {

    // handleSubmit = event => {
    //     event.preventDefault();
    //     this.props.addItem(this.state.item);
    // }

  return (
    <div>
      <div className="row">
        <div className="col">
            <SubmitForm 
            username={props.userId}
            firstname={props.firstName}
            lastname={props.lastName}
            petname={props.petName}
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