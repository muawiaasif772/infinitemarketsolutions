import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.companyName}>INFINITE MARKET FUSION</h2>

      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Services</h3>
          <nav className={styles.footerNav}>
            <a href="#" className={styles.footerLink}>
              Mobile App Development
            </a>
            <a href="#" className={styles.footerLink}>
              Digital Marketing
            </a>
            <a href="#" className={styles.footerLink}>
              Server Side Development
            </a>
            <a href="#" className={styles.footerLink}>
              Web Development
            </a>
          </nav>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Quick Links</h3>
          <nav className={styles.footerNav}>
            <a href="#" className={styles.footerLink}>
              Privacy Policy
            </a>
            <a href="#" className={styles.footerLink}>
              Terms and Conditions
            </a>
          </nav>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Contact Us</h3>
          <nav className={styles.footerNav}>
            <a href="tel:+1234567890" className={styles.footerLink}>
              +1234567890
            </a>
            <a href="mailto:youremail@gmail.com" className={styles.footerLink}>
              youremail@gmail.com
            </a>
            <a href="#" className={styles.footerLink}>
              address: anywere 123, any country
            </a>
          </nav>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.socialLinks}>
        <a href="#" className={styles.socialLink}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bc75f45bc84528dd41af3d96d655116c7bec6ae21394b1f33e92bab05604eec?placeholderIfAbsent=true&apiKey=beec0b141a294dfb988415912f64c249"
            className={styles.socialIcon}
            alt="Social Media"
          />
        </a>
        <a href="#" className={styles.socialLink}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/109d3775338bcb155aac7638df3ea132b16ab37126575561f1fab51ebbc9948d?placeholderIfAbsent=true&apiKey=beec0b141a294dfb988415912f64c249"
            className={styles.socialIcon}
            alt="Social Media"
          />
        </a>
        <a href="#" className={styles.socialLink}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d503e391e45a0e9601c86c7c95c9ba62ff2b8a259e6efda8a3950bf2095ff04?placeholderIfAbsent=true&apiKey=beec0b141a294dfb988415912f64c249"
            className={styles.socialIcon}
            alt="Social Media"
          />
        </a>
        <a href="#" className={styles.socialLink}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d5c607813cccb933cb5cd9f7d3aa5d1457a223472336ca542711078197131c0?placeholderIfAbsent=true&apiKey=beec0b141a294dfb988415912f64c249"
            className={styles.socialIcon}
            alt="Social Media"
          />
        </a>
        <a href="#" className={styles.socialLink}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/52a7189f612c3b49565bde55499529c674b71706c6be7af65c3face750c82675?placeholderIfAbsent=true&apiKey=beec0b141a294dfb988415912f64c249"
            className={styles.socialIcon}
            alt="Social Media"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
