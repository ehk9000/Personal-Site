import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <NavLink to='/About' activeClassName="active" className="nav-links">About</NavLink>
      <NavLink to='/Projects' activeClassName="active" className="nav-links">Projects</NavLink>
      <NavLink to='/Experience' activeClassName="active" className="nav-links">Experience</NavLink>
    </header>
  );
};

export default NavBar;