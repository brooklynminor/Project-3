import "./App.css";
// import Card from "./components/Card";

import Calendar from "./components/Calendar";
import Navbar from "./components/Navbar";

// import Schedule from "./views/Schedule";
import Profile from "./views/Profile";
import RegisterPet from "./views/RegisterPet";
// import SubmitForm from "./views/SubmitForm";
import AboutUs from "./views/AboutUs";


import React from "react";

import {
  // BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from "react";

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
    </div>
  );
}

export default App;
