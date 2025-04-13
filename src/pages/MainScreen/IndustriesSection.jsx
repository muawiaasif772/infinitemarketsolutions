"use client";

import React from "react";
import styles from "./IndustriesSection.module.css";


const IndustryCard = ({ iconUrl, title, description, altText, index }) => {
  // Determine the background color based on the index
  const backgroundColor = index % 2 === 1 ? '#E4F6FF' : '#F6F6F6';

  return (
    <article className={styles.card} style={{ backgroundColor }}>
      <img src={iconUrl} alt={altText || title} className={styles.icon} />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </article>
  );
};

  
const FontLoader = () => {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </>
    );
  };
  
const IndustriesSectionWithFonts = () => {
    return (
      <>
        <FontLoader />
        <IndustriesSection />
      </>
    );
  };
  

const IndustriesSection = () => {
  const industries = [
    {
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cb59697005f3a299b793747f52162e8bef6cbed9",
      title: "Real Estate",
      description:
        "Our real estate solutions streamline operations, simplifying property management and sales.",
      altText: "Real Estate",
    },
    {
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9685c0a58214f66fed46d21e429f361d1eec08ef",
      title: "Fintech & Finance",
      description:
        "End-to-end custom financial software development tailored to your business needs and budget, powered by cutting-edge technologies.",
      altText: "Fintech & Finance",
    },
    {
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/342d1eaa99184097f6da1fbe40a7a037c1000223",
      title: "E-commerce & Retail",
      description:
        "Enhance shopping and marketplace experiences with a powerful mobile and web app, optimizing business operations through an enterprise software suite",
      altText: "E-commerce & Retail",
    },
    {
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f30de813b9d423037803a8715f5845927a1a0a97",
      title: "Advertising & Marketing",
      description:
        "Marketing automation streamlines campaigns across multiple channels, enabling businesses to engage customers with automated messages via email, web, social, and text.",
      altText: "Advertising & Marketing",
    },
    {
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cfa551ef8f1bad4d4b0eda20d12be04f2e0dd35f",
      title: "Healthcare",
      description:
        "Develop custom e-healthcare and medtech software to streamline medical operations and adapt to technological advancements.",
      altText: "Healthcare",
    },
    {
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2c7d37f158987ce5b35c8aa6f2ada34c4affe740",
      title: "Entertainment",
      description:
        "A software application that offers users fun and engaging content, including online tools, games, videos, music, and other media",
      altText: "Entertainment",
    },
    {
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a154034113ea928028aac83dc0c7ee181763d075",
      title: "Wellness & Fitness",
      description:
        "Fitness and health software solutions help businesses streamline memberships, schedules, and facilities for a modern and efficient management experience.",
      altText: "Wellness & Fitness",
    },
    {
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/25fd8695b7948cc12ee60200e3b9b71ff31066d5",
      title: "Education & E-learning",
      description:
        "E-learning software enables businesses to digitally manage employee training, offering custom-built courses tailored to organizational needs.",
      altText: "Education & E-learning",
    },
    {
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2704de98b47ebd1590b410090b37b5904f7adff2",
      title: "Business Innovations",
      description:
        "Elevate your business or turn a unique idea into reality by integrating innovative solutions into your company or startup.",
      altText: "Business Innovations",
    },
  ];

  return (
    <section className={styles.industriesContainer}>
      <header className={styles.header}>
        <h2 className={styles.title}>Industries we serve</h2>
        <p className={styles.subtitle}>
          Leverage our expert domain knowledge to equip your business with the
          right software solution.
        </p>
      </header>

      <div className={styles.grid}>
        {industries.map((industry, index) => (
          <IndustryCard
            key={index}
            iconUrl={industry.iconUrl}
            title={industry.title}
            description={industry.description}
            altText={industry.altText}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default IndustriesSectionWithFonts;
