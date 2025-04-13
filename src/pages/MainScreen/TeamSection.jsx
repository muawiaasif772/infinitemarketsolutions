"use client";
import React from "react";
import styles from "./TeamSection.module.css";

import TeamCardcopy from "./TeamCardcopy";
const TeamSection = () => {
  return (
    <section className={styles.container}>
      <TeamHeader />
      <TeamCardcopy />
    </section>
  );
};


const TeamHeader = () => {
  return (
    <div className={styles.team_head_description}>
      <h1 className={styles.heading}>Meet our team members</h1>
      <p className={styles.description}>
        Complete the form below to send us a message. Our support team will
        promptly respond to your request.
      </p>
      <ActionButtons />
    </div>
  );
};

const Button = ({ variant = "secondary", children, icon }) => {
  return (
    <button
      className={
        variant === "primary" ? styles.primaryButton : styles.secondaryButton
      }
    >
      <span className={styles.buttonText}>{children}</span>
      {icon && <img src={icon} className={styles.buttonIcon} alt="" />}
    </button>
  );
};

const ActionButtons = () => {
  return (
    <div className={styles.buttonContainer}>
      <Button
        variant="primary"
        icon="  https://cdn.builder.io/api/v1/image/assets/TEMP/8bf0fc5649954d6570d4b26e25e5aabce9692f1c?placeholderIfAbsent=true&apiKey=..."
      >
    
        Apply Now
      </Button>
      <Button
        variant="secondary"
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/2c0d3a31885d9832b9c2953039c8371e8ea14802?placeholderIfAbsent=true&apiKey=..."
      >
        Contact Us
      </Button>
    </div>
  );
};

export default TeamSection;
