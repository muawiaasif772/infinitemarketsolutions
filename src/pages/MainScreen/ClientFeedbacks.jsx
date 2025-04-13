import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Keyboard, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import img1 from "../../assets/Ellipse 1 (4).svg";
import img2 from "../../assets/Ellipse 1 (1).svg";
import img3 from "../../assets/Ellipse 1 (2).svg";
import img4 from "../../assets/Ellipse 1 (3).svg";
import img5 from "../../assets/Ellipse 1 (5).svg";

import "./ClientFeedbacks.css";

// Register Swiper modules

const ClintsFeedbacks = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInitialized, setSwiperInitialized] = useState(false);

  // Improved resize handler with debounce
  useEffect(() => {
    let resizeTimeout;
  
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (swiperRef.current && swiperInitialized) {
          swiperRef.current.update();
          
          // Force update slides visibility after resize
          const activeSlide = document.querySelector('.swiper-slide-active');
          if (activeSlide) {
            const activeIndex = parseInt(activeSlide.getAttribute('data-swiper-slide-index') || 0);
            setActiveIndex(activeIndex);
          }
        }
      }, 250);
    };
  
    window.addEventListener("resize", handleResize);
    
    // Initial update
    if (swiperRef.current && swiperInitialized) {
      handleResize();
    }
    
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, [swiperInitialized]);

  // Auto refresh slider on visibility change
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && swiperRef.current) {
        setTimeout(() => {
          swiperRef.current.update();
        }, 300);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const handleImageClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
      setActiveIndex(index);
    }
  };

  const ratedPersons = [
    {
      image: img1,
      stars: 5,
      name: "Muawia",
      role: "Frontend Developer",
      testimonial:
        "Without any doubt The mobile app Muawia built for my company is phenomenal! It works flawlessly on both iOS and Android. His dedication and technical skills are truly impressive",
    },
    {
      image: img2,
      stars: 5,
      name: "Abdul Qadeer",
      role: "Flutter Developer",
      testimonial:
        "I highly recommend The mobile app Muawia built for my company is phenomenal! It works flawlessly on both iOS and Android. His dedication and technical skills are truly impressive",
    },
    {
      image: img3,
      stars: 5,
      name: "Imran Khan",
      role: "Software Engineer",
      testimonial:
        "Elevate Digital's expertise.The mobile app Muawia built for my company is phenomenal! It works flawlessly on both iOS and Android. His dedication and technical skills are truly impressive.",
    },
    {
      image: img3,
      stars: 5,
      name: "Salman",
      role: "Flutter Developer",
      testimonial:
        "Creative Vision Agency.The mobile app Muawia built for my company is phenomenal! It works flawlessly on both iOS and Android. His dedication and technical skills are truly impressive",
    },
    {
      image: img5,
      stars: 5,
      name: "Romeena De Silva",
      role: "Janet Cosmetics",
      testimonial:
        "Elevate Digital's expertise.The mobile app Muawia built for my company is phenomenal! It works flawlessly on both iOS and Android. His dedication and technical skills are truly impressive",
    },
  ];

  return (
    <div className="relative flex flex-col gap-4 items-center">
      <section className="text-center testimonial-section">
        <div className="flex flex-col">
          <SectionHeader className="leading-[3px] font-[Manrope]">
            <span className="text-[18px] font-[Nunito]">
              Why customers love
            </span>
            <span className="text-[20px] font-[Nunito] font-semibold p-0 m-0 block">
              working with us
            </span>
          </SectionHeader>

          <TestimonialQuote quote={ratedPersons[activeIndex].testimonial} />
        </div>
      </section>

      <div className="carousel-container max-w-[900px] w-full mt relative">
        <button
          className="nav-button left-button sm:hidden"
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          <span className="arrow arrow-left"></span>
        </button>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          spaceBetween={20} // Decreased gap between cards
          slidesPerView={5}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: false,
          }}
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          autoplay={{ 
            delay: 2000, 
            disableOnInteraction: false,
           
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setSwiperInitialized(true);
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onResize={(swiper) => {
            swiper.update();
            setTimeout(() => {
              swiper.update();
            }, 500); // Second update after animation completes
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 0 },
            620: { slidesPerView: 3, spaceBetween: 0 },
            1024: { slidesPerView: 5, spaceBetween: 5 },
            1590: { slidesPerView: 5, spaceBetween: 0 },
          }}
          modules={[Autoplay, Keyboard, EffectCoverflow]}
          className="carousel-track client-feedback-swiper"
          observer={true}
          observeParents={true}
          watchSlidesProgress={true}
        >
          {ratedPersons.map((person, index) => (
            <SwiperSlide
              key={index}
              className={`person-card ${
                index === activeIndex ? "active" : "inactive"
              }`}
              data-index={index}
            >
              <img
                src={person.image}
                alt={person.name}
                className={`person-image  ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => handleImageClick(index)}
                loading="lazy"
              />
              <div className="stars p-0 m-0" style={{ color: "yellow", marginTop: "5px" }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`star p-0 m-0 ${index === activeIndex ? "active" : ""}`}
                  >
                    {i < person.stars && "★"}
                  </span>
                ))}
              </div>
              <span
                className={`person-name p-0 m-0 ${
                  index === activeIndex ? "active" : ""
                }`}
              >
                {person.name}
              </span>
              <span
                className={`person-role ${
                  index === activeIndex ? "active" : ""
                }`}
              >
                {person.role}
              </span>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="nav-button right-button sm:hidden"
          onClick={handleNext}
          aria-label="Next slide"
        >
          <span className="arrow arrow-right"></span>
        </button>
      </div>
    </div>
  );
};

const SectionHeader = ({ children }) => (
  <header className="flex flex-col items-center w-full">
    <h2 className="mt-5 text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight md:leading-normal">
      {children}
    </h2>
  </header>
);

const TestimonialQuote = ({ quote }) => (
  <div className="relative  h-auto m-auto  flex   w-full text-lg text-black leading-6">
    <img
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c3e879a95803b57fbe0f04078f144c7234b74eb480764b7a63fdcadf375593e"
      alt="Opening quote"
      className="!w-6 !h-6 object-contain self-start md:w-8 md:h-8 max-sm:hidden block mb-[-4px] flex-shrink-0"
    />
        <div className="   max-md:!max-w-auto  max-sm:!m-auto   max-lg:!px-12  max-w-[527px]      ">

      <p className=" font-[Nunito]   !text-[18px]  max-sm:!text-[14px] text-[#5a5c62]   text-center leading-7 my-1 ">
        {quote}
      </p>
    </div>
    
    <img
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/96dbe6364ac2092e446b8c4a5cab50c452e8fcf8c7d83f8f7c58ff54b78e7183"
      alt="Closing quote"
      className="!w-6 !h-6 object-contain self-end md:w-8 md:h-8 max-sm:hidden block mt-[-2px] flex-shrink-0"
    />
  </div>
);

export default ClintsFeedbacks;