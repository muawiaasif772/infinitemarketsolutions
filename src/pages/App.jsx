import "@fortawesome/fontawesome-free/css/all.min.css";
import "../style/App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { Suspense, lazy, useEffect } from "react";
import Header from "./MainScreen/Header.jsx";
import FooterWeb from "../components/footer_web.jsx";
import FloatingButtons from "../components/FloatingButtons.jsx";

// Lazy load components
const Services = lazy(() => import("./Services.jsx"));
const HomePage = lazy(() => import("../pages/MainScreen/HomePage.jsx"));
const AboutUs = lazy(() => import("./AboutUs.jsx"));
const ContactUs = lazy(() => import("./ContactUs.jsx"));
const PrivacyPolicyPage = lazy(() => import("./PrivacyPolicy.jsx"));
const TermsConditionPage = lazy(() => import("./TermsCondition.jsx"));
const ServerSideDevelopment = lazy(() => import("./ServerSideDevelopment.jsx"));
const DigitalMarketingDevelopment = lazy(() => import("./DigitalMarketing.jsx"));
const WebAppDevelopment = lazy(() => import("./WebDevelopment.jsx"));
const SideContact = lazy(() => import("./SidebarContactUs.js"));
const PortFolioGrid = lazy(() => import("./PortFolioGrid.jsx"));
const PortFolioCaseStudy = lazy(() => import("./PortFolioCaseStudy.jsx"));
const SingleServicePage = lazy(() => import("./SingleServicePage.jsx"));
const PageNotFound = lazy(() => import("./PageNotFound.jsx"));

// Optional if you want to use this later
// const Home = lazy(() => import("./Home.jsx"));
// const Hero2 = lazy(() => import("./Hero2.jsx"));
// const MobileAppDevelopment = lazy(() => import("../assets/MobileApp.jsx"));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Suspense fallback={<div className="loader">Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
      </Suspense>

      <FloatingButtons />
      <FooterWeb />
    </Router>
  );
}

export default App;
