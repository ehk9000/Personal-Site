import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <NavLink exact to='/' activeClassName="active" className="nav-links">Home</NavLink>
      <NavLink exact to='/About' activeClassName="active" className="nav-links">About</NavLink>
      <NavLink exact to='/Portfolio' activeClassName="active" className="nav-links">Portfolio</NavLink>
    </header>
  );
};

export default NavBar;