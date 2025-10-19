// import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

const Footer = () => {
  // Social media links
  const socialLinks = {
    facebook: "",
    twitter: "",
    linkedin: "",
    instagram: "",
  };

  // Contact information
  const contactInfo = {
    email: "aviationheights@gmail.com",
    phone: "+254 -7032-98-702/ +254-7132-18-583 ",
    address: "MWM4+J8P, Nairobi",
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand-section">
          <Link to="/" className="footer-logo-link">
            <span>AVIATION HEIGHTS</span>
          </Link>
          <h3>AVIATION HEIGHTS</h3>
          <p>
            Experience the perfect blend of comfort, taste, and entertainment
          </p>
          <div className="social-links">
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel=""
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel=""
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel=""
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel=""
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <div className="contact-info">
            <p>
              Email:{" "}
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </p>
            <p>
              Phone:{" "}
              <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
                {contactInfo.phone}
              </a>
            </p>
            <p>Address: {contactInfo.address}</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Aviation Heights. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
