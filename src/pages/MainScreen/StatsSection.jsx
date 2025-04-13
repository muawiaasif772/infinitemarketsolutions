import React from "react";
import styles from "./StatsSection.module.css";

function StatsSection() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.statsContainer}>
        <div className={styles.statCard}>
          <div className={styles.statContent}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8aa841b9533ac5ba5cb1f6c9fcce95d91418d71a12988fb69276547c7e4c001f?placeholderIfAbsent=true&apiKey=beec0b141a294dfb988415912f64c249"
              className={styles.statIcon}
              alt="Happy Clients Icon"
            />
            <div className={styles.statInfo}>
              <h3 className={styles.statTitle}>Happy Clients</h3>
              <p className={styles.statNumber}>12345</p>
            </div>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statContent}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2964d33bcd3d630bf6bebdfea3a4de91309d55296465193eac44eadb744bc678?placeholderIfAbsent=true&apiKey=beec0b141a294dfb988415912f64c249"
              className={styles.statIcon}
              alt="Project Done Icon"
            />
            <div className={styles.statInfo}>
              <h3 className={styles.statTitle}>Project Done</h3>
              <p className={styles.statNumber}>12345</p>
            </div>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.awardContent}>
            <div className={styles.iconWrapper}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/07411515221b770c3532171b32a7ab178d2b40f83beadce2b5aa8374dbb8fba9?placeholderIfAbsent=true&apiKey=beec0b141a294dfb988415912f64c249"
                className={styles.awardIcon}
                alt="Award Win Icon"
              />
            </div>
            <div className={styles.statInfo}>
              <h3 className={styles.statTitle}>Award Win</h3>
              <p className={styles.statNumber}>12345</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
