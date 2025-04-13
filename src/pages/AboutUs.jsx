import React from "react";
import AboutUsImage from "../assets/about_us_cover.png";
import AboutUsMain from "../assets/about-us-main.png";
import roundImage from "../assets/image (8).png";
import AboutSection from "./MainScreen/AboutSection";
import "../style/AboutUs.css";
import GlobalPresence from "./MainScreen/GlobalPresence";
import AboutSectionForAbout from "./MainScreen/AboutSectionForAbout";
import '../style/HopeSection.css'
import infiniteimg from '../assets/infiniteimg.png'
import "../style/MeetOurTeam.css";
import muawia from "../assets/muawia.png"
import aliza from "../assets/aliza.png"
import qadeer from "../assets/qadeer.png"
import facebook from '../assets/Facebook.png'
import linkdin from "../assets/LinkedIn.png"
import twetter from "../assets/Twitter.png"
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const BackgroundSection = ({ children }) => {
  return (
    <div className=" !pr-[7px] !pl-[7px]">
      <section
        className="flex relative flex-col justify-center items-center !px-36 max-lg:!px-12 max-sm:!px-6 max-sm:!py-12 w-full mx-auto rounded-3xl min-h-[300px] md:min-h-[450px]"
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        }}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b8b939bc08adf434abbb4e7d3db1772e917795e?placeholderIfAbsent=true&apiKey=0cecb05fd9fe4a8eb878c24e2286b41a"
          alt="Mobile App Development Background"
          className="object-cover absolute inset-0 w-full h-full rounded-3xl"
        />
        <div className="relative w-full max-w-[1200px] px-4 sm:pl-8 md:pl-12 lg:pl-16 mx-auto">
          {children}
        </div>
      </section>
    </div>
  );
};

const ContentColumns = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-10 w-full">
      {children}
    </div>
  );
};

const HeadingSection = () => {
  return (
    <article className="w-full md:w-6/12">
      <div className="flex flex-col text-black">
        <h1 className="text-3xl sm:text-4xl md:text-5xl !font-bold leading-tight">
          ABOUT US <br className="hidden md:block" />
        </h1>
        <p className="mt-3 !text-18 !font-[500] sm:text-lg md:text-xl font-light">
          Where Technology
          <br />
          Meets
          <br /> Creativity
        </p>
      </div>
    </article>
  );
};

const ImageSection = () => {
  return (
    <div className="w-full md:w-6/12 flex justify-center items-center">
      <img
        src={AboutUsImage}
        alt="Mobile App Development Illustration"
        className="object-contain w-full max-w-[80%] max-sm:max-w-full md:max-w-full"
      />
    </div>
  );
};

const CommitmentContainer = () => {
  return (
    <div className="commitment-container">
      <h1>A Commitment to Excellence</h1>
      <p>
        Infinite Market Solutions is driven by a passion for delivering
        outstanding results. Our team of experts works tirelessly to ensure that
        our solutions not only meet but exceed expectations. By embracing change
        and continuously evolving, we remain at the forefront of innovation,
        helping our clients achieve their goals with confidence and ease.
      </p>
    </div>
  );
};

const AboutUsDes = () => {
  return (
    <div className="about-us-des-container">
      <div className="about-us-des-content">
        <h1>About Us</h1>
        <h3>Infinite Market Solutions</h3>
        <p>
          Infinite Market Solutions is a dynamic and forward-thinking company
          dedicated to innovation and excellence. Our mission is to empower
          businesses and individuals by delivering unique solutions tailored to
          their needs. With a strong commitment to quality and reliability, we
          strive to be a trusted partner in your journey toward growth and
          success.
        </p>
      </div>
      <div className="about-image-wrapper">
        <img src={AboutUsMain} alt="about" className="about-image-main" />
      </div>
    </div>
  );
};






const teamMembers = [
  {
    name: "Shahroz Mirza",
    role: "Manager",
    image: muawia,
  },
  {
    name: "Abdul Qadeer",
    role: " Full Stack Developer",
    image: aliza,
  },
  {
    name: "Aisha Khan",
    role: "App Developer",
    image: qadeer,
  },
  {
    name: "Ahsan Yaseen",
    role: "Graphic Designer",
    image: muawia,
  },
  {
    name: "Salman",
    role: "App Developer",
    image: qadeer,
  },
  {
    name: "Muawia",
    role: "React Developer",
    image: aliza,
  },
  {
    name: "Shoaib",
    role: "Web Developer",
    image: muawia,
  },
  {
    name: "Waqas",
    role: "Full Stack Developer",
    image: qadeer,
  },
];

const MeetOurTeam = () => {
  return (
    <section className="team-section">
      <h2>Meet Our Team</h2>
      <p>Explore Our Success Stories and Innovative Projects</p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-cardss" key={index}>
            <img src={member.image} alt={member.name} />
            <div className="team-info">
              <div className="team-text">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
              <div className="team-divider"></div>
              <div className="team-icons">
  <img src={facebook} alt="Facebook" className="social-icon white-bg" />
  <img src={linkdin} alt="LinkedIn" className="social-icon white-bg" />
  <img src={twetter} alt="Twitter" className="social-icon" />
</div>



            </div>
          </div>
        ))}
      </div>
    </section>
  );
};




 // Replace with your demo image path

const HopeSection = () => {
  return (
    <section className="hope-section">
      <div className="hope-header">
        <h2>A Future Filled with Hope</h2>
        <p>
          At Hope, we are dedicated to uplifting communities through a range of
          targeted initiatives
        </p>
      </div>

      <div className="hope-banner">
        <img src={infiniteimg} alt="Hands reaching out" />
        {/* <div className="hope-overlay-text">INFINITE MARKET SOLUTIONS</div> */}
      </div>

      <div className="hope-grid">
        <div className="hope-card">
          <h3>Our Mission</h3>
          <p>
            Our mission is to empower individuals and communities by providing
            the tools and support they need to overcome challenges and achieve
            their fullest potential through collaborative efforts.
          </p>
        </div>
        <div className="hope-card">
          <h3>Our Vision</h3>
          <p>
            Our vision is a world where every individual, regardless of their
            background or circumstances has the opportunity to thrive. We
            envision communities that are resilient, self-reliant, and full of
            promise.
          </p>
        </div>
        <div className="hope-card">
          <h3>Global Movement</h3>
          <p>
            We envision a global movement where compassion and empathy drive
            action, where the barriers of inequality and injustice are
            dismantled, and where hope is not just a fleeting sentiment but a
            tangible reality.
          </p>
        </div>
      </div>
    </section>
  );
};


const VisionAndValues = () => {
  return (
    <div className="vision-container">
      <div className="vision-image-wrapper">
        <img src={roundImage} alt="imageRound" className="image-round" />
      </div>
      <div className="vision-content">
        <h2 className="vision-title">Our Vision and Values</h2>
        <p className="vision-text">
          At Infinite Market Solutions, our vision is to bridge the gap between
          technology and opportunity, creating a future where possibilities are
          limitless. We believe in fostering strong relationships built on
          trust, innovation, and collaboration. Our values are rooted in
          integrity, creativity, and the relentless pursuit of excellence in
          everything we do.
        </p>
      </div>
    </div>
  );
};

function AboutUs() {
  return (
    <>
      <div className="about-us-container">
        <BackgroundSection>
          <ContentColumns>
            <HeadingSection />
            <ImageSection />
          </ContentColumns>
        </BackgroundSection>
        <AboutSectionForAbout />
        <GlobalPresence />
        <CommitmentContainer />
        <MeetOurTeam/>
        <HopeSection/>
        {/* <AboutUsDes /> */}
        {/* <VisionAndValues /> */}
      </div>
    </>
  );
}

export default AboutUs;
