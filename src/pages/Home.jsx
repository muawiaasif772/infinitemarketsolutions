
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../style/App.css";
import { Link } from "react-router-dom"; 
import logo from "../assets/Group 35.png";
import digital from "../assets/Digital Marketing Black Icon.png";
import mobile from "../assets/image.png";
import server from "../assets/Server Side Development Black Icon.png";
import step from "../assets/image (6).png";
import web from "../assets/image 21.png";
import HeaderWeb from "../components/header_web.jsx";
import FooterWeb from "../components/footer_web.jsx";
import HeroSection from "./HeroSection.jsx";




const Hero = () => (
  <section className="hero">
  
 

      <div className="hero-content">
      <h1 className="top-heading">Empowering Your Vision</h1>
      <h6 className="content-top">Crafting Your Vision into Reality</h6>
      <p className="hero-description">
      Partner with us to design, develop, and scale software products that redefine possibilities.
      With our global pool of experts, we ensure success for every project.
     </p>
   
    </div>
    


    <img src={logo} alt="Hero" className="hero-image" />
   
  </section>
);

const ServiceCard = ({ img, title, link }) => (
  <Link to={link} className="service-card">
    <img src={img} alt={title} className="service-card-icon" />
    <div className="divider"></div>
    <h3>{title}</h3>
  </Link>
);


const ServicesSection = () => (
  <section id="services" className="services">
    <h2 style={{textAlign:'center',paddingBottom:'18px'}}>Our Services</h2>
    <div className="services-grid">
      {[ 
        { img: digital, title: "Digital Marketing" ,link:"/services/digital-marketing-development"},
        { img: mobile, title: "Mobile App Development",link:"/services/mobile-app-development" },
        { img: server, title: "Server Side Development" ,link:"/services/server-side-development"},
        { img: web, title: "Web Development",link:"/services/web-development" }
      ].map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  </section>
);

const BenefitStep = ({ number, title, description }) => (
  <div className="each-step-row">
    <div className="show-line">
    {number === 1 && <div className="divider-circle-3"></div>}
    {number !== 1 && <div className="divider-circle-2"></div>}
      <div className="count-circle">{number}</div>
      {number !== 5 && <div className="divider-circle"></div>}
    </div>
    <div className="each-step-col">
      <h3 className="title-step">{title}</h3>
      <p className="para-step">{description}</p>
    </div>
  </div>
);

const Benefits = () => (
  <section className="benefits">
    <h2>Benefits of Choosing <br /> <span className="span-text">INFINITE</span> MARKET SOLUTIONS</h2>
    <div className="steps-main">
      <img src={step} alt="steps" className="step-image" />
      <div>
        {[
          { number: 1, title: "Innovative Solutions", description: "Offering cutting-edge technology and creative strategies to help businesses grow efficiently in a competitive market." },
          { number: 2, title: "Customized Service", description: "Tailoring solutions based on the unique needs of each client to ensure maximum results." },
          { number: 3, title: "Expert Team", description: "A team of skilled professionals dedicated to delivering top-notch services with attention to detail." },
          { number: 4, title: "Reliable Support", description: "Providing ongoing support and maintenance to ensure smooth and uninterrupted operations." },
          { number: 5, title: "Cost-Effective Solutions", description: "Delivering high-quality services at competitive prices to maximize return on investment." }
        ].map((benefit) => (
          <BenefitStep key={benefit.number} {...benefit} />
        ))}
      </div>
    </div>
  </section>
);


const PurposeCover = ()=>(
    <section className='purpose-cover'>
          <h3>Our Purpose</h3>
          <p>To amplify human potential and create the next opportunity for people, businesses<br />and communities</p>
        </section>
  );
  
  const ContactCover = () => {
    
    return (
      <section className='contact-cover'>
        <h3>Prepared to grow and tackle the technology challenges <br /> of the future?</h3>
        <Link to="/contactus">
        <button className='btn-contact' >
          GET IN TOUCH
        </button>
        </Link>
        
      </section>
    );
  };


  
  const Home = ()=>(
    <div className="">
        <HeroSection />
        <ServicesSection />
        <Benefits />
        <PurposeCover/>
        <ContactCover/>
      </div>
  );
  

export default Home;