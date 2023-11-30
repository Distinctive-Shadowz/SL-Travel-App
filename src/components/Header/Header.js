import React from "react";
import Navigation from "./Navigation";

const Header = ({ from, to, depdates, arrdates, vehicle, arrtime }) => {
  return (
    <header>
      <Navigation
        from={from}
        to={to}
        depdates={depdates}
        arrdates={arrdates}
        vehicle={vehicle}
        arrtime={arrtime}
      />
    </header>
  );
};

export default Header;
