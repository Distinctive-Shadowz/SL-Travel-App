import React from "react";
import Navigation from "./Navigation";

const Header = ({ from, to }) => {
  return (
    <header>
      <Navigation from={from} to={to} />
    </header>
  );
};

export default Header;
