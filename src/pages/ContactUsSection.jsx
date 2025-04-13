import React, { useState } from "react";
import "../style/ContactUsSection.css";

const ContactSection = () => {
  return (
    <section className="cntct-section">
      <div className="cntct-container">
        {/* Background image with proper positioning */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bde2c76232394ff7067ddf9dabc8e12213353c9?placeholderIfAbsent=true&apiKey=0cecb05fd9fe4a8eb878c24e2286b41a"
          alt="Background"
          className="cntct-background-image"
        />
        {/* Overlay with color and opacity */}
        <div className="cntct-background-overlay" />

        {/* Content */}
        <div className="cntct-content-wrapper">
          <div className="cntct-content-container">
            <div className="cntct-columns">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="cntct-form-section">
      <div className="cntct-form-container">
       

        <form
          onSubmit={handleSubmit}
          className="cntct-form"
        >
          <FormInput label="Name" required />

          <div className="cntct-form-row">
            <div className="cntct-form-column">
              <FormInput label="Email" type="email" required />
            </div>
            <div className="cntct-form-column">
              <FormInput label="Phone No" type="tel" required />
            </div>
          </div>

          <FormInput label="Message" required />

          <SubmitButton>Submit</SubmitButton>
        </form>
      </div>
    </section>
  );
};

const ContactInfo = () => {
  return (
    <section className="cntct-info-section">
      <div className="cntct-info-container">
       
        <div className="cntct-info-content">
          <h2 className="cntct-vision-text">
            Let's bring your
            <br />
            vision to life.
          </h2>
          <button className="cntct-talk-button">
            Let's Talk
          </button>
          <h2 className="cntct-questions-heading">
            Do You Have Some
            <br />
            Questions?
          </h2>
          <p className="cntct-questions-text">
            Have questions? We've got answers! <br />
            Reach out to us for expert guidance <br />
            and support.
          </p>
        </div>
      </div>
    </section>
  );
};

const SubmitButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="cntct-submit-button"
    >
      {children}
    </button>
  );
};

const FormInput = ({
  label,
  type = "text",
  required = false,
  className = "",
}) => {
  return (
    <div className="cntct-form-input">
      <label className="cntct-input-label">
        {label}
        {required && "*"}
      </label>
      <input
        type={type}
        required={required}
        className={`cntct-input-field ${className}`}
      />
    </div>
  );
};

export default ContactSection;