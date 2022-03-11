import React from "react";
import "./Header.sass";
import logo from "./out_logo.png";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from '@material-ui/icons/School';
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import BuildIcon from '@material-ui/icons/Build';
import RateReviewIcon from '@material-ui/icons/RateReview';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src={logo}
          alt="linkedout_logo"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SchoolIcon} title="Education" />
        <HeaderOption Icon={BusinessCenterIcon} title="Experience" />
        <HeaderOption Icon={BuildIcon} title="Projects" />
        <HeaderOption Icon={RateReviewIcon} title="Contact Me" />
        <HeaderOption Icon={ExitToAppIcon} title="LinkedIn" />
      </div>
    </div>
  );
}

export default Header;