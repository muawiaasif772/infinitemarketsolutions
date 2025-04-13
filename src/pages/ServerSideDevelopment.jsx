import React from 'react';
import HeaderWeb from '../components/header_web';
import FooterWeb from '../components/footer_web';
import "../style/MobileAppDevelopment.css";
import image from "../assets/server.png";

const ServerSide = () => {
  return (
    <div className="app-dev-section">
      <div className='top-section-mobile-app'>
        <div className='vertical-divider'></div>
        <div className='top-section-mobile-app-inter'>
        <h1>Server-Side Development</h1>
        <p className="tagline">Powering the Web,<br />One Server at a Time.</p>
        </div>
        <img src={image} alt="imageMain" />
      </div>

      <h2>Overview</h2>
      <p>
        Server-side development focuses on building and maintaining the backend of web applications.
        It involves handling databases, server logic, authentication, API integration, and more to 
        ensure seamless application functionality and security.
      </p>
      <h2>Key Aspects of Server-Side Development</h2>
      <h3>Backend Technologies</h3>
      
        <p><strong>Node.js:</strong> A JavaScript runtime for building scalable network applications.</p>
        <p><strong>Python (Django/Flask):</strong> Popular frameworks for rapid development and security.</p>
        <p><strong>PHP:</strong> A widely used language for dynamic server-side scripting.</p>
        <p><strong>Ruby on Rails:</strong> A powerful framework for web application development.</p>
      
      <h3>Database Management</h3>
        <p><strong>SQL Databases:</strong> Structured data storage with MySQL, PostgreSQL, and SQL Server.</p>
        <p><strong>NoSQL Databases:</strong> Flexible data storage using MongoDB, Firebase, or DynamoDB.</p>
        <p><strong>ORMs:</strong> Tools like Sequelize, Prisma, and SQLAlchemy for database interaction.</p>
      
      <h3>Server-Side Best Practices</h3>
        <p><strong>RESTful APIs:</strong> Structuring APIs for efficient communication.</p>
        <p><strong>Authentication & Security:</strong> Implementing JWT, OAuth, and encryption.</p>
        <p><strong>Scalability:</strong> Using microservices and cloud computing for performance.</p>
        <p><strong>Performance Optimization:</strong> Caching, load balancing, and efficient queries.</p>
      
    </div>
  );
};

function ServerSideDevelopment(){
    return (
        <div>
            {/* <HeaderWeb/> */}
            <ServerSide/>
            {/* <FooterWeb/> */}
        </div>
    );
}

export default ServerSideDevelopment;