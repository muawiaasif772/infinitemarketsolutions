import React from "react";
import styles from "./GlobalPresence.module.css";
import preSenceCountry from '../../assets/presencCOUNTRY.svg'
function GlobalPresence() {
  return (
    <section className={styles.globalPresence}>
      <div className={styles.contentContainer}>
     
      
        <img
          src={preSenceCountry}
          className={styles.worldMap}
          alt="World Map showing global presence"
        />
        
  <div>
  <h2 className={styles.sectionTitle}>Our Presence Across the Globe</h2>

        <p className={styles.description}>
        Delivering exceptional services to happy clients across the USA, Europe, the United Kingdom, Australia, New Zealand, Singapore, and Pakistan
        </p>
        </div>
      </div>
    </section>
  );
}

export default GlobalPresence;
