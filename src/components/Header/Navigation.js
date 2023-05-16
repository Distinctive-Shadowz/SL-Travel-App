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
          <a href="/Places">Map</a>
        </li>
        <li>
          <a href="/About_us">About Us</a>
        </li>
        <li>
          <a className="Login" href="/Login">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
