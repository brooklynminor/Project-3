import React from "react";
import Form from "./components/Form";

function RegisterPet(props) {

    handleSubmit = event => {
        event.preventDefault();
        this.props.addItem(this.state.item);
      }

  return (
    <div>
      <div className="row">
        <div className="col">
            <Form
            name={props.name}
            email={props.email}
            message={props.message}
            />
      </div>
    </div>
  </div>
  );
}
export default RegisterPet;