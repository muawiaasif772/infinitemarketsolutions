import { useState } from "react";
import { FaWhatsapp, FaHeadphones } from "react-icons/fa";
import SideContact from "../pages/SidebarContactUs";

const FloatingButtons = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleBookConsultation = () => {
    setShowSidebar(true);
  };
  const phoneNumber = "923006873200"; // Replace with your actual number

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };
  return (
    <>
      {/* Floating Buttons */}
      <div className="fixed bottom-6 left-4 z-50 ">
        {/* WhatsApp Button with Tooltip */}
        <button onClick={openWhatsApp}
         
         
          className="!flex !items-center !h-10 !w-10 !bg-green-500  !text-white !rounded-full shadow-lg !hover:bg-green-600 transition-all animate-growShrink"
        >
          <FaWhatsapp size={20} className="m-auto"/>
        </button>

        {/* Tooltip Component */}
      
      </div>

      {/* Scroll to Top Button */}
     {/* Scroll to Top Button */}
<div className="fixed bottom-6 right-4 z-50">
  <button
     onClick={handleBookConsultation}
    className="!flex !items-center !justify-center !h-10 !w-10 !bg-blue-500 !text-white !rounded-full shadow-lg hover:bg-blue-600 transition-all animate-growShrink"
  >
    <FaHeadphones size={20} className="m-auto" />
  </button>
</div>

      {/* Contact Form Sidebar */}
      {showSidebar && (
        <SideContact
          isOpen={setShowSidebar}
          onClose={() => setShowSidebar(false)}
        />
      )}
    </>
  );
};

export default FloatingButtons;
