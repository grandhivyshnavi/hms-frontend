import {Link} from "react-router-dom";
import React from 'react';
import './Nav2.css';

function Nav2()
{
    return(
        <nav className="navbar">
            <Link className="navbar-brand" to="/">DOCTOR OPERATIONS</Link>
            <div className="nav">
                <Link className="nav-link" to="/create-patient">Add Patient</Link>
                <Link className="nav-link" to="/patient-list">Patient List</Link>
                <Link className="nav-link" to="/create-doctor">Add Doctor</Link>
                <Link className="nav-link" to="/doctor-list">Doctor List</Link>
            </div>
        </nav>
    )
}
export default Nav2;
