import React from 'react';
import './AboutPage.css';
import Navbar from './Navbar';
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

// Footer component

const Footer = () => {
    return (
        <Box>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">
                            Aim
                        </FooterLink>
                        <FooterLink href="#">
                            Vision
                        </FooterLink>
                        <FooterLink href="#">
                            Testimonials
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">
                            Writing
                        </FooterLink>
                        <FooterLink href="#">
                            Internships
                        </FooterLink>
                        <FooterLink href="#">
                            Coding
                        </FooterLink>
                        <FooterLink href="#">
                            Teaching
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">
                            Uttar Pradesh
                        </FooterLink>
                        <FooterLink href="#">
                            Ahemdabad
                        </FooterLink>
                        <FooterLink href="#">
                            Indore
                        </FooterLink>
                        <FooterLink href="#">
                            Mumbai
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span
                                    style={{
                                        marginLeft: "5px",
                                    }}
                                >
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
    /* You can add more footer content here */
};



// AboutUs component
function AboutUs() {
    return (
        <div className="aboutus">
            <Navbar/>
            <div>
                <h1>About Our Hospital</h1>
                <p>Welcome to our hospital! We are dedicated to providing high-quality healthcare services to our community.</p>
                <p>Our hospital has a team of experienced doctors, nurses, and staff who are committed to delivering the best patient care. We offer a wide range of medical services and state-of-the-art facilities to ensure your well-being.</p>
                <p>Whether you need emergency care, surgery, or routine check-ups, we are here to serve you with compassion and expertise. Your health is our priority.</p>
            </div>
            <Footer /> {
      /* Include the Footer component */}
        </div>
    );
}

export default AboutUs;
