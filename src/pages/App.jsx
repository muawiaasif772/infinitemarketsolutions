
import "@fortawesome/fontawesome-free/css/all.min.css"
import "../style/App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Services from "./Services.jsx";
import HomePage from "../pages/MainScreen/HomePage.jsx";
import AboutUs from "./AboutUs.jsx";
import ContactUs from "./ContactUs.jsx";
import PrivacyPolicyPage from "./PrivacyPolicy.jsx";
import TermsConditionPage from "./TermsCondition.jsx";
import MobileAppDevelopment from "../assets/MobileApp.jsx";
import ServerSideDevelopment from "./ServerSideDevelopment.jsx";
import DigitalMarketingDevelopment from "./DigitalMarketing.jsx";
import WebAppDevelopment from "./WebDevelopment.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./MainScreen/Header.jsx";
import Home from "./Home.jsx";
import FooterWeb from "../components/footer_web.jsx";
import Hero2 from "./Hero2.jsx";
import SideContact from "./SidebarContactUs.js";
import PageNotFound from "./PageNotFound.jsx";
// import PortFolioDetails from "./PortFolioDetails.jsx";
import { FiLogOut } from "react-icons/fi";

import FloatingButtons from "../components/FloatingButtons.jsx";
import PortFolioGrid from "./PortFolioGrid.jsx";
import PortFolioCaseStudy from "./PortFolioCaseStudy.jsx";
import SingleServicePage from "./SingleServicePage.jsx";
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};



function App() {
  return (
    <>
    <Router>
      <ScrollToTop />  
              <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* {/ <Route path="/home" element={<Home />} /> */} 
         <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsConditionPage />} />
        <Route path="/services/mobile-app" element={<SingleServicePage />} />
        <Route path="/services/server-side-development" element={<ServerSideDevelopment />} />
        <Route path="/services/digital-marketing-development" element={<DigitalMarketingDevelopment />} />
        <Route path="/services/web-development" element={<WebAppDevelopment />} />
        <Route path="/sidebarContact" element={<SideContact />} />
        <Route path="/portfolio" element={<PortFolioGrid />} />
        <Route path="/case-study/:id" element={<PortFolioCaseStudy />} />
        

        <Route path="*" element={<PageNotFound />} />
         

      </Routes>
      <FloatingButtons />
      <FooterWeb />

     </Router> 
     </>
  );
}





export default App;
