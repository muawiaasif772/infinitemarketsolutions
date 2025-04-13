import React from "react";
import styles from "./PurposeSection.module.css";

function PurposeSection() {
  return (
    <section className={styles.purposeSection}>
      <div className={styles.purposeContainer}>
        <div className={styles.purposeContent}>
          <h2 className={styles.sectionTitle}>Our Purpose</h2>
          <p className={styles.sectionDescription}>
            To amplify human potential and create the next <br />
            opportunity for people, businesses and communities
          </p>
        </div>

        <div className={styles.ctaContainer}>
          <p className={styles.ctaText}>
            Build Your Expert Software Team with Us
          </p>
          <button className={styles.quoteButton}>Get a Quote</button>
        </div>
      </div>
    </section>
  );
}

export default PurposeSection;
