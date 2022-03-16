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
import Link from '@mui/material/Link';

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
        <Link to="/Profile" underline="none"><HeaderOption Icon={HomeIcon} title="Home" /></Link>
        <Link to="/Education" underline="none"><HeaderOption Icon={SchoolIcon} title="Education"  /></Link>
        <HeaderOption Icon={BusinessCenterIcon} title="Experience" onClick={() => window.open('./Experience')} />
        <HeaderOption Icon={BuildIcon} title="Projects" href="./Projects" />
        <HeaderOption Icon={RateReviewIcon} title="Contact Me" href="./ContactMe" />
        <Link href="https://www.linkedin.com/in/renee-chiu-974255152/" target='_blank' rel="noopener" underline="none"><HeaderOption Icon={ExitToAppIcon} title="LinkedIn" /></Link>
      </div>
    </div>
  );
}

export default Header;