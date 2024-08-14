import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <div className="navBar_container">
      <div className="left_container">
        <div className="burger_container">
        <MenuIcon />
        </div>
        <div className="logo_container">
          <Link to="/">Bite-ish</Link>
        </div>
      </div>
      <div className="account_btns">
        <Link to="/Login">
          Log in
        </Link>
        <Link to="/Signup">
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
