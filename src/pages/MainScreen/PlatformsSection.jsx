import React from "react";
import styles from "./PlatformsSection.module.css";
import laptop from "../../assets/laptop.png";
import phone from "../../assets/phone.png";
import watch from "../../assets/watch.png";
import tablet from '../../assets/tablet.png'
import iot from '../../assets/iot.svg'
function PlatformsSection() {
  return (
    <section className={styles.platformsSection}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>Platforms</h2>
          <p className={styles.sectionDescription}>
            Reach your customers across the entire spectrum of digital devices
          </p>
        </div>
        <div className={styles.logosContainer}>
          <div className={styles.logoItem}>
            <img src={laptop} alt="Laptop" />
            <p>Laptop</p>
          </div>
          <div className={styles.logoItem}>
            <img src={phone} alt="Phone" />
            <p>Phone</p>
          </div>
          <div className={styles.logoItem}>
            <img src={watch} alt="Watch" />
            <p>Watch</p>
          </div>
          <div className={styles.logoItem}>
            <img src={tablet} alt="Watch" />
            <p>tablet</p>
          </div>
          <div className={styles.logoItem}>
            <img src={iot} alt="Watch" />
            <p>Iot</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default PlatformsSection;
