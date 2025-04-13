import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Subscribe Section */}
        <div className="footer-section fotter-text">
          <h2>Subscribe for More News</h2>
          <div className="subscribe-wrapper">
            <form className="subscribe-form">
              <input type="email" placeholder="Email Address" />
              <button type="submit">Subscribe</button>
            </form>
            <div className="social-icons">
              <FaLinkedin className="icon" />
              <FaXTwitter className="icon" />
              <FaFacebook className="icon" />
              <FaInstagram className="icon" />
            </div>
          </div>
        </div>
        
        {/* Company Links */}
        <div className="footer-section">
          <h2>Company</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        {/* Resources */}
        <div className="footer-section">
          <h2>Resources</h2>
          <ul>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div className="footer-section">
          <h2>Contact</h2>
          <p>Greyson Lane 6212-648 Palarni.</p>
          <p>(610) 945-7986</p>
          <p>hello@gmail.com</p>
          <button className="consult-btn">Free Consultation</button>
        </div>
      </div>
      
      <hr />
      
      {/* Privacy and Policy */}
      <div className="footer-bottom">
        <div className="policy-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;