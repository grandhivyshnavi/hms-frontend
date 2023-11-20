// Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; // Import the CSS file

function Nav() {
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">
        PATIENT OPERATIONS
      </Link>
      <div className="nav">
        <Link className="nav-link" to="/create-appointment">
          Book Appointment
        </Link>
        <Link className="nav-link" to="/appointment-list">
          Patient List
        </Link>
      </div>
    </nav>
  );
}

export default Nav;

