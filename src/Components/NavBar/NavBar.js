import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink to='/About'>About</NavLink>
      <NavLink to='/Projects'>Projects</NavLink>
      <NavLink to='/Experience'>Experience</NavLink>
    </nav>
  );
};

export default NavBar;