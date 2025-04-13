"use client";
import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonialsContainer}>
        <div className={styles.headingContainer}>
          <div className={styles.decorativeLine} />
          <h2 className={styles.sectionTitle}>working with us</h2>
          <h1 className={styles.lightText}>Why cutomers love</h1>
        </div>

        <div className={styles.testimonialContent}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c3e879a95803b57fbe0f04078f144c7234b74eb480764b7a63fdcadf375593e?placeholderIfAbsent=true&apiKey=beec0b141a294dfb988415912f64c249"
            className={styles.quoteOpen}
            alt="Quote open"
          />
          <p className={styles.testimonialText}>
            Without any doubt I recommend Alcaline Solutions as one of the best
            web design and digital marketing agencies. One of the best agencies
            I've came across so far. Wouldn't be hesitated to introduce their
            work to someone else.
          </p>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/96dbe6364ac2092e446b8c4a5cab50c452e8fcf8c7d83f8f7c58ff54b78e7183?placeholderIfAbsent=true&apiKey=beec0b141a294dfb988415912f64c249"
            className={styles.quoteClose}
            alt="Quote close"
          />
        </div>
      </div>

      <div className={styles.clientsContainer}>
        <div className={styles.clientCard}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b560c573c3c1a15b1fe87813c60907907a4240b0ad1987cfcb2b92d9254166b3?placeholderIfAbsent=true&apiKey=beec0b141a294dfb988415912f64c249"
            className={styles.clientImage}
            alt="Client"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbf288497dcdd6a2ff8a36e2b2600ad4a34618691a919634ef3e4263f9e0e6b5?placeholderIfAbsent=true&apiKey=beec0b141a294dfb988415912f64c249"
            className={styles.ratingStars}
            alt="Rating"
          />
          <div className={styles.clientInfo}>
            <h3 className={styles.clientName}>Romeena De Silva</h3>
            <p className={styles.clientCompany}>Janet Cosmetics</p>
          </div>
        </div>

        <div className={styles.clientCard}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/46b5bb1efe4cea052a4c14cdac2ee55d93ae968d20e680cbb6c9fa8054aca8e8?placeholderIfAbsent=true&apiKey=beec0b141a294dfb988415912f64c249"
            className={styles.clientImage}
            alt="Client"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b2b2e490494d6721b4c2b3e19a23ee278154238c3b87e9e81a0617c44c450ac?placeholderIfAbsent=true&apiKey=beec0b141a294dfb988415912f64c249"
            className={styles.ratingStars}
            alt="Rating"
          />
          <div className={styles.clientInfo}>
            <h3 className={styles.clientName}>Romeena De Silva</h3>
            <p className="{styles.clientCompany}">Janet Cosmetics</p>
          </div>
        </div>

        <div className={styles.clientCard}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e96535400d675121710ffea97b7a724313456c699e6c8c00bb96b8ef151a8fba?placeholderIfAbsent=true&apiKey=beec0b141a294dfb988415912f64c249"
            className={styles.clientImage}
            alt="Client"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/79f8567d2cb7d9d8814df2d7630196075f27733585c3af1541ad53f270149b72?placeholderIfAbsent=true&apiKey=beec0b141a294dfb988415912f64c249"
            className={styles.ratingStars}
            alt="Rating"
          />
          <div className={styles.clientInfo}>
            <h3 className={styles.activeClientName}>Imran Khan</h3>
            <p className={styles.activeClientCompany}>Software Engineer</p>
          </div>
        </div>

        <div className={styles.clientCard}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8ef5ba6ff86dae9693c76652c94b607cc859081ae33ec8850def2caf5088899?placeholderIfAbsent=true&apiKey=beec0b141a294dfb988415912f64c249"
            className={styles.clientImage}
            alt="Client"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b2b2e490494d6721b4c2b3e19a23ee278154238c3b87e9e81a0617c44c450ac?placeholderIfAbsent=true&apiKey=beec0b141a294dfb988415912f64c249"
            className={styles.ratingStars}
            alt="Rating"
          />
          <div className={styles.clientInfo}>
            <h3 className={styles.clientName}>Romeena De Silva</h3>
            <p className={styles.clientCompany}>Janet Cosmetics</p>
          </div>
        </div>

        <div className={styles.clientCard}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/68f8314b1123c966b62f0f745ddea2137578cba994fac41f63e59c49db32c431?placeholderIfAbsent=true&apiKey=beec0b141a294dfb988415912f64c249"
            className={styles.clientImage}
            alt="Client"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbf288497dcdd6a2ff8a36e2b2600ad4a34618691a919634ef3e4263f9e0e6b5?placeholderIfAbsent=true&apiKey=beec0b141a294dfb988415912f64c249"
            className={styles.ratingStars}
            alt="Rating"
          />
          <div className={styles.clientInfo}>
            <h3 className={styles.clientName}>Romeena De Silva</h3>
            <p className={styles.clientCompany}>Janet Cosmetics</p>
          </div>
        </div>
      </div>

      <div className={styles.divider} />
    </section>
  );
}

export default Testimonials;
