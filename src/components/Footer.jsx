import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            Welcome to Festi Tecki, your number one source for all festival
            tickets.
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/Admin">Home</Link>
            </li>
            <li>
              <Link to="/Details">About</Link>
            </li>
            <li>
              <Link to="/OurStory">Our Story</Link>
            </li>
            <li>
              <Link to="/contactUs">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Get Tickets</h4>
          <ul>
            <li>
              <Link to="/tickets">Buy Tickets</Link>
            </li>
            <li>
              <Link to="/tickets/vip">VIP Tickets</Link>
            </li>
            <li>
              <Link to="/tickets/early-bird">Early Bird Tickets</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Festi Tecki | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
