import FooterWeb from "../components/footer_web";
import HeaderWeb from "../components/header_web";
import "../style/ContactUs.css";
import React, { useState } from "react";
import axios from "axios";
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const ContactUsHeader = () => {
    return (
        <div className="contact-us-header">
            <h1>Contact Us</h1>
            <p>Prepared to grow and tackle the technological challenges of the future?
                <div></div> {/* This acts as a line break */}
                Let’s make it happen!
            </p>
        </div>
    );
}

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendData = async (e) => {
    e.preventDefault(); // Prevent page reload

    if (!formData.name || !formData.email || !formData.message) {
      setResponseMsg("Please fill in all required fields.");
      return;
    }

    try {
      await axios.post("MailData.php", formData);
      setResponseMsg("Form submitted successfully!");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      setResponseMsg("Error submitting form. Please try again.");
    }
  };

  return (
      <section className="contact-container">
        <div className="contact-info">
          <h2 className="section-title animate-slide-left">Connect With Us</h2>
          
          <div className="info-card">
            <div className="info-item animate-pop-in" style={{animationDelay: '0.2s'}}>
              <div className="icon-wrapper">
                <FiPhone className="info-icon" />
              </div>
              <div className="info-content">
                <h3>Direct Line</h3>
                <p>+971585502390</p>
              </div>
            </div>
            
            <div className="info-item animate-pop-in" style={{animationDelay: '0.4s'}}>
              <div className="icon-wrapper">
                <FiMail className="info-icon" />
              </div>
              <div className="info-content">
                <h3>Visit Us</h3>
                <p style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
  @contactinfinitemarketsolution
</p>
                </div>
            </div>
            
            <div className="info-item animate-pop-in" style={{animationDelay: '0.6s'}}>
              <div className="icon-wrapper">
                <FiMapPin className="info-icon" />
              </div>
              <div className="info-content">
                <h3>Visit Us</h3>
                <p>STRIP , Block C VL10-018 , Sharjah</p>
              </div>
            </div>
          </div>
        </div>
  
        <div className="contact-form animate-slide-right">
          <div className="form-header">
            <h2 className="section-title">Send Your Message</h2>
            <p className="form-subtitle">We typically respond within 24 hours</p>
          </div>
          
          <form className="form-container" onSubmit={sendData}>
            <div className="form-group">
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name} 
                onChange={handleChange}
                className="form-input" 
                placeholder=" "
                required 
              />
              <label htmlFor="name" className="form-label">Your Name</label>
              <div className="focus-border"></div>
            </div>
            <div className="form-group">
              <input 
                type="text" 
                id="phone" 
                name="phone"
                value={formData.phone} 
                onChange={handleChange}
                className="form-input" 
                placeholder=" "
              />
              <label htmlFor="phone" className="form-label">Your Number</label>
              <div className="focus-border"></div>
            </div>
  
            <div className="form-group">
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email} 
                onChange={handleChange}
                className="form-input" 
                placeholder=" "
                required 
              />
              <label htmlFor="email" className="form-label">Your Email</label>
              <div className="focus-border"></div>
            </div>
  
            <div className="form-group">
              <textarea 
                id="message"
                name="message"
                value={formData.message} 
                onChange={handleChange}
                className="form-input textarea" 
                placeholder=" "
                required 
                rows="4"
              ></textarea>
              <label htmlFor="message" className="form-label">Your Message</label>
              <div className="focus-border"></div>
            </div>
  
            <button type="submit" className="submit-btn">
              <FiSend className="btn-icon" /> Send Message
            </button>
            <p id="Aftari">{responseMsg}</p>
          </form>
        </div>
      </section>
    );
};

function ContactUs(){
    return (
        <div>
            {/* <HeaderWeb/> */}
            <ContactUsHeader/>
            <ContactSection/>
            {/* <FooterWeb/> */}
        </div>
    );
}

export default ContactUs;
