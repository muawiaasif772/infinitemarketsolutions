"use client";
import React from "react";
import styles from "./PortfolioSection.module.css";
import { useNavigate } from 'react-router-dom';

function ProjectCard({ imageUrl, name, description }) {
  return (
    <article className={styles.projectCard}>
      <img src={imageUrl} alt="Project" className={styles.projectImage} />
      <div className={styles.projectOverlay}>
        <h3 className={styles.projectName}>{name}</h3>
        <p className={styles.projectDescription}>{description}</p>
      </div>
    </article>
  );
}

function Portfolio() {
  const navigate = useNavigate();
  const projects = [
    {
      id: 1,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b0e964893d8df7eacd9058b120d2de6841617cd7",
      name: "Project Name",
      description:
        "Your Ultimate Marketplace for Buying, Selling, and Renting Everything You Need!",
    },
    {
      id: 2,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/05d29790ecdcd6d5df6db928da2223c654daf4a2",
      name: "Project Name",
      description:
        "Your Ultimate Marketplace for Buying, Selling, and Renting Everything You Need!",
    },
  ];

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <section className={styles.portfolioContainer}>
        <div className={styles.portfolioWrapper}>
          {/* LEFT SIDE */}
          <div className={styles.leftColumn}>
            <h2 className={styles.title}>Our Portfolio</h2>
            <p className={styles.subtitle}>
              Reach your customers across the entire spectrum of digital devices
              Reach your customers across the
            </p>
            <button  onClick={() => navigate('/portfolio')} className={`no-underline hover:no-underline ${styles.viewAllButton}`}>
              View all
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className={styles.rightColumn}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                imageUrl={project.imageUrl}
                name={project.name}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;