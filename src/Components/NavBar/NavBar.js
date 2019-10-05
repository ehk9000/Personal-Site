import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
        <NavLink to='/About' className="nav-links">About</NavLink>
        <NavLink to='/Projects' className="nav-links">Projects</NavLink>
        <NavLink to='/Experience' className="nav-links">Experience</NavLink>
    </header>
  );
};

export default NavBar;