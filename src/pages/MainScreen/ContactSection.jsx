import React from "react";
import styles from "./ContactSection.module.css";

function ContactSection() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.ctaBanner}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cdb42eedd857cbe2974110f8090392d4523f7b1a85f7060e1a80f75e646627a?placeholderIfAbsent=true&apiKey=beec0b141a294dfb988415912f64c249"
          className={styles.bannerBackground}
          alt="Background"
        />
        <div className={styles.bannerContent}>
          <h2 className={styles.bannerTitle}>Interested?</h2>
          <h3 className={styles.bannerSubtitle}>WORK WITH US!</h3>
          <p className={styles.bannerDescription}>
            Contact us to discuss and collaborate on your software <br />
            or app project!
          </p>
          <button className={styles.contactButton}>GET IN TOUCH</button>
        </div>
      </div>

      <div className={styles.contactForm}>
        <div className={styles.formContainer}>
          <div className={styles.formInfo}>
            <div className={styles.infoContent}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/31c0c99762b7c452bf796b3b3024adc869a5775eae3e718a85dab9f480384215?placeholderIfAbsent=true&apiKey=beec0b141a294dfb988415912f64c249"
                className={styles.infoBackground}
                alt="Background"
              />
              <div className={styles.infoText}>
                <h2 className={styles.infoTitle}>
                  Do You Have Some <br />
                  Questions?
                </h2>
                <p className={styles.infoDescription}>
                  Have questions? We've got answers! <br />
                  Reach out to us for expert guidance <br />
                  and support.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.formFields}>
            <div className={styles.formContent}>
              <label htmlFor="name" className={styles.fieldLabel}>
                Name*
              </label>
              <div className={styles.inputField} />

              <div className={styles.fieldRow}>
                <label htmlFor="email" className={styles.fieldLabel}>
                  Email*
                </label>
                <label htmlFor="phone" className={styles.fieldLabel}>
                  Phone No*
                </label>
              </div>

              <div className={styles.fieldRowInputs}>
                <div className={styles.inputFieldHalf} />
                <div className={styles.inputFieldHalf} />
              </div>

              <label htmlFor="message" className={styles.fieldLabel}>
                Message*
              </label>
              <div className={styles.inputField} />

              <button className={styles.submitButton}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
