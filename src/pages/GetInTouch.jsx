import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
// import SideContact from "../components/SideContact";
import SideContact from "./SidebarContactUs";
// import "../style/App.css";
import "../pages/getIntouch.css";
import { Link } from "react-router-dom";
const GetInTouch = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleBookConsultation = () => {
    setShowSidebar(true);
  };
  return (
    <section className="contact-cover">
      <h3>
        Prepared to grow and tackle the technology challenges <br /> of the
        future?
      </h3>
      <Link to="">
        <button onClick={handleBookConsultation} className="btn-contact">Let's Talk</button>
      </Link>
      {showSidebar && (
        <SideContact
          isOpen={setShowSidebar}
          onClose={() => setShowSidebar(false)}
        />
      )}{" "}
    </section>
  );
};
export default GetInTouch;
