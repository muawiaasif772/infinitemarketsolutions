
import React from "react";
const images = [
	{
	  original: "https://picsum.photos/id/1018/1000/600/",
	  thumbnail: "https://picsum.photos/id/1018/250/150/",
	},
	{
	  original: "https://picsum.photos/id/1015/1000/600/",
	  thumbnail: "https://picsum.photos/id/1015/250/150/",
	},
	{
	  original: "https://picsum.photos/id/1019/1000/600/",
	  thumbnail: "https://picsum.photos/id/1019/250/150/",
	},
  ];


const ImageGallery = () => {
  return (
    <div className="image-gallery">
      {images.map((item, index) => (
        <div key={index} className="image-item">
          <img src={item.original} alt={`Gallery item ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
