import React from 'react';
import HeaderWeb from '../components/header_web';
import FooterWeb from '../components/footer_web';
import "../style/PrivacyPolicy.css";
import image from "../assets/privacy.png";

const TermsCondition = () => {
  return (
    
    <div className="privacy-policy">

      <h1>Terms & Conditions</h1>
      <div className="effective-date">
        Effective Date: [Insert Date]<br />
        Last Updated: [Insert Date]
      </div>

      <p>
        Welcome to <b>Infinite Market Solutions</b>. Your privacy is important to us.
        This Privacy Policy explains how we collect, use, disclose, and safeguard
        your information when you use our services.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Personal Information: Name, email address, phone number, etc.</li>
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
function TermsConditionPage(){
    return (
        <div>
            {/* <HeaderWeb/> */}
            <img src={image} alt="image-privacy" className='privacy-image' />
            <TermsCondition/>
            {/* <FooterWeb/> */}
        </div>
    );
}

export default TermsConditionPage;