import {Link} from "react-router-dom";
import React from 'react';
import './Nav3.css';

function Nav3()
{
    return(
        <nav className="navbar">
            <Link className="navbar-brand" to="/">ADMIN OPERATIONS</Link>
            <div className="nav">
                <Link className="nav-link" to="/create-patientadmin">Add Patient</Link>
                <Link className="nav-link" to="/patientadmin-list">Patient List</Link>
                <Link className="nav-link" to="/create-doctoradmin">Add Doctor</Link>
                <Link className="nav-link" to="/doctoradmin-list">Doctor List</Link>
            </div>
        </nav>
    )
}
export default Nav3;
