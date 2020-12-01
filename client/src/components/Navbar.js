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
    const [name, setName] = useState("")

    useEffect(() => {
        setName()
      }, [])
      function loadId(){
          console.log("SET ID: ",SignInForm)
        setId(SignInForm.userId?SignInForm.userId:"")
      }
      function LoggedIn(){
          if(localStorage.userName){
          setName(localStorage.userName)
          console.log("logged in name",name)
          return( <h7 className="text-dark text-right mb-1 mt-1">{name} is logged in</h7> )
        } else{
            return (null)
        }
      }
      function LogOut(){
        localStorage.userName = ""
        localStorage.userId = ""
        setName("")
      }
    console.log("NAVBAR CONTEXT SIGN IN: ", SignInForm.userId)
  return (
    <UserContext.Provider value={id}>
    <Router basename={process.env.PUBLIC_URL}>
            <nav className="navbar navbar-dark bg-dark row">
                
                    <li className="nav-item active">
                        <Link className="navbar-brand" to="/">Creature Comfort</Link>
                    <div className="text-right">
                    </div>
                    <div class="dropdown col justify-content-end text-right float-right">
                      <button class="btn btn-secondary dropdown-toggle justify-content-end text-right" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Menu
                      </button>
                      <div class="dropdown-menu dropdown-menu-right " aria-labelledby="dropdownMenu2">
                      <button class="dropdown-item" type="button"><Link className="dropdown-item" to="/profile">Profile</Link></button>
                      <button class="dropdown-item" type="button"><Link className="dropdown-item" to="/register">Register Pet</Link></button>
                      <button class="dropdown-item" type="button" onClick={LogOut}><Link class="dropdown-item" to="/BookNow">Reserve A Room</Link></button>
                        <button class="dropdown-item" type="button"><Link class="dropdown-item" to="/SignIn">Sign-In</Link></button>
                        <button class="dropdown-item" type="button"><Link class="dropdown-item" to="/SignUp">Sign-Up</Link></button>
                        <button class="dropdown-item" type="button" onClick={LogOut}><Link class="dropdown-item" to="/">Log Out</Link></button>
                      </div>
                    </div>
                    </li>

            </nav>
            <LoggedIn/>

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