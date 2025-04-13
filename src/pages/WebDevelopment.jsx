import React from 'react';
import HeaderWeb from '../components/header_web';
import FooterWeb from '../components/footer_web';
import "../style/MobileAppDevelopment.css";
import image from "../assets/web.png";

const WebDevelopment = () => {
  return (
    <div className="app-dev-section">
      <div className='top-section-mobile-app'>
        <div className='vertical-divider'></div>
        <div className='top-section-mobile-app-inter'>
        <h1>Web Development</h1>
        <p className="tagline">Creating the Future,<br />One Website at a Time.</p>
        </div>
        <img src={image} alt="imageMain" />
      </div>

      <h2>Overview</h2>
      <p>
        Web Development involves building and maintaining websites and web applications. It includes
        everything from designing and coding to deploying and optimizing websites for performance
        and user experience.
      </p>
      <h2>Key Aspects of Web Development</h2>
      <h3>Front-End Development</h3>
      
        <p><strong>HTML & CSS:</strong> The foundation of any web page's structure and styling.</p>
        <p><strong>JavaScript & Frameworks:</strong> Enhancing interactivity using React, Vue, or Angular.</p>
        <p><strong>Responsive Design:</strong> Ensuring websites work well on all screen sizes.</p>
      
      <h3>Back-End Development</h3>
        <p><strong>Server-Side Languages:</strong> Handling logic with Node.js, Python, PHP, or Ruby.</p>
        <p><strong>Databases:</strong> Storing data using MySQL, MongoDB, or PostgreSQL.</p>
        <p><strong>APIs & Web Services:</strong> Enabling communication between the front-end and back-end.</p>
      
      <h3>Types of Web Applications</h3>
        <p><strong>Static Websites:</strong> Simple sites with fixed content.</p>
        <p><strong>Dynamic Websites:</strong> Interactive sites powered by databases and server logic.</p>
        <p><strong>Single Page Applications (SPA):</strong> Fast, seamless navigation using frameworks like React.</p>
        <p><strong>Progressive Web Apps (PWA):</strong> Web apps that offer a native app-like experience.</p>
      
    </div>
  );
};

function WebAppDevelopment(){
    return (
        <div>
            {/* <HeaderWeb/> */}
            <WebDevelopment/>
            {/* <FooterWeb/> */}
        </div>
    );
}

export default WebAppDevelopment;
