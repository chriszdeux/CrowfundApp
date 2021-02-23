import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
// import IoCheckmarkDoneCircleSharp from 'react-icons/io';


import '../../styles/navbar-style.css';
export const Navbar = () => {
  return (
    <header id="header" className="main__container">
      <nav className="navbar second__container">
        <h2 className="navbar--name">crowdfund</h2>
        <GiHamburgerMenu className="navbar--menu"/>
      </nav>
    </header>
  )
}
