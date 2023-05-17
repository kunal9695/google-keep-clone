import React from "react";
import logo from "./Images/2965358.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" width="70" height="80" />
        <h1>Keep Notes</h1>
      </div>
    </>
  );
};

export default Header;
