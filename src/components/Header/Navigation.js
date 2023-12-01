import React from "react";
import "./Dashboard.css";

function Navigation({ from, to, depdates, arrdates, vehicle, arrtime }) {
  return (
    <nav className="Nav">
      <div className="container">
        <div className="header">
          <a href="/">
            <img
              className="Logo_style"
              width="100px"
              height={"250px"}
              src={"/Images/Logo.jpg"}
              alt="Logo"
            />
          </a>
          <ul>
            <li>
              <a
                href={`/places?from=${from ? from : ""}&to=${
                  to ? to : ""
                }&depdates=${depdates ? depdates : ""}&arrdates=${
                  arrdates ? arrdates : ""
                }&vehicle=${vehicle ? vehicle : ""}&deptime=${
                  arrtime ? arrtime : ""
                }`}
              >
                Places
              </a>
            </li>
            <li className="active">
              <a
                href={`/hotels?from=${from ? from : ""}&to=${
                  to ? to : ""
                }&depdates=${depdates ? depdates : ""}&arrdates=${
                  arrdates ? arrdates : ""
                }&vehicle=${vehicle ? vehicle : ""}&deptime=${
                  arrtime ? arrtime : ""
                }`}
              >
                Hotels
              </a>
            </li>
            <li className="active">
              <a
                href={`/meals?from=${from ? from : ""}&to=${
                  to ? to : ""
                }&depdates=${depdates ? depdates : ""}&arrdates=${
                  arrdates ? arrdates : ""
                }&vehicle=${vehicle ? vehicle : ""}&deptime=${
                  arrtime ? arrtime : ""
                }`}
              >
                Meals
              </a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <div className="login_btn">
                <a className="Login" href="/login">
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
