import { Link } from "react-router";

import  './header.css';
import{ NavLink} from "react-router"
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState, useEffect } from "react";

/*function NavBar(){

  return <div className="header">
    <div>
        <NavLink className="logo"to="/"><h1> Vikram Portfolio</h1></NavLink>
    </div>

    <div>
        <ul> 
            <li>
                <NavLink className="nav-link" to="/"><h4>Home</h4></NavLink>
            </li>
            
            <li>
               <NavLink className="nav-link" to="/about"><h4>About</h4></NavLink>
            </li>

            <li>
                <NavLink className="nav-link" to="/skills"><h4>Skills</h4></NavLink>
            </li>

            <li>
                <NavLink className="nav-link" to="/contact"><h4>Contact</h4></NavLink>
            </li>
        </ul>
    </div>











  </div>


   
  
}*/

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <NavLink to="/">Vikram Portfolio</NavLink>
      </div>

      {/* Nav Links */}
      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              onClick={() => setIsOpen(false)}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
}

export default NavBar;