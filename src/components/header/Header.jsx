import React from 'react';
import Logo from '../../assets/header/logo.png';
import './Header.css';
import { BsChevronCompactDown } from 'react-icons/bs'

const Header = () => {
  return (
    <header className="header">
      <a href="#home" className="logo">
        {" "}
        <img src={Logo} alt="" />{" "}
      </a>
      <nav className="navbar">
        <a className='toggle' href="#service">
          {" "}
          <BsChevronCompactDown />
        </a>
        <ul>
          <a href="#home">الرئيسيه </a>
          <a href="#service">الخدمات </a>
          <a href="#portfolio">أعمالنا </a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;