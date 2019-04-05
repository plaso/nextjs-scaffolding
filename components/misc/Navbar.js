import React from 'react';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">LOGO</div>
      <ul>
        <li><NavLink route="home">Home</NavLink></li>
        <li><NavLink route="about">About</NavLink></li>
      </ul>
    </nav>
  )
}
export default Navbar;