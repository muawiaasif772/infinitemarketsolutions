import { useEffect } from "react";

const CheckOverflow = () => {
  useEffect(() => {
    const checkOverflow = () => {
      document.querySelectorAll("*").forEach((el) => {
        if (el.scrollWidth > el.clientWidth) {
          console.log("Overflowing Element:", el);
        }
      });
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow); // Re-run on resize

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  return null; // This component does not render anything
};

export default CheckOverflow;
