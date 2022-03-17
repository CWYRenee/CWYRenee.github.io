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
import { BrowserRouter, Link, Routes, Route, Router} from 'react-router-dom';

import Profile from '../Feed/Profile'
import Education from '../Feed/Education'
import Experience from '../Feed/Experience'
import Projects from '../Feed/Projects'
import ContactMe from '../Feed/ContactMe'

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
      <BrowserRouter>

        <Link to="/profile" style={{ textDecoration: 'none' }}><HeaderOption Icon={HomeIcon} title="Home" /></Link>
        <Link to="/education" style={{ textDecoration: 'none' }}><HeaderOption Icon={SchoolIcon} title="Education"  /></Link>
        <Link to="/experience" style={{ textDecoration: 'none' }}> <HeaderOption Icon={BusinessCenterIcon} title="Experience" /></Link>
        <Link to="/projects" style={{ textDecoration: 'none' }}><HeaderOption Icon={BuildIcon} title="Projects" href="./Projects" /></Link>
        <Link to="/contactme" style={{ textDecoration: 'none' }}><HeaderOption Icon={RateReviewIcon} title="Contact Me" href="./ContactMe" /></Link>
        <Link to="https://www.linkedin.com/in/renee-chiu-974255152/" target='_blank' rel="noopener" style={{ textDecoration: 'none' }}><HeaderOption Icon={ExitToAppIcon} title="LinkedIn" /></Link>
     
      <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      {/* <Route path="/contactme" element={<ContactMe />} /> */}
      </Routes>
      </BrowserRouter>
  
      </div>
    </div>
  );
}

export default Header;