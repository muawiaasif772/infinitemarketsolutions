import React from "react";
import step1 from "../../assets/understanding.png";
import step2 from '../../assets/Patternmapping.png';
import step3 from '../../assets/Wireframe.png'; 
import step4 from '../../assets/Modeldevelopment.png';
import step5 from '../../assets/Developmentdeployment.png';
import "./DevelopmentApproach.css"
const steps = [
  {
    id: 1,
    title: "Understand pattern identification",
    description:
      "Infinite Market Solution methodology revolves around understanding pattern identification. I involves analyzing data to identify and extract significant patterns.",
    icon: step1,
  },
  {
    id: 2,
    title: "Pattern mapping user stories",
    description:
      "Pattern mapping user stories is the second step in Infinite Market Solution methodology. It involves categorizing user stories according to recognized patterns",

    icon: step2,
  },
  {
    id: 3,
    title: "Wireframe and front end",
    description:
      "After pattern mapping, our dedicated team creates wireframes and front-end designs. They align with the identified patterns and user stories.",
    icon: step3,
  },
  {
    id: 4,
    title: "Model development and training",
    description:
      "Model development and training at Infinite Market Solution involves building machine learning models and training them using the identified patterns and data.",
    icon: step4,
  },
  {
    id: 5,
    title: "Development and deployment",
    description:
      "Development and deployment is the final step in Infinite Market Solution are integrated into the software and deployed for use.",
    icon: step5,
  },
];

const DevelopmentApproach = () => {
  return (
    <div className="development-approach-container">
      <div className="development-approach-content">
        <h2 className=" development-approach-title">
          Our Proven Approach to Achieve Your Objectives
        </h2>
        <p className="development-approach-subtitle  ">
          Achieve your business goals with our successful
          <span className="development-approach-subtitle-bold"> infinite Market Solution</span>, renowned for its structured planning and consistent results.
        </p>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`step-card ${
                index % 2 === 0 ? "step-card-even" : "step-card-odd"
              }`}
            >
              <div className="step-badge">
                Step {step.id}
              </div>
              <div className="step-icon-container">
                <img src={step.icon} alt={`Step ${step.id}`} className="step-icon" />
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default DevelopmentApproach;
