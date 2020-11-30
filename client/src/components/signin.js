import React, { Component } from 'react';
import { Card, Form } from 'react-bootstrap'

class Login extends Component {

constructor(){
  super();

        this.state = {
            email: '',
            password: '',
                      
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
      let target = e.target;
      let value = target.type === 'checkbox' ? target.checked : target.value;
      let name = target.name;

      this.setState({
        [name]: value
      });
  }


    handleSubmit(e) {
      e.preventDefault();

      console.log('The form was submitted with the following data:');
      console.log(this.state);
  }

  render(){
    return(
      <div class="row justify-content-center mt-4 mb-4">  
        <div class="col-md-4">

          <div class="card">
          <Card.Img src="https://wtop.com/wp-content/uploads/2016/12/ThinkstockPhotos-509640879.jpg" />
          <Card.Body>
            <Card.Title>
              Welcome to PET HOTEL
            </Card.Title>
            <Form>
              <Form.Control type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="ID : Email"/>
              <Form.Control type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" style={{marginTop:10}}/>
              <Form.Text class="fs-6 text-muted">
                {/* If you don't have ID yet, Please join us<a href="#"> Now.</a>  */}
              </Form.Text>
            </Form>
            

            </Card.Body>

            <button className="btn btn-primary" onClick={this.handleSubmit}>Login</button>

          </div>
        </div>
        </div>
    )
  }
      
  

}

export default Login
      