import React, { useState, useEffect, useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./TeamCardcopy.css";

import SwiperCore, { Autoplay, Pagination,Keyboard, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../../assets/Ellipse 1 (4).svg";
import img2 from "../../assets/Ellipse 1 (1).svg";
import img3 from "../../assets/Ellipse 1 (2).svg";
import img4 from "../../assets/Ellipse 1 (3).svg";
import img5 from "../../assets/Ellipse 1 (5).svg";
import styles from "./AboutSection.module.css";


const TeamCardcopy = () => {
  const teamswiperRef = useRef(null);

  // ✅ Force update Swiper on resize
  useEffect(() => {
    const handleResize = () => {
      if (teamswiperRef.current) {
        teamswiperRef.current.update(); // Forces Swiper to recalculate breakpoints
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const ratedteams = [
    {
      image: img1,
      about:
        "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
      name: "Muawia",
      role: "Frontend Developer",
      linkedin: "https://linkedin.com/in/janesmith",
      facebook: "https://facebook.com/janesmith",
      github: "https://github.com/janesmith",
    },
    {
      image: img2,
      about:
        "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
      name: "Abdul Qadeer",
      role: "Flutter Developer",
      linkedin: "https://linkedin.com/in/janesmith",
      facebook: "https://facebook.com/janesmith",
      github: "https://github.com/janesmith",
    },
    {
      image: img3,
      about:
        "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
      name: "Imran Khan",
      role: "Software Engineer",
      linkedin: "https://linkedin.com/in/janesmith",
      facebook: "https://facebook.com/janesmith",
      github: "https://github.com/janesmith",
    },
    {
      image: img1,
      about:
        "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
      name: "Salman",
      role: "Flutter Developer",
      linkedin: "https://linkedin.com/in/janesmith",
      facebook: "https://facebook.com/janesmith",
      github: "https://github.com/janesmith",
    },
    {
      image: img5,
      about:
        "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
      name: "Romeena De Silva",
      role: "Janet Cosmetics",
      linkedin: "https://linkedin.com/in/janesmith",
      facebook: "https://facebook.com/janesmith",
      github: "https://github.com/janesmith",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const handleImageClick = (index) => {
    if (teamswiperRef.current) {
      teamswiperRef.current.slideToLoop(index);
      setActiveIndex(index);
    }
  };
  return (
    <div className="relative flex flex-col items-center">
      <div className="team-slider-container max-w-[1200px] w-full m-auto  md:mt-12  relative">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          spaceBetween={40}
          resizeObserver={true}
          centeredSlides={true}
          loop={true}
          
          slidesPerView={5}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: false,
            slidesPerColumn: 1,
          }}
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => (teamswiperRef.current = swiper)}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            620: { slidesPerView: 1, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1590: { slidesPerView: 5, spaceBetween: 10 },
          }}
          modules={[Pagination, Autoplay,EffectCoverflow, Keyboard]}
          className="carousel-track-team mySwiper"
          // centerInsufficientSlides={true}
        >
          {ratedteams.map((team, index) => (
            <SwiperSlide
              key={index}
              className={`team-card ${
                index === activeIndex ? "active" : "inactive"
              }  `}
            >
              <img
                src={team.image}
                alt={team.name}
                className={`team-image p-0 m-0 ${
                  index === activeIndex ? "active" : ""
                }  `}
                style={{ marginBottom: 0 }}
                onClick={() => handleImageClick(index)} />
              <span
                className={`team-name ${
                  index === activeIndex ? "active" : ""
                } text-lg font-semibold `}
              >
                {team.name}
              </span>
              <span
                className={`team-role ${
                  index === activeIndex ? "active" : ""
                } `}
              >
                {team.role}
              </span>
              <p
                className={`team-des p-0 m-0 ${index === activeIndex ? "active" : ""} `}
              >
                {team.about}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TeamCardcopy;
