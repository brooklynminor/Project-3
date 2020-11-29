import React from 'react';
import { Button, Card, Form } from 'react-bootstrap'

function Login(){
  return(
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
                {/* If you don't have ID yet, Please join us<a href="#"> Now.</a>  */}
              </Form.Text>
            </Form>
            
          </Card.Body>
          <Button>Login</Button>
          </div>
        </div>
        </div>
  )
}

export default Login
      