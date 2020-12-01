import React, {useEffect, useState} from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Calendar from "./Calendar";
import BookNow from "./BookNow";
import SignIn from "./signin";
import SignUp from "./SignUp";
import UserContext from "../utils/userContext";
// import "./style.css"

// import Schedule from "./views/Schedule";
import Profile from "../views/Profile";
import RegisterPet from "../views/RegisterPet";
import Slider from "../components/Slider";
import SignInForm from "./signin"

function Navbar() {
    const [id, setId] = useState([])
    const [name, setName] = useState([])

    useEffect(() => {
        loadId()
      }, [])
      function loadId(){
          console.log("SET ID: ",SignInForm)
        setId(SignInForm.userId?SignInForm.userId:"")
      }
      function LoggedIn(){
          setName(localStorage.userName?localStorage.userName:"")
          console.log(name)
          return( <h7 className="text-light text-right">{name} is logged in</h7> )
      }
    console.log("NAVBAR CONTEXT SIGN IN: ", SignInForm.userId)
  return (
    <UserContext.Provider value={id}>
    <Router basename={process.env.PUBLIC_URL}>
            <nav className="navbar navbar-dark bg-dark">
                <div className="align-items-center row">
                <ul>
                        <li className="nav-item active col-sm-5">
                            <Link className="navbar-brand" to="/">Creature Comfort</Link>
                        </li>
                </ul>
                <button class="navbar-toggler col-sm-5 p-0" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className='navbar-nav ml-3 mr-5'>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/BookNow">Book Now</Link>
                        </li>
                    </ul>
                    <div className="text-right">
                    <LoggedIn/>
                    </div>
                    <div class="dropdown col justify-content-end text-right">
                      <button class="btn btn-secondary dropdown-toggle justify-content-end text-right" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        More
                      </button>
                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2">
                        <button class="dropdown-item" type="button"><Link class="dropdown-item" to="/SignIn">Sign-In</Link></button>
                        <button class="dropdown-item" type="button"><Link class="dropdown-item" to="/SignUp">Sign-Up</Link></button>
                        <button class="dropdown-item" type="button"><Link className="dropdown-item" to="/register">Register Pet</Link></button>
                        <button class="dropdown-item" type="button"><Link className="dropdown-item" to="/profile">Profile</Link></button>
                      </div>
                    </div>
                    {/* <ul className='navbar-nav ml-3 float-right'>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/SignIn">Sign-In</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/SignUp">Sign-Up</Link>
                        </li>

                    </ul> */}
                </div>
                </div>
            </nav>
            <Switch>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/BookNow">
                    <BookNow />
                </Route>

                <Route path="/register">
                    <RegisterPet />
                </Route>
                <Route path="/calendar">
                    <Calendar />
                </Route>
                <Route path="/SignIn">
                    <SignIn />
                </Route>
                <Route path="/SignUp">
                    <SignUp />
                </Route>

                <Route path="/">
                    <Slider />
                </Route>


            </Switch>

        </Router>
        </UserContext.Provider>

  );
}
export default Navbar;