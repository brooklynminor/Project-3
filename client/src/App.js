
import "./App.css";

import Card from "./components/Card";
import LoginForm from "./components/LoginForm";
import LoginBar from "./components/LoginBar";
import SubmitForm from "./components/SubmitForm";
import Navbar from "./components/Navbar";

import SignUp from "./views/SignUp";
import Profile from "./views/Profile";
import RegisterPet from "./views/RegisterPet";
import EmergencyContact from "./views/EmergencyContact";
import AboutUs from "./views/AboutUs";
import Login from "./views/Login";
import AboutUs from "./views/AboutUs";
import Calendar from "./views/Calendar";

import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
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
          <Route path="/contactinformation">
            <ContactInformation />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
