import React, { useState } from "react";
import "./sidecontact.css";

const SideContact = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 400); // Matches the CSS transition duration (0.4s)
  };

  return (
    <>
      {isOpen && <div className="modal-overlay" onClick={handleClose}></div>}

      <div className={`contact-modal ${isOpen ? "open" : ""} ${isClosing ? "closing" : ""}`}>
        <button className="close-bt" onClick={handleClose}>✖</button>
        <h2>Working on something big?</h2>
        <p>Share the details of your project – like scope, timeframes, or business challenges.</p>
        <form>
          <input type="text" placeholder="Name" />
          <div className="email-phone-group">
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone" />
          </div>
          <textarea placeholder="Message"></textarea>
          <div className="service-group">
            <p>I'm looking into</p>
            <div className="service-options">
              {["Custom Software", "Mobile App", "Web Development", "Server Side Development", "Digital Marketing"].map((service) => (
                <button key={service} type="button" className="service-btn">
                  {service}
                </button>
              ))}
            </div>
          </div>
          <button type="submit" className="submit-contact">SUBMIT</button>
        </form>
      </div>
    </>
  );
};

export default SideContact;
