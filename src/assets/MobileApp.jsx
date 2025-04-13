import React from 'react';
import HeaderWeb from '../components/header_web';
import FooterWeb from '../components/footer_web';
import "../style/MobileAppDevelopment.css";
import image from "../assets/image 24.png";

const MobileApp = () => {
  return (
    <div className="app-dev-section">
      <div className='top-section-mobile-app'>
        <div className='vertical-divider'></div>
        <div className='top-section-mobile-app-inter'>
        <h1>Mobile App Development</h1>
        <p className="tagline">Building the Future,<br />One App at a Time.</p>
        </div>
        <img src={image} alt="imageMain" />
      </div>

      <h2>Overview</h2>
      <p>
        Mobile App Development involves creating software applications that run on mobile devices 
        such as smartphones and tablets. It encompasses everything from planning and designing to 
        coding, testing, and launching the app.
      </p>
      <h2>Key Aspects of Mobile App Development</h2>
      <h3>Platforms</h3>
      
        <p><strong>iOS Development:</strong> Apps for Apple devices using Swift or Objective-C.</p>
        <p><strong>Android Development:</strong> Apps for Android devices using Kotlin or Java.</p>
        <p><strong>Cross-Platform Development:</strong> Write once, deploy on both platforms using frameworks like Flutter, React Native, or Xamarin.</p>
      
      <h3>Types of Mobile Apps</h3>
        <p><strong>Native Apps:</strong> Built specifically for one platform (iOS/Android) for best performance.</p>
        <p><strong>Cross-Platform Apps:</strong> Work on multiple platforms with shared codebase.</p>
        <p><strong>Web Apps:</strong> Mobile-optimized web pages that mimic app behavior.</p>
        <p><strong>Hybrid Apps:</strong> Combine native and web app elements.</p>
      
    </div>
  );
};



function MobileAppDevelopment(){
    return (
        <div>
            <MobileApp/>
        </div>
    );
}



export default MobileAppDevelopment;