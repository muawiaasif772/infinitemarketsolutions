import React from 'react';
import HeaderWeb from '../components/header_web';
import FooterWeb from '../components/footer_web';
import "../style/MobileAppDevelopment.css";
import image from "../assets/marketing.png";

const DigitalMarketing = () => {
  return (
    <div className="app-dev-section">
      <div className='top-section-mobile-app'>
        <div className='vertical-divider'></div>
        <div className='top-section-mobile-app-inter'>
        <h1>Digital Marketing</h1>
        <p className="tagline">Expanding Reach,<br />One Strategy at a Time.</p>
        </div>
        <img src={image} alt="imageMain" />
      </div>

      <h2>Overview</h2>
      <p>
        Digital Marketing involves promoting products and services through online channels.
        It includes various strategies such as SEO, content marketing, social media marketing,
        email marketing, and paid advertising to drive engagement and sales.
      </p>
      <h2>Key Aspects of Digital Marketing</h2>
      <h3>Search Engine Optimization (SEO)</h3>
      
        <p><strong>On-Page SEO:</strong> Optimizing website content and structure for better rankings.</p>
        <p><strong>Off-Page SEO:</strong> Building backlinks and external credibility.</p>
        <p><strong>Technical SEO:</strong> Improving site speed, mobile-friendliness, and indexing.</p>
      
      <h3>Social Media Marketing</h3>
        <p><strong>Organic Marketing:</strong> Engaging audiences through posts, stories, and interactions.</p>
        <p><strong>Paid Advertising:</strong> Running targeted campaigns on platforms like Facebook, Instagram, and LinkedIn.</p>
        <p><strong>Influencer Marketing:</strong> Collaborating with influencers to reach a broader audience.</p>
      
      <h3>Types of Digital Marketing</h3>
        <p><strong>Content Marketing:</strong> Creating valuable content to attract and retain customers.</p>
        <p><strong>Email Marketing:</strong> Direct communication through personalized email campaigns.</p>
        <p><strong>PPC Advertising:</strong> Paying for ad placements on search engines and social media.</p>
        <p><strong>Affiliate Marketing:</strong> Partnering with affiliates to promote products and services.</p>
      
    </div>
  );
};

function DigitalMarketingDevelopment(){
    return (
        <div>
            {/* <HeaderWeb/> */}
            <DigitalMarketing/>
            {/* <FooterWeb/> */}
        </div>
    );
}

export default DigitalMarketingDevelopment;