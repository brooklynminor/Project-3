import React from 'react';
import './App.css';

import { Button, Card, Form } from 'react-bootstrap'

function App() {
  return (
    <div>
      <header class="App-header">
        <h1 class="col-sm-8">Pet Hotel</h1>
        <a href="#" class="col-sm-2">Contact</a>
        <a href="#" class="col-sm-2">About Us</a>

      </header>

      <div class="App-body">
        <div class="card">
          <Card.Img src="https://wtop.com/wp-content/uploads/2016/12/ThinkstockPhotos-509640879.jpg" style={{width:550}}/>
          <Card.Body>
            <Card.Title>
              Welcome to PET HOTEL
            </Card.Title>
            <Form>
              <Form.Control type="email" placeholder="ID : Email"/>
              <Form.Control type="password" placeholder="Password" style={{marginTop:10}}/>
              <Form.Text class="text-muted fs-6">
                If you don't have ID yet, Please join us<a href="#" class="stretched-link"> Now.</a> 
              </Form.Text>
            </Form>
            
          </Card.Body>
          <Button>Login</Button>
          
        </div>

      </div>

      <div class="App-footer">
        <p>@Project Team Name</p>
      </div>
    
    </div>
  );
}

export default App;
