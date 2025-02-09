import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/form" className="nav-link">Form</Link></li>
        <li><Link to="/animals" className="nav-link">Animals</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
