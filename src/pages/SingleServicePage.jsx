"use client";
import React, { useRef } from "react";
import { useState ,useEffect} from 'react';

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import itWorksBg from "../assets/itWorksBg.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SingleServicePage = () => {
  return (
    <div>
      <BackgroundSection>
        <ContentColumns>
          <HeadingSection />
          <ImageSection />
        </ContentColumns>
      </BackgroundSection>
      <NativeAppsSection />
      <MobileAppFeatures />
      <FrameworksSection />
      <HowItWorks />
      <ImageCarousel />
    </div>
  );
};

const BackgroundSection = ({ children }) => {
  return (
    <div className=" !pr-[7px] !pl-[7px]">
      <section 
        className="flex relative flex-col justify-center items-center !px-36 max-lg:!px-12 max-sm:!px-6 max-sm:!py-12 w-full mx-auto rounded-3xl min-h-[300px] md:min-h-[450px]"
        style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b8b939bc08adf434abbb4e7d3db1772e917795e?placeholderIfAbsent=true&apiKey=0cecb05fd9fe4a8eb878c24e2286b41a"
          alt="Mobile App Development Background"
          className="object-cover absolute inset-0 w-full h-full rounded-3xl"
        />
        <div className="relative w-full max-w-[1200px] px-4 sm:pl-8 md:pl-12 lg:pl-16 mx-auto">
          {children}
        </div>
      </section>
    </div>
  );
};

const ContentColumns = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-10 w-full">
      {children}
    </div>
  );
};

const HeadingSection = () => {
  return (
    <article className="w-full md:w-6/12">
      <div className="flex flex-col text-black">
        <h1 className="text-3xl sm:text-4xl md:text-5xl !font-bold leading-tight">
          MOBILE APP <br className="hidden md:block" /> DEVELOPMENT{" "}
          <br className="hidden md:block" /> SERVICE
        </h1>
        <p className="mt-3 text-base sm:text-lg md:text-xl font-light">
          We build custom mobile apps that solve real problems, generate
          revenue, and captivate millions of users worldwide.
        </p>
      </div>
    </article>
  );
};

const ImageSection = () => {
  return (
    <div className="w-full md:w-6/12 flex justify-center items-center">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/43bba9bfd9f9eab21d4948121e483359e8885c1d?placeholderIfAbsent=true&apiKey=0cecb05fd9fe4a8eb878c24e2286b41a"
        alt="Mobile App Development Illustration"
        className="object-contain w-full max-w-[80%] max-sm:max-w-full md:max-w-full"
      />
    </div>
  );
};




const ImageColumn = () => {
  return (
    <div className="w-full md:w-6/12">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6694739d9ed91ee067a8c8f1a19a1a126bdc34ab?placeholderIfAbsent=true&apiKey=0cecb05fd9fe4a8eb878c24e2286b41a"
        alt="Native Apps Development"
        className="object-contain w-full max-w-[500px] mx-auto md:mx-0 aspect-[1.01]"
      />
    </div>
  );
};


const ContentColumn = () => {
  const [activeService, setActiveService] = useState("Cross Platform Apps"); // Default open

  const toggleService = (serviceName) => {
    setActiveService(serviceName); // Always switch, never close
  };

  const serviceData = {
    "Cross Platform Apps": [
      "Complex mobile applications",
      "High performance & smooth UI",
      "Apps with heavy data processing",
      "Security-sensitive applications",
      "Apps requiring device features",
    ],
    "Hybrid Apps": [
      "Cost-effective solutions",
      "Faster development cycle",
      "Single codebase for multiple platforms",
      "Web and mobile integration",
      "Offline functionality"
    ],
    "Wearables Apps": [
      "Fitness and health tracking",
      "IoT connected solutions",
      "Simplified user experience",
      "Battery efficient functionality",
      "Real-time data synchronization"
    ]
  };

  return (
    <div className="w-full md:w-6/12 mt-6 md:mt-0 md:ml-4">
      <div className="flex flex-col items-start w-full">
        <header className="flex gap-3 text-sky-400">
          <h1 className="text-2xl sm:text-3xl !font-[900]">- {activeService}</h1>
        </header>

        <p className="mt-2 text-base sm:text-lg md:text-xl font-light text-black">
          We build custom mobile apps that solve real <br className="hidden md:block" />
          problems, generate revenue, and activate millions
          <br className="hidden md:block" />
          of users worldwide.
        </p>

        <FeatureList features={serviceData[activeService]} />

        <ServiceTypes 
          activeService={activeService}
          toggleService={toggleService}
        />
      </div>
    </div>
  );
};



const FeatureList = ({ features }) => {
  return (
    <div className="flex flex-col mt-4 space-y-2">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/50c917de01abc6e4d1bb92b28f633fb2b78d1868?placeholderIfAbsent=true&apiKey=0cecb05fd9fe4a8eb878c24e2286b41a"
            alt="Feature icon"
            className="object-contain w-5 h-5"
          />
          <span className="text-base sm:text-lg font-light text-black">
            {feature}
          </span>
        </div>
      ))}
    </div>
  );
};


const ServiceTypes = ({ activeService, toggleService }) => {
  const services = ["Cross Platform Apps", "Hybrid Apps", "Wearables Apps"];
  
  return (
    <div className="mt-2 text-center md:text-left">
      {services.map(service => (
        <h2 
          key={service}
          onClick={() => toggleService(service)}
          className="!text-[18px] sm:text-2xl !leading-8 !font-[900] text-start text-black cursor-pointer mb-2"
        >
          {activeService === service ? "- " : "+ "}
          {service}
        </h2>
      ))}
    </div>
  );
};


const NativeAppsSection = () => {
  return (
    <section className="w-full max-lg:!py-8 max-lg:!px-12 max-sm:!px-8  !px-36 !py-12   sm:px-6 md:px-8 lg:px-12 py-10 mt-8">
      <h1 className="!text-[25px] font-[Manrope] sm:text-3xl !font-bold  pb-5">Types of Mobile Apps We Build</h1>
      <div className="flex flex-col md:flex-row !gap-[80px] max-lg:!gap-[50px] md:gap-10 items-center">
        <ImageColumn />
        <ContentColumn />
      </div>
    </section>
  );
};

const FeatureCard = ({ imageSrc, title, description }) => {
  return (
    <article className="w-full">
      <div className="flex flex-col text-start text-black h-full">
        <img
          src={imageSrc}
          alt={title}
          className="object-contain aspect-square w-[50px]"
        />
        <h2 className="mt-3 !text-[22px] font-[Manrope] sm:text-xl font-semibold">{title}</h2>
        <p className="mt-2 !text-[14px]  font-[Nunito] sm:text-base font-medium leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
};

const featureData = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3442cffe86a4df763af8bd6120ff2e6e3122cf54?placeholderIfAbsent=true&apiKey=0cecb05fd9fe4a8eb878c24e2286b41a",
    title: "User-friendly Interface",
    description: "Our apps are crafted for a seamless user experience. With an intuitive interface, users can easily find what they need, ensuring smooth navigation, efficiency, and overall satisfaction.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1e928f2c9560b7564bf509d70160d0a2d6fe34c2?placeholderIfAbsent=true&apiKey=0cecb05fd9fe4a8eb878c24e2286b41a",
    title: "User-friendly Interface",
    description: "Our apps are crafted for a seamless user experience. With an intuitive interface, users can easily find what they need, ensuring smooth navigation, efficiency, and overall satisfaction.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f374e59c59d7e086f129c39aa49b6b5e1fccb54e?placeholderIfAbsent=true&apiKey=0cecb05fd9fe4a8eb878c24e2286b41a",
    title: "User-friendly Interface",
    description: "Our apps are crafted for a seamless user experience. With an intuitive interface, users can easily find what they need, ensuring smooth navigation, efficiency, and overall satisfaction.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/27c0c9673d9c7fc8c75a1d4008f8dcd508e5d755?placeholderIfAbsent=true&apiKey=0cecb05fd9fe4a8eb878c24e2286b41a",
    title: "User-friendly Interface",
    description: "Our apps are crafted for a seamless user experience. With an intuitive interface, users can easily find what they need, ensuring smooth navigation, efficiency, and overall satisfaction.",
  },
];

const MobileAppFeatures = () => {
  return (
    <section className="flex max-lg:!py-8 max-lg:!px-12  max-sm:!px-8 !px-36 !py-12  flex-col px-4 sm:px-6 md:px-8 py-10 w-full bg-neutral-100">
      <div className="self-center w-full max-w-[1200px] mx-auto">
        <h1 className=" !text-[25px] pb-5 !font-[Manrope] !font-bold sm:text-3xl  text-black pb-2">
          Mobile App Development Features
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-8">
          {featureData.map((feature, index) => (
            <FeatureCard
              key={index}
              imageSrc={feature.imageSrc}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SectionHeading = ({ children }) => {
  return (
    <h2 className="!text-[25px] !font-[Manrope] pb-5 sm:text-3xl !font-bold text-black  md:text-left w-full max-w-[1200px] mx-auto px-4">
      {children}
    </h2>
  );
};

const FrameworkCard = ({ imageSrc, name }) => {
  return (
    <figure className="flex flex-col items-center text-center">
      <img
        src={imageSrc}
        alt={`${name} logo`}
        className={`object-contain ${
          name === "Flutter"
            ? "aspect-[1.34] w-[70px]"
            : name === "Dart"
            ? "aspect-square w-[55px]"
            : name === "Swift"
            ? "aspect-[1.11] w-[60px]"
            : name === "Kotlin"
            ? "aspect-square w-[45px]"
            : name === "Java"
            ? "aspect-[1.33] w-[85px]"
            : "aspect-square w-14"
        }`}
      />
      <figcaption className="mt-2 text-lg sm:text-xl font-light tracking-wider leading-none">
        {name}
      </figcaption>
    </figure>
  );
};

const frameworks = [
  {
    name: "Flutter",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a906e960de05962d776fabc85058a53f46bc4bda",
  },
  {
    name: "Dart",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/80452e645faf403cae3188e9745175dbe26f2ca3",
  },
  {
    name: "Swift",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd105e191f3a7f88cdda953ca7367415c18203ac",
  },
  {
    name: "Kotlin",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c87793e7eceb3b76a9759b7c176897ded17316e",
  },
  {
    name: "Java",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3a174d19e835aaba13110ef50e8dd4f718c53493",
  },
  {
    name: "Javascript",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7bf7006fd76652a87bc03878a09063d2a1d39abf",
  },
];

const FrameworksSection = () => {
  return (
    <section className="flex  flex-col items-center  max-lg:!py-8 max-lg:!px-12   max-sm:!px-8  max-sm:!py-12  !px-36 !py-12   w-full bg-white">
      {/* Section Heading */}
      <SectionHeading>
        Works with frameworks and languages you love
      </SectionHeading>

      {/* Framework Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center items-center mt-8 max-w-[1200px] w-full">
        {frameworks.map((framework) => (
          <FrameworkCard
            key={framework.name}
            imageSrc={framework.src}
            name={framework.name}
          />
        ))}
      </div>
    </section>
  );
};

// TimelineStep Component
const TimelineStep = ({ number, title, isActive = false, onClick }) => {
  return (
    <article
      onClick={onClick}
      className={`cursor-pointer !mb-8 max-sm:!mb-4 max-md:flex gap-8 max-sm:gap-6  max-md:items-center`}
    >
      <div className="flex items-center flex-wrap gap-6">
        <h1
          className={`text-2xl sm:text-4xl font-bold`}
          style={{
            WebkitTextStroke: `1px ${isActive ? '#38bdf8' : 'white'}`,
            color: 'transparent',
          }}
        >
          {number}
        </h1>

        {isActive && (
          <div className="flex items-center  max-sm:!mx-6 max-sm:hidden text-sky-400 text-base font-light ">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <FaAngleRight key={i} size={18} style={{ marginLeft: "-12px" }} />
              ))}
          </div>
        )}
      </div>

      <p
       
        className={`!text-[14px] sm:text-lg max-sm:!px-4 leading-tight ${isActive ? "text-sky-400" : "text-white"}`}
      >
        {title}
      </p>
    </article>
  );
};
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [query]);

  return matches;
};



// TimelineDivider Component
const TimelineDivider = ({ activeIndex }) => {
  const isSmallOrMedium = useMediaQuery("(max-width: 768px)");
  const stepHeight = isSmallOrMedium ? 45 : 85;
  const topOffset = stepHeight * (activeIndex - 1);
  return (
    <div className="absolute top-0 right-0 w-0.5 h-full bg-sky-400 max-md:left-[28px]">
      <div
        className="absolute left-2/4 w-5 h-5 rounded-full border-2 border-sky-400 flex items-center justify-center -translate-x-2/4 transition-all duration-500"
        style={{ top: `${topOffset + 8}px` }} // adjust +8 if needed for perfect center
      >
        <div className="w-2.5 h-2.5 rounded-full bg-sky-400" />
      </div>
    </div>
  );
};



// TimelineContent Component
const TimelineContent = ({ activeIndex }) => {
  const contentMap = {
    1: [
      "We gather in-depth insights about your project through IT consultation.",
      "Understanding the client’s vision and challenges.",
      "Establishing goals for the discovery phase.",
      "Conducting initial technical feasibility studies.",
      "Outlining the project scope briefly.",
    ],
    2: [
      "We create wireframes and design mockups.",
      "Build interactive UI/UX prototypes.",
      "Align design with branding and user journey.",
      "Gather feedback from stakeholders.",
      "Finalize design assets for development.",
    ],
    3: [
      "Frontend and backend development begins.",
      "Implement all key features and integrations.",
      "Continuous testing and QA.",
      "Feedback loops with clients.",
      "Deployment to staging environments.",
    ],
    4: [
      "Project goes live in production. Frontend and backend development begins",
      "We monitor performance and fix issues. Implement all key features and integrations.",
      "Add new features based on feedback. Continuous testing and QA",
      "Ensure scalability and security. Deployment to staging environments Regular updates and maintenance.",
    "Project goes live in production. Frontend and backend development begins",
      "We monitor performance and fix issues. Implement all key features and integrations.",
      "Add new features based on feedback. Continuous testing and QA",
      "Ensure scalability and security. Deployment to staging environments Regular updates and maintenance.",
    ],
  };

  const items = contentMap[activeIndex] || [];

  return (
    <div className="flex-1 pt-6">
      <ul className="list-disc text-white pl-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="mb-6 !leading-12 max-md:!leading-8 text-base text-[Nunito] sm:text-lg leading-normal"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};


// HowItWorks Component
const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { number: 1, title: "Exploration Phase" },
    { number: 2, title: "Visual & Interactive Design Phase" },
    { number: 3, title: "Product Development Stage" },
    { number: 4, title: "Evolution Stage" },
  ];

  return (
    <section
      className="relative max-lg:!py-8 max-lg:!px-12 max-md:!px-16 max-sm:!px-8 !px-36 !py-12 sm:px-8 sm:py-16 w-full min-h-[600px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${itWorksBg})`,
      }}
    >
      <div className="absolute inset-0 bg-[#011529] opacity-70"></div>

      <div className="relative mx-auto my-0 max-w-[1200px]">
        <h2 className="!mb-8 text-2xl sm:text-3xl font-medium text-center text-white">
          How it Works
        </h2>
        <div className="flex gap-8 max-md:flex-col">
          <div className="relative w-[200px] max-md:w-full">
            {steps.map((step) => (
              <TimelineStep
                key={step.number}
                number={step.number}
                title={step.title}
                isActive={activeStep === step.number}
                onClick={() => setActiveStep(step.number)}
              />
            ))}
            <TimelineDivider activeIndex={activeStep} />
          </div>
          <TimelineContent activeIndex={activeStep} />
        </div>
      </div>
    </section>
  );
};


const ImageCarousel = () => {
  const carouselRef = useRef(null);
  const images = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/59220facc586c9edd2ea8f545322d2fc77071a49?",
    "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return (
    <div className="relative w-full max-lg:!px-15 max-lg:!py-8 max-md:!px-16 max-sm:!px-4 !px-36 !py-12 ">
      <h1 className=" !font-[Manrope] text-center !font-bold pb-5 !text-[25px]">
        Our Mobile App Development Projects
      </h1>
    
      {/* Left Arrow (Only Clickable on Arrow) */}
      <button
        className="absolute top-[55%] max-sm:left-[6px] max-sm:top-[62%] left-[70px] -translate-y-1/2 z-50 text-black 
                    p-0 m-0 !border-none  flex items-center justify-center"
        onClick={() => carouselRef.current?.previous()}
      >
        <FaAngleLeft   size={24} />
      </button>
    
      {/* Carousel */}
      <div className="relative max-w-[1200px] mx-auto">
        <Carousel
          arrows={false}
          ref={carouselRef}
          responsive={responsive}
          draggable
          swipeable
          infinite
          autoPlaySpeed={3000}
          keyBoardControl
          showDots={false}
          slidesToSlide={1}
        >
          {images.map((src, index) => (
            <div key={index} className="px-4">
              <img
                src={src}
                alt={`carousel-img-${index}`}
                className="w-full h-[300px] sm:h-[400px] md:h-[450px] object-cover rounded-2xl"
              />
            </div>
          ))}
        </Carousel>
      </div>
    
      {/* Right Arrow (Only Clickable on Arrow) */}
      <button
        className="absolute top-[55%] max-sm:top-[62%] max-sm:right-[6px]  right-[70px] -translate-y-1/2 z-50 text-black 
                   bg-transparent p-0 m-0  max-sm:!border-none outline-none flex items-center justify-center"
        onClick={() => carouselRef.current?.next()}
      >
        <FaAngleRight size={24} />
      </button>
    </div>
  );
};

export default SingleServicePage;