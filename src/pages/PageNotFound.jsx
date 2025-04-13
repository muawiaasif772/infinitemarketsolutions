import React from 'react';
import { Link } from "react-router-dom";
const PageNotFound = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
		  <img
			src="https://i.imgur.com/qIufhof.png"
			alt="404 Not Found"
			className="w-80 mb-6"
		  />
		  <h1 className="text-4xl font-bold text-gray-800 mb-2">Oops! Page Not Found</h1>
		  <p className="text-gray-600 mb-6 text-lg text-center">
			The page you’re looking for doesn’t exist or has been moved.
		  </p>
		  <Link
			to="/"
			className="px-28 mt-5 py-13 bg-blue-600 text-white rounded-lg text-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
		  >
			<button
  style={{
    alignItems: "center",
    backgroundColor: "#06f",
    border: "2px solid #06f",
    boxSizing: "border-box",
    color: "#fff",
    cursor: "pointer",
    display: "inline-flex",
    fill: "#000",
    fontFamily: "Inter, sans-serif",
    fontSize: "16px",
    fontWeight: 600,
    height: "48px",
    justifyContent: "center",
    letterSpacing: "-0.8px",
    lineHeight: "24px",
    minWidth: "140px",
    outline: 0,
    padding: "0 17px",
    textAlign: "center",
    textDecoration: "none",
    transition: "all 0.3s",
    userSelect: "none",
    touchAction: "manipulation",
  }}
  onMouseOver={(e) => {
    e.target.style.backgroundColor = "#3385ff";
    e.target.style.borderColor = "#3385ff";
    e.target.style.fill = "#06f";
  }}
  onMouseOut={(e) => {
    e.target.style.backgroundColor = "#06f";
    e.target.style.borderColor = "#06f";
  }}
  onFocus={(e) => {
    e.target.style.color = "#171e29";
  }}
  onMouseDown={(e) => {
    e.target.style.backgroundColor = "#3385ff";
    e.target.style.borderColor = "#3385ff";
    e.target.style.fill = "#06f";
  }}
>
 GO Home
</button>

		  </Link>
		  
		</div>
	  );
};

export default PageNotFound;