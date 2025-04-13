"use client";
import React from "react";
// import styles from "./HeroBanner.module.css";
// import HeroContent from "./HeroContent";
// import styles from "../style/Service.css"
import "../style/Service.css";
import MobleAppService from '../assets/MobileService.svg'
import MobleAppServiceGif from '../assets/Mobileappdevelopment.gif'
import WebDevelopMentService from "../assets/WebDevelopmentService.svg"
import  WebDevelopMentServiceGif from '../assets/Web Development.gif'
import CustomSoftwareService from    "../assets/SoftwarDevelopMentService.svg"
import CustomSoftwareServicegif from '../assets/Custom Software development.gif'
import UXUIService from '../assets/UX-UIService.svg'
import UXUIServiceGif from '../assets/UI UX Design.gif'
import E_CommerceService from  '../assets/E-CommerceService.svg'
import E_CommerceServiceGif from '../assets/Ecommerce.gif'
import DigitalMarkitingService from '../assets/DigitalMarketingService.svg'
import DigitalMarkitingServiceGif from '../assets/Digital Marketing.gif'
import Artificial_Inteligance from '../assets/AiService.svg'
import Artificial_InteliganceGif from '../assets/Artificial Inteligance.gif'
import BlockChainSrvice from '../assets/BlockChainService.svg'
import BlockChainSrviceGif from '../assets/blockchain.gif'
const servicesData = [
  {
    title: "Mobile App Development",
    description:
      "We develop user-friendly mobile apps for Android, iOS, and cross-platform solutions. Our apps are designed for high performance and sleek user experience.",
    image: MobleAppService,
    gif:MobleAppServiceGif,
    isReversed: true, // Content left, Image right
  },
  {
    title: "Web Development",
    description:
      "We create high-quality websites and web applications tailored to your business needs. Our web development solutions are scalable and efficient.",
    image: WebDevelopMentService,
    gif: WebDevelopMentServiceGif,
    isReversed: false, // Content right, Image left
  },

  {
    title: " Custom Software Development",
    description:
      "We create high-quality websites and web applications tailored to your business needs. Our web development solutions are scalable and efficient.",
    image: CustomSoftwareService,
    gif: CustomSoftwareServicegif,
    isReversed: true, // Content right, Image left
  },
  {
    title: "UI/UX Design",
    description:
      "We create high-quality websites and web applications tailored to your business needs. Our web development solutions are scalable and efficient.",
    image: UXUIService,
    gif: UXUIServiceGif,
    // gif: CustomSoftwareServicegif,
    isReversed: false
  },
  {
    title: "E-commerce Solutions",
    description:
      "We create high-quality websites and web applications tailored to your business needs. Our web development solutions are scalable and efficient.",
    image: E_CommerceService,
    gif: E_CommerceServiceGif,
    // gif: CustomSoftwareServicegif,
    isReversed: true
  },
  {
    title: "Digital Marketing ",
    description:
      "We create high-quality websites and web applications tailored to your business needs. Our web development solutions are scalable and efficient.",
    image: DigitalMarkitingService,
    gif: DigitalMarkitingServiceGif,
   
    isReversed: false
  },
  {
    title: "Artificial Intelligence & Machine Learning ",
    description:
      "We create high-quality websites and web applications tailored to your business needs. Our web development solutions are scalable and efficient.",
    image: Artificial_Inteligance,
    gif: Artificial_InteliganceGif,
   
    isReversed: true
  },
  {
    title: "Block Chain Development ",
    description:
      "We create high-quality websites and web applications tailored to your business needs. Our web development solutions are scalable and efficient.",
    image: BlockChainSrvice,
    gif: BlockChainSrviceGif,
   
    isReversed: false
  },
];

const Services = () => {
  return (
    <div>
    <HeroBanner />
    {/* Pass dynamic data */}
    {servicesData.map((service, index) => (
        <ServiceSection key={index} {...service} />
      ))}
  </div>
  );
};
function HeroBanner() {
  return (
    <section className="heroSection">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cb2bd26778d7b23fc76f1800571cdf33afaf045?placeholderIfAbsent=true&apiKey=0cecb05fd9fe4a8eb878c24e2286b41a"
        alt="Hero background"
        className="heroBackground"
      />
      <HeroContent />
    </section>
  );
}

function HeroContent() {
  return (
    <div className="contentContainer">
      <h1 className="heading">
      OUR SERVICES<br/>
     <span >  Expert Services to Elevate and Empower Your Business.</span><br/>
       
      </h1>
      <p className="description">
        Transforming Visions into Reality with Tailored Solutions That Drive
        Innovation, Empower 
        Businesses, and Deliver Unparalleled Success Across Industries.
      </p>
    </div>
  );
}

const ServiceSection = ({ title, description, image, gif, isReversed }) => {
  return (
    <article className="mobileapp-container">
      <div className={`mobileapp-contentWrapper ${isReversed ? "reverse" : ""}`}>
        <ServiceContent title={title} description={description} />
        <ServiceImage image={image} gif={gif} />
      </div>
    </article>
  );
};




const ServiceImage = ({ image, gif }) => {
  return (
    <section className="imageColumn">
      <img src={image} alt="Service" className="serviceImage" />
      <img src={gif} alt="GIF Overlay" className="gifOverlay" />
    </section>
  );
};

const ServiceContent = ({ title, description }) => {
  return (
    <section className="contentColumn">
      <div className="service-contentWrapper">
        <h1 className="service-title">{title}</h1>
        <p className="service-description">{description}</p>
        <button className="ctaButton">Check It Out</button>
      </div>
    </section>
  );
};
export default Services;
