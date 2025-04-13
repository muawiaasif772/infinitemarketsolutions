import React, { useState } from "react";

// Example image imports (replace with your actual image paths)
import MySqltech from "../../assets/MySql.png";
import NetTech from "../../assets/Nettech.png";
import PhpTech from "../../assets/Php.png";
import Golang from "../../assets/Golang.png";
import python from "../../assets/Python.png";
import MongDB from "../../assets/mongoDp.png";
import java from "../../assets/Java.png";
import NodeJs from "../../assets/NodeJs.png";
import flutter from "../../assets/Flutter.png";

const techItems = [
  {
    name: "",
    category: "Database",
    img: MySqltech,
    alt: "MySqltech",
  },
  {
    name: "",
    category: "Backend",
    img: NetTech,
    alt: "NetTech",
  },
  {
    name: "",
    category: "Backend",
    img: PhpTech,
    alt: "PHP",
  },
  {
    name: "",
    category: "Backend",
    img: Golang,
    alt: "Golang",
  },
  {
    name: "",
    category: "Backend",
    img: python,
    alt: "python",
  },
  {
    name: "",
    category: "Database",
    img: MongDB,
    alt: "MongDB",
  },
  {
    name: "",
    category: "Backend",
    img: java,
    alt: "java",
  },
  {
    name: "",
    category: "Backend",
    img: NodeJs,
    alt: "  NodeJs",
  },
  {
    name: "",
    category: "Frontend",
    img: flutter,
    alt: "flutter",
  },
];

const categories = [
  "All",
  "Frontend",
  "Database",
  "Backend",
  "CMS",
  "Cloud Testing",
  "DevOps",
];

const TechStackSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? techItems
      : techItems.filter((item) => item.category === activeCategory);

  return (
    <section className="w-full  !py-12  !px-21   max-sm:!px-10  bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start justify-center">
          {/* Filters Column */}
          <div className="flex flex-col justify-end">
            <h2 className="text-[25px] font-[Manrope] md:text-2xl !font-bold mb-2">
              Our Tech Stack
            </h2>

            <div className="">
              <p className="text-[18px] font-[Nunito] md:text-base mb-4">
                We leverage a modern and robust tech stack to build secure,
                scalable, and high-performing solutions. From reliable backend
                technologies to intuitive frontend frameworks and cloud-based
                infrastructure, we use the best tools to ensure your product is
                future-ready and always evolving.
              </p>

              <ul className="list-disc font-[Nunito]  list-inside m-0 p-0 text-sm md:text-base space-y-2">
                <li className="pb-3">
                  <b>Dynamic Frontend & Backend Frameworks:</b> For responsive
                  and efficient systems.
                </li>
                <li className="pb-3">
                  <b>Cloud-Based Infrastructure:</b> Ensuring scalability and real-time data management.
                </li>
                <li className="pb-3">
                  <b>Cross-Platform Development:</b> Delivering a consistent experience on all devices.
                </li>
              </ul>
            </div>
          </div>

          {/* Logos Grid Column */}
          <div className="w-full flex justify-center md:justify-end">
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 md:gap-3">
              {filteredItems.map((item, index) => (
                <div
                  key={item.name + index}
                  className={`w-full max-w-[120px] px-3 aspect-square flex flex-col items-center justify-center rounded-xl text-center ${
                    index % 2 === 1 ? "bg-[#FAFAFA]" : "bg-blue-500"
                  }`}
                >
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain mb-1"
                  />
                  <p
                    className={`text-xs font-medium ${
                      index % 2 === 0 ? "text-blue-800" : "text-white"
                    }`}
                  >
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
