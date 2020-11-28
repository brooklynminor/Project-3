import React, {NavLink} from "react";

function Navbar() {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        Pet Hotel
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        // data-toggle="collapse"
        // data-target="#navbarNav"
        // aria-controls="navbarNav"
        // aria-expanded="false"
        // aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/calendar">
            </NavLink>
            <li className="nav-item">
            </li>
            <NavLink className="nav-link" to="/registerpet">
            </NavLink>
          </li>
        </ul>
      </div>
    </Navbar>
  );
}
export default Navbar;