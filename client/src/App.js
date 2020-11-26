import React from 'react';
import './App.css';

import { Button, Card, Form } from 'react-bootstrap'

function App() {
  return (
    <div>
      <header class="App-header">
        <a href="#" class="col-sm-8 fs-1">Pet Hotel</a>
        <a href="#" class="col-sm-2 ml-2 mr-1">Contact</a>
        <a href="#" class="col-sm-2 ml-1">About Us</a>

      </header>

      <div class="App-body">
      <div class="row">  
      <div class="col-md-6">&nbsp;</div>
        <div class="col-md-6">
          <div class="card">
          <Card.Img src="https://wtop.com/wp-content/uploads/2016/12/ThinkstockPhotos-509640879.jpg" />
          <Card.Body>
            <Card.Title>
              Welcome to PET HOTEL
            </Card.Title>
            <Form>
              <Form.Control type="email" placeholder="ID : Email"/>
              <Form.Control type="password" placeholder="Password" style={{marginTop:10}}/>
              <Form.Text class="fs-6 text-muted">
                If you don't have ID yet, Please join us<a href="#"> Now.</a> 
              </Form.Text>
            </Form>
            
          </Card.Body>
          <Button>Login</Button>
          </div>
        </div>
        </div>
      </div>

      <div class="App-footer">
        <p>@Project Team Name</p>
      </div>
    
    </div>
  );
}

export default App;
