import React from 'react';
import './ContactUs.css';
import Navbar from './Navbar';

function ContactUs() {
  const locations = [
    { title: "Pujitha", address: "21MIS1090", phone: "8838400199", email: "pujitha.bandaru2021@vitstudent.ac.in" },
    { title: "Vyshnavi", address: "21MIS1130", phone: "8328589257", email: "grandhi.vyshnavi2021@vitstudent.ac.in" },
    { title: "Varshini", address: "21MIS1139", phone: "9493300199", email: "basetty.varshini2021@vitstudent.ac.in" },
    { title: "Jahnavi", address: "21MIS1151", phone: "9290439333", email: "sailakshmi.jahnavi2021@vitstudent.ac.in" },
    { title: "Durga", address: "21MIS1177", phone: "9787307883", email: "durgasree.priyap2021@vitstudent.ac.in" }
  ];

  const handlePhoneClick = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="contactus">
      <Navbar/>
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>
      <div className="address-boxes">
        {locations.map((location, index) => (
          <div key={index} className="address-box">
            <div className="doctor-symbol">👨‍⚕️</div>
            <h2>{location.title}</h2>
            <p>{location.address}</p>
            <p className="phone" onClick={() => handlePhoneClick(location.phone)}>
              Phone: {location.phone}
            </p>
            <p className="email" onClick={() => handleEmailClick(location.email)}>
              Email: {location.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactUs;