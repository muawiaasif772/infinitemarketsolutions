import React, { useState } from "react";
import frontendimg from "../../src/assets/frontendProject.jpeg";
import backendimg from "../assets/backendprojectimg.jpeg";
import mobileimg from "../assets/mobile-apps-in-business-copy-5.jpg";
import webapps from "../assets/web.png";
import uxui from '../assets/101_UX_vs_UI_illustration_blog-1.png';
import styles from "../pages/MainScreen/TechStack.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    category: "Web Apps",
    image: frontendimg,
    type: "Web App",
    languages: ["React.js", "Tailwind CSS", "Firebase"],
    description:
      "A comprehensive health monitoring application with real-time tracking and analytics..A dynamic e-commerce platform with a real-time database.",
  },
  {
    id: 2,
    category: "Mobile Apps",
    image: mobileimg,
    type: "Mobile App",
    languages: ["React Native", "Expo", "Redux"],
    description:
      "A cross-platform mobile application for food delivery.A comprehensive health monitoring application with real-time tracking and analytics.",
  },
  {
    id: 3,
    category: "Backend",
    image: backendimg,
    type: "Backend",
    languages: ["Node.js", "Express", "MongoDB"],
    description:
      "A REST API for a booking system. A comprehensive health monitoring application with real-time tracking and analytics.",
  },
  {
    id: 4,
    category: "Frontend",
    image: webapps,
    type: "Frontend",
    languages: ["React.js", "CSS", "JavaScript"],
    description:
      "A comprehensive health monitoring application with real-time tracking and analytics..",
  },
  {
    id: 5,
    category: "UX/UI",
    image: uxui,
    type: "UX/UI",
    languages: ["React.js", "CSS", "JavaScript"],
    description:
      "A comprehensive health monitoring application with real-time tracking and analytics..",
  },
];

const categories = [
  "All",
  "Mobile Apps",
  "Web Apps",
  "UX/UI",
  "Frontend",
  "Backend",
];

const PortFolioGrid = () => {
  const [activeCateg, setActiveCategory] = useState("All");
  const filteredProjects =
    activeCateg === "All"
      ? projects
      : projects.filter((p) => p.category === activeCateg);

  return (
    <>
      <PortfolioSection />
      <div className="w-full max-2xl:!px-24  !py-12 max-xl:!px-12 max-md:!py-6 max-sm:!px-6   ">
        {/* Tabs */}
        <div className={styles.categories}>
          {categories.map((category) => (
            <span
              key={category}
              className={`${styles.category} ${
                activeCateg === category ? styles.activeCate : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </span>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="border rounded-t-[22px] rounded-b-[12px] shadow-lg bg-white overflow-hidden"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.category}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-white" // Smaller icon
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 2.5-3.5 7-9 7s-9-4.5-9-7 3.5-7 9-7 9 4.5 9 7z"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-4 font-[Nunito]">
                <div className="text-sm font-semibold text-gray-500">
                  {project.type}
                </div>
                <div className="mt-2 flex gap-1 flex-wrap">
                  {project.languages.map((lang, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-gray-100 text-balck rounded-[22px] text-[16px]" // Smaller text
                    >
                      {lang}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-[16px] text-gray-600">
                  {project.description}
                </p>
                <ViewProjectButton project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const ViewProjectButton = ({ project }) => {
  return (
    <Link
      to={`/case-study/${project.id}`}
      className="text-teal-600 text-[18px] pt-[33px] no-underline flex items-center gap-1" // Smaller text and spacing
    >
      View Project <FaExternalLinkAlt className="text-sm" /> {/* Smaller icon */}
    </Link>
  );
};

const PortfolioSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white  py-16 text-center pt-lg-5">
      <h2 className="text-[25px] !pt-[20px] !font-[900] text-gray-900">Our Portfolio</h2>
      <p className="mt-4 text-gray-600 text-[18px]">
        Explore our latest projects and see how we've helped businesses
        transform their digital presence.
      </p>
    </section>
  );
};

export default PortFolioGrid;
