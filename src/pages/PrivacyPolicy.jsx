import React from 'react';

import "../style/PrivacyPolicy.css";
import image from "../assets/privacy.png";

const PrivacyPolicy = () => {
  return (
    
    <div className="privacy-policy">

      <h1>Privacy Policy</h1>
      <div className="effective-date">
        Effective Date: [2024 March 12]<br />
        Last Updated: [2025 April 11]
      </div>

      <p>
        Welcome to <b>Infinite Market Solutions</b>. Your privacy is important to us.
        This Privacy Policy explains how we collect, use, disclose, and safeguard
        your information when you use our services.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li style={{padding:0,margin:0}}>Personal Information: Name, email address, phone number, etc.</li>
        <li>Usage Data: Information about how you use the app.</li>
        <li>Device Information: IP address, browser type, operating system, etc.</li>
        <li>Location Data: If you permit location access, we may collect location-based data.</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>Provide, operate, and maintain our services.</li>
        <li>Improve and personalize user experience.</li>
        <li>Respond to customer service requests.</li>
        <li>Send promotional and marketing communications.</li>
        <li>Comply with legal obligations.</li>
      </ul>

      <h2>Sharing Your Information</h2>
      <p>
        We do not sell, trade, or rent users’ personal information. However, we may share information with:
      </p>
      <ul>
        <li>Service Providers: To help operate our business.</li>
        <li>Legal Authorities: If required by law or to protect our rights.</li>
        <li>Business Transfers: In the event of a merger or acquisition.</li>
      </ul>
    </div>
  );
};
function PrivacyPolicyPage(){
    return (
        <div>
            {/* <HeaderWeb/> */}
            <img src={image} alt="image-privacy" className='privacy-image' />
            <PrivacyPolicy/>
            {/* <FooterWeb/> */}
        </div>
    );
}

export default PrivacyPolicyPage;