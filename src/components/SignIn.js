import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignIn.css'; // Import the CSS file
import background from "./background.jpeg";

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('Patient');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    axios
      .post('https://hms-deployment-backend.onrender.com/signin', { username, password, userType })
      .then((response) => {
        if (response.data === 'Sign-in successful!') {
          // Redirect to the new page after successful sign-in
          switch (userType) {
            case 'Patient':
              navigate('/create-appointment');
              break;
            case 'Doctor':
              navigate('/create-patient');
              break;
            case 'Admin':
              navigate('/create-patientadmin');
              break;
            default:
              navigate('/default-dashboard');
          }
        } else {
          setErrorMessage(response.data);
          setSuccessMessage('');
        }
      })
      .catch((error) => {
        setErrorMessage(error.response.data);
        setSuccessMessage('');
      });
  };

  return (
    <div>
      <div className="navbar">
        <div className="logo" style={{ textAlign: 'center' }}>HOSPITAL MANAGEMENT SYSTEM</div>
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/contactus">Contact Us</Link>
        </div>
      </div>
      <div className="center-container">
      <img src={background} alt="banner" className="background-image" width="960px"/>
        <div className="form-container">
          <h2>Sign In</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>User Type:</label>
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="Patient">Patient</option>
            <option value="Doctor">Doctor</option>
            <option value="Admin">Admin</option>
          </select>
          <button onClick={handleSignIn}>Sign In</button>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
