import { useParams, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import frontendimg from "../../src/assets/frontendProject.jpeg";
import projectImg from '../assets/projectImg.svg';
import backendimg from "../assets/backendprojectimg.jpeg";
import mobileimg from "../assets/mobile-apps-in-business-copy-5.jpg";
import webapps from "../assets/web.png";
import caseStudyBG from "../assets/caseStudyBg.svg";
import uxui from "../assets/101_UX_vs_UI_illustration_blog-1.png";

const projects = [
  {
    id: 1,
    title: "ShopEase – AI-Powered E-commerce SaaS",
    description: "Your Ultimate Marketplace for Buying, Selling, and Renting Everything You Need!",
    image: frontendimg,
    keyFeatures: [
      "No-Code Store Builder – Businesses can create an online store in minutes with a drag-and-drop builder.",
      "AI-Powered Product Descriptions. No-Code Store Builder – Businesses can create an online store in minutes with a drag-and-drop builder.",
      "Automated Order & Inventory Management. ",
    ],
    caseStudyDescription:
      "We developed ShopEase, an AI-driven e-commerce SaaS platform that allows businesses to createmanage, and scale their online stores effortlessly. The platform automates inventory management, customer engagement, and order processing using AI-powered tools.The owner of BUCH Hospital needed a solution to manage administrative and patient details efficiently. That's why we introduced BUCH, an advanced Hospital Management System (HIMS).  ",
  },
  {
    id: 2,
    title: "ShopEase – AI-Powered E-commerce SaaS Platform",
    description: "AI-driven health monitoring system.",
    image: backendimg,
    keyFeatures: [
      "Real-time health tracking",
      "AI-driven personalized insights",
      "Remote doctor consultations",
    ],
    caseStudyDescription:
      "HealthSync revolutionizes health tracking with AI-powered analytics.The owner of BUCH Hospital needed a solution to manage administrative and patient details efficiently. That's why we introduced BUCH, an advanced Hospital Management System (HIMS).",
  },
];

const PortFolioCaseStudy = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <p className="text-center text-red-500">Project not found</p>;
  }

  return (
    <div className="container mx-auto">
      {/* Background Image */}
      <div
        className="relative h-auto min-h-[30vh] md:min-h-[40vh] lg:min-h-[50vh] bg-cover bg-center flex items-center justify-start text-start text-white rounded-xl my-4"
        style={{ backgroundImage: `url(${caseStudyBG})` }}
      >
        {/* Text Content */}
        <div className="relative z-10 p-4 md:p-8 lg:pl-16">
          <p className="text-xl md:text-2xl lg:text-3xl font-light">Case Study</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl max-w-md font-bold">
            {project.title}
          </h1>
          <p className="text-base md:text-lg lg:text-xl mt-3">{project.description}</p>
        </div>
      </div>

      {/* Content and Form Section - Fixed equal spacing */}
      <div style={{ padding: "0 " }}>
        <div className="grid md:grid-cols-2 gap-2 md:gap-4">
          {/* Left Side - Key Features and Case Study */}
          <div className="!px-24 max-md:!px-12 max-sm:!px-4 max-sm:!py-2" style={{ maxWidth: "100%" }}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight">{project.title}</h2>
            <h3 className="pt-4 text-lg md:text-xl font-medium">Project Overview</h3>
            <p className="mt-4 text-[18px] font-[Nunito] md:text-lg lg:text-xl text-[#72749f]">
              {project.caseStudyDescription}
            </p>
          </div>

          {/* Right Side - Contact Form - Fixed height */}
          <div className="flex justify-center  ">
            <div
              className="w-full md:w-96 lg:w-96   rounded-lg shadow-md"
              style={{
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                height: "fit-content"
              }}
            >
              <Form className="p-4 md:p-5">
                <Row className="mb-3">
                  <Form.Group controlId="formGridText" className="mb-3">
                    <Form.Control type="text" placeholder="Name" className="p-2 md:p-3" />
                  </Form.Group>

                  <Form.Group controlId="formGridPassword" className="mb-3">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      className="p-2 md:p-3"
                    />
                  </Form.Group>
                  
                  <Form.Group controlId="formGridPhone" className="mb-3">
                    <Form.Control type="tel" placeholder="Phone" className="p-2 md:p-3" />
                  </Form.Group>
                  
                  <Form.Group controlId="formGridMessage" className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter your message"
                    />
                  </Form.Group>
                </Row>

                <Form.Group
                  className="mb-3 d-flex align-items-center"
                  id="formGridRadio"
                >
                  <Form.Check
                    type="radio"
                    name="terms"
                    label="I agree to the Privacy and Terms and Conditions."
                    className="gap-2 d-flex align-items-start text-sm"
                  />
                </Form.Group>

                <Button className="mx-auto !px-12 d-block mb-1" variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="!p-16 max-sm:!p-1">
        <h2 className="text-xl md:text-2xl font-bold mb-4 max-sm:!py-3 !font-bold !pl-10 ">Key Features</h2>
        <ul className="space-y-3">
          {project.keyFeatures.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 text-lg leading-5 pl-2   mt-1">✅</span>
              <span className="!ml-4 text-base md:text-lg lg:text-xl text-[#72749f]">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex justify-center pb-4">
        <img src={projectImg} className="max-w-full h-auto" alt="Project visualization" />
      </div>
    </div>
  );
};

export default PortFolioCaseStudy;