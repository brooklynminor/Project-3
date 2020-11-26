import React from "react";
import Form from "../components/Form";

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
            />
      </div>
    </div>
  </div>
  );
}
export default RegisterPet;