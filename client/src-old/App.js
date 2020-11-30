
import React from 'react';
import './App.css';

import Calendar from "./components/Calendar";
import Navbar from "./components/Navbar";

// import Schedule from "./views/Schedule";
import Profile from "./views/Profile";
import RegisterPet from "./views/RegisterPet";
import AboutUs from "./views/AboutUs";
// import Login from "./views/Login";

import {
  // BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from "react-router-dom";



function App() {
  return (
    <div>

     <Navbar />
      <div className="container">
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route path="/registerpet">
            <RegisterPet />
          </Route>
          <Route path="/">
            <AboutUs />
          </Route>
        </Switch>
      </div>

    
      <div class="App-footer">
        <p>@Project Team Name</p>
      </div>
    
    </div>
  );
}

export default App;
