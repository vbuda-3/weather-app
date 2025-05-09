import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="brand-link">
          Vacation Weather
        </NavLink>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/search" className="nav-link">
            Search
          </NavLink>
        </li>

        {/* <li className="nav-item">
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
        </li> */}

        {/* <li className="nav-item">
          <NavLink to="/saved-searches" className="nav-link">
            Saved Searches
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
