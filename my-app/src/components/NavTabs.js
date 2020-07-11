import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  // switch statement 

  // case not logged in
  // Home
  // sign up
  // sign in
  // about

  // case logged in user
  // Home
  //  log out
  //  about
  //  about user 

  // case logged in admin 
  // Home
  // log out
  // about
  // about user 
  // about admin

  // switch statement creates a component that is only rendered according to 

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Signup"
          className={location.pathname === "/Signup" ? "nav-link active" : "nav-link"}
        >
          Sign Up
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Sign in
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
