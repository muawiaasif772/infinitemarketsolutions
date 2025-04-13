import React from "react";
import Carousel from "react-multi-carousel";
import './herosection.css'
import "react-multi-carousel/lib/styles.css";
import slide1 from "../assets/sliderimage1.png";
import slide2 from "../assets/sliderimage2.png";
const slides = [
  {
    image: slide1,
    heading: "Creative & Innovative Digital Solution",
    paragraph: "Experience the power of innovation.",
  },
  {
    image: slide2,
    heading: "Next-Gen Tech Solutions",
    paragraph: "Elevate your business with cutting-edge technology.",
  },
];
const Hero2 = () => {
  return (
    <div >
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={2000}
        autoPlay
        centerMode={false}
        infinite
        keyBoardControl={true}
        pauseOnHover={false}
        showDots
        slidesToSlide={1}
        swipeable={true}
        responsive={{
          desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
          tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
          mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
        }}
      >
      {slides.map((src, index) => (
          <div
            key={index}
            // className="slide "
            style={{ backgroundImage: `url(${src.image})`,width:'100%',height:'600px',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center' }}
          >
            <div className="content">
              <p>{src.paragraph}</p>
              <h1>{src.heading}</h1>
              <div className="buttons">
                <button className="primary-btn">Get Started</button>
                <button className="secondary-btn">Book Consultation</button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero2;
