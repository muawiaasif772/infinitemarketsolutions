import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SideContact from "./SidebarContactUs";
import "./herosection.css";
import slide1 from "../assets/sliderimage1.png";
import slide2 from "../assets/sliderimage2.png";

const slides = [
  {
    image: slide1,
    heading: "Custom iOS app development with 6 months free support",
    paragraph: "Top Notch & super efficient app Top Notch & super efficient app ",
  },
  {
    image: slide2,
    heading: "Next-Gen Tech Solutions",
    paragraph: "Elevate your business with technology.",
  },
];

export default function HeroSection() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleBookConsultation = () => {
    setShowSidebar(true);
  };

  return (
    <>
      <div className="hero-container" >
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={5000}
          autoPlay
          centerMode={false}
          infinite
          keyBoardControl={true}
          pauseOnHover={false}
          showDots={true}
          slidesToSlide={1}
          swipeable={true}
          responsive={{
            desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
            tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
            mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="slide"
              style={{
                backgroundImage: `url(${slide.image})`,
                width: "100%",
                height: "500px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="content">
                <p>{slide.paragraph}</p>
                <h1>{slide.heading}</h1>
               
              </div>
            </div>
          ))}
        </Carousel>
        <div className=" fixed-buttons" >
                  <button className="primary-btn">Get Started</button>
                  <button
                    onClick={handleBookConsultation}
                    className="secondary-btn"
                  >
                    Book Consultation
                  </button>
                </div>
        {/* Place SideContact outside of the carousel */}
      </div>
      {showSidebar && (
        <SideContact
          isOpen={showSidebar}
          onClose={() => setShowSidebar(false)}
        />
      )}
    </>
  );
}
