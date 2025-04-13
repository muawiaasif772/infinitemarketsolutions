import React from "react";
import styles from "./AboutSection.module.css";
import aboutUsRightcolumn from "../../assets/aboutusRightColumn.svg";

function AboutSection() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <h2 className={styles.sectionTitle}>About Us</h2>
        <h3 className={styles.mainHeading}>
          The Best IT Solution With 10 Years of 
          <div>
            <span className="experience_hr">Experience</span>
          </div>
        </h3>
        <p className={styles.description}>
          Selecting the best IT solution with 10 years of experience
          involves various factors, such as the specific needs of your organization, budget
          constraints, and the nature of the IT challenges you want to address.
        </p>

        <div className={styles.featuresContainer}>
          <div className={styles.featuresColumn}>
            <div className={styles.featureItem}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/76d3f254c5962822231d2c4bafd4bc518c1e988d9bd1e5562b8f9af897824f93?placeholderIfAbsent=true&apiKey=beec0b141a294dfb988415912f64c249"
                className={styles.featureIcon}
                alt="Award Winning"
              />
              <span>Award Winning</span>
            </div>

            <div className={styles.featureItem}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7047e6bc9bba81e287ee3d01f47f7267215e6556dd7711f5c18c31708bba615f?placeholderIfAbsent=true&apiKey=beec0b141a294dfb988415912f64c249"
                className={styles.featureIcon}
                alt="Professional Staff"
              />
              <span>Professional Staff</span>
            </div>
            <div className={styles.featureItem}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/42c4f73e5096b314818c4ad3cd592bdb27c57f035a36902b7c11192c506147aa?placeholderIfAbsent=true&apiKey=beec0b141a294dfb988415912f64c249"
                className={styles.featureIcon}
                alt="24/7 Support"
              />
              <span>24/7 Support</span>
            </div>

            <div className={styles.featureItem}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/086043b84c961644034e09dae273c0882b8f92666e24e710dded85c86574f863?placeholderIfAbsent=true&apiKey=beec0b141a294dfb988415912f64c249"
                className={styles.featureIcon}
                alt="Fair Prices"
              />
              <span>Fair Prices</span>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.contactRow}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/37e8037ff15c299f0a493b510188b80e59c627b2a249ebad6e994558abe6674f?placeholderIfAbsent=true&apiKey=beec0b141a294dfb988415912f64c249"
                className={styles.contactIcon}
                alt="Phone"
              />
              <div className={styles.contactDetails}>
                <p className={styles.contactLabel}>
                  Call to ask any question
                </p>
                <p className={styles.phoneNumber}>+91 1234567890</p>
              </div>
            </div>
          </div>
          <button className={styles.quoteButton}>Request A Quote</button>
        </div>
      </div>

      <div className={styles.imageColumn}>
        <img
          src={aboutUsRightcolumn}
          className={styles.aboutImage}
          alt="About Us"
        />
      </div>
    </div>
  );
}

export default AboutSection;