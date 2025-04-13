"use client";
import React from "react";
import styles from "./ServiceSection.module.css";
import softWareDevelopment from "../../assets/sotwaredevelopment-icon.svg";
import mobileapp from "../../assets/mobileapp-icon.svg";
import coding from "../../assets/Coding-icon.svg";
import uxui from "../../assets/ui-ux-design-icon.svg";
import marketing from "../../assets/digital-marketing-icon.svg";
import al_icon from "../../assets/Ai-icon.svg";
import blockchanin from "../../assets/blockchain-technology-icon.svg";
import ecommerce from "../../assets/ecommerce-icon.svg";

function ServiceCard({ iconUrl, title, description }) {
  return (
    <article className={styles.serviceCard}>
      <img src={iconUrl} alt="" className={styles.serviceIcon} />
      <h3 className={styles.serviceTitle}>{title}</h3>
      <p className={styles.serviceDescription}>{description}</p>
    </article>
  );
}
function ServicesSection() {
  // Service data array to avoid repetition
  const services = [
    {
      iconUrl: softWareDevelopment,
      title: "Custom Software Development",
      description:
        "Bespoke software crafted to streamline workflows, enhance efficiency, and scale with your business needs",
    },
    {
      iconUrl: mobileapp,
      title: "Mobile App Development",
      description:
        "Cutting-edge mobile experiences designed for performance, user engagement, and seamless cross-platform functionality",
    },
    {
      iconUrl:coding,
      title: "Web Development",
      description:
        "High-performance, secure, and scalable web solutions that transform ideas into digital excellence.",
    },
    {
      iconUrl:
uxui,
      title: "UI/UX Design",
      description:
        "Human-centered designs that merge aesthetics with functionality to create intuitive and engaging user experiences",
    },
    {
      iconUrl:ecommerce,
      title: "E-Commerce Solutions",
      description:
        "Tailor-made e-commerce ecosystems that drive sales, optimize user journeys, and ensure seamless transactions",
    },
    {
      iconUrl:marketing,
      title: "Digital Marketing",
      description:
        "Strategic growth marketing powered by data, creativity, and innovation to maximize brand impact.",
    },
    {
      iconUrl:al_icon,
      title: "Artificial Intelligence & Machine Learning",
      description:
        "AI-driven solutions that unlock automation, predictive insights, and intelligent decision-making.",
    },
    {
      iconUrl:blockchanin,
      title: "Blockchain Development",
      description:
        "Future-proof blockchain applications ensuring transparency, security, and decentralized innovation",
    },
   
  ];

  return (
    <section className={styles.service_container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Our Services</h2>
        <p className={styles.subtitle}>
          Transforming Ideas into Reality, Powering Your Success!
        </p>
      </header>

      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            iconUrl={service.iconUrl}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

      {/* Font imports */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Ubuntu:wght@400;500&display=swap"
        rel="stylesheet"
      />
    </section>
  );
}

export default ServicesSection;
