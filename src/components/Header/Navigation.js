import React from "react";
import "./Dashboard.css";

function Navigation() {
  return (
    <nav className="Nav">
      <a href="/Home">
        <img
          className="Logo_style"
          width="100px"
          src={"/Images/Logo.jpg"}
          alt="Logo"
        />
      </a>
      <ul>
        <li className="active">
          <a href="/Hotels">Hotels</a>
        </li>
        <li>
          <a href="/Places">Places</a>
        </li>
        <li>
          <a href="/Aboutus">About Us</a>
        </li>
        <li>
          <a className="Login" href="/Login">
            Login
          </a>
        </li>
        <li>
          <a className="Login" href="/Register">
            Register
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
