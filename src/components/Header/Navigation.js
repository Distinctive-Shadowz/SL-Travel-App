import React from "react";
import "./Dashboard.css";

function Navigation() {
  return (
    <nav className="Nav">
      <div className="container">
        <div className="header">
          <a href="/Home">
            <img
              className="Logo_style"
              width="100px"
              height={"250px"}
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
              <a href="/About_us">About Us</a>
            </li>
            <li>
              <div className="login_btn">
                <a className="Login" href="/Login">
                  Login
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
