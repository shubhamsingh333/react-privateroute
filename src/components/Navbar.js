import React from 'react';
// import { Link } from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const NavLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
    };
  };
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link> */}
      <NavLink style={NavLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={NavLinkStyles} to="/about">
        About
      </NavLink>
      <NavLink style={NavLinkStyles} to="/profile">
        Profile
      </NavLink>
    </nav>
  );
};

export default Navbar;
