import React, { useRef } from "react";
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
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from 'react-router-dom';
import Modal from '../Feed/Modal'
import ContactCard from "../Feed/ContactCard";


const Header = () => {

  const modal = useRef(false)

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
        <Link smooth to="#profile" style={{ textDecoration: 'none' }}><HeaderOption Icon={HomeIcon} title="Home" /></Link>
        <Link smooth to="#education" style={{ textDecoration: 'none' }}><HeaderOption Icon={SchoolIcon} title="Education"  /></Link>
        <Link smooth to="#experience" style={{ textDecoration: 'none' }}> <HeaderOption Icon={BusinessCenterIcon} title="Experience" /></Link>
        <Link smooth to="#projects" style={{ textDecoration: 'none' }}><HeaderOption Icon={BuildIcon} title="Projects" href="./Projects" /></Link>
        <Link smooth to="#contactme" style={{ textDecoration: 'none' }} onClick={() => {modal.current.open()}}><HeaderOption Icon={RateReviewIcon} title="Contact Me"/></Link>
        <a href={'https://www.linkedin.com/in/renee-chiu-974255152/'} target='_blank' rel="noreferrer" style={{ textDecoration: 'none' }}><HeaderOption Icon={ExitToAppIcon} title="LinkedIn" /></a>
      </BrowserRouter> 
      <Modal ref={modal}>
        <ContactCard />
      </Modal>
      </div>
    </div>
  );
}

export default Header