
import React from "react";
import styles from "./HomePage.module.css";
import Header from "../MainScreen/Header";
import HeroSection from "../HeroSection";
import StatsSection from "./StatsSection";
import PartnerLogos from "./PartnerLogos";
import AboutSection from "./AboutSection";
import GlobalPresence from "./GlobalPresence";
import TechStack from "./TechStack";
import Testimonials from "./Testimonials";
import DesignApproach from "./DevelopmentApproach";
import TeamSection from "./TeamSection";
import PlatformsSection from "./PlatformsSection";
import PortfolioSection from "./PortfolioSection";
import IndustriesSectionWithFonts from "./IndustriesSection";
import BlogSection from "./blogs/BlogSection";
import PurposeSection from "./PurposeSection";
import Footer from "./Footer";
import ServicesSection from "./ServiceSection";
import ClintsFeedbacks from "./ClientFeedbacks";
import ContactSection from "../ContactUsSection.jsx";
// import ContactUs from "../ContactUs.js";
function HomePage() {
  return (
    <>
<HeroSection/>
    {/* <main className={styles.homePage}> */}

      {/* <div className={styles.container}> */}
      
        <PartnerLogos />
        <AboutSection />
        <ServicesSection />
        <GlobalPresence />
        <TechStack />
        <ClintsFeedbacks />
        <DesignApproach />
        <TeamSection />
        <PlatformsSection />
        <PortfolioSection />
        <IndustriesSectionWithFonts />
        <BlogSection />
        {/* <GetInTouch /> */}
        <ContactSection/>
      {/* </div> */}
    {/* </main> */}
    </>
  );
}

export default HomePage;
