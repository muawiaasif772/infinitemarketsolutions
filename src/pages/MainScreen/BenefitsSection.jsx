import React from "react";
import styles from "./BenefitsSection.module.css";

function BenefitsSection() {
  return (
    <section className={styles.benefitsSection}>
      <h2 className={styles.sectionTitle}>
        Benefits of Choosing <br />
        <span className={styles.highlight}>INFINITE </span>MARKET SOLUTIONS
      </h2>

      <div className={styles.benefitsContainer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bc6cad0c56ea692c24648a08b2c894f01b5d47f786d065e0c73324840071e93?placeholderIfAbsent=true&apiKey=beec0b141a294dfb988415912f64c249"
          className={styles.benefitsImage}
          alt="Benefits"
        />

        <div className={styles.benefitsNumbers}>
          <div className={styles.numberItem}>1</div>
          <div className={styles.divider} />
          <div className={styles.numberItem}>2</div>
          <div className={styles.divider} />
          <div className={styles.numberItem}>3</div>
          <div className={styles.divider} />
          <div className={styles.numberItem}>4</div>
          <div className={styles.divider} />
          <div className={styles.numberItem}>5</div>
        </div>

        <div className={styles.benefitsList}>
          <div className={styles.benefitItem}>
            <h3 className={styles.benefitTitle}>Innovative Solutions</h3>
            <p className={styles.benefitDescription}>
              Offering cutting-edge technology and creative strategies to help
              businesses <br />
              grow efficiently in a competitive market.
            </p>
          </div>

          <div className={styles.benefitItem}>
            <h3 className={styles.benefitTitle}>Customized Services</h3>
            <p className={styles.benefitDescription}>
              Tailoring solutions based on the unique needs of each client to
              ensure <br />
              maximum results.
            </p>
          </div>

          <div className={styles.benefitItem}>
            <h3 className={styles.benefitTitle}>Expert Team</h3>
            <p className={styles.benefitDescription}>
              A team of skilled professionals dedicated to delivering top-notch
              services <br />
              with attention to detail.
            </p>
          </div>

          <div className={styles.benefitItem}>
            <h3 className={styles.benefitTitle}>Reliable Support</h3>
            <p className={styles.benefitDescription}>
              Providing ongoing support and maintenance to ensure smooth and{" "}
              <br />
              uninterrupted operations.
            </p>
          </div>

          <div className={styles.benefitItem}>
            <h3 className={styles.benefitTitle}>Cost-Effective Solutions</h3>
            <p className={styles.benefitDescription}>
              Delivering high-quality services at competitive prices to maximize
              return <br />
              on investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
