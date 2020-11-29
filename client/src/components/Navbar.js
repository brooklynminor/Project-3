import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Calendar from "./Calendar";
// import Schedule from "./views/Schedule";
import Profile from "../views/Profile";
import RegisterPet from "../views/RegisterPet";
import AboutUs from "../views/AboutUs";


function Navbar() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light row">
                <button class="navbar-toggler ml-2" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className='navbar-nav ml-3'>
                        <li className="nav-item active">
                            <Link className="navbar-brand" to="/">Pet Hotel</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/profile">Profile</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/register">Register Pet</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/calendar">Calendar</Link>
                        </li>

                    </ul>
                </div>
            </nav>
            <Switch>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/register">
                    <RegisterPet />
                </Route>
                <Route path="/calendar">
                    <Calendar />
                </Route>
                <Route path="/">
                    <AboutUs />
                </Route>


            </Switch>

        </Router>
  );
}
export default Navbar;