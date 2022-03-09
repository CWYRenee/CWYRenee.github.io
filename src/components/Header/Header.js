
import React from "react";
import "./Header.css";
import logo from './out_logo.svg';
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src={logo}
          alt="linkedout logo"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right"></div>
    </div>
  );
}

export default Header;