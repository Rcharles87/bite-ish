import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  return (
    <div className="navBar_container">
      <div className="left_container">
        <div className="burger_container">
        Menu
        </div>
        <div className="logo_container">
          <Link to="/">Logo</Link>
        </div>
      </div>
      <div className="account_btns">
        <Link to="/Login">
          <button>Login</button>
        </Link>
        <Link to="/Signup">
          <button>Sign up</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
