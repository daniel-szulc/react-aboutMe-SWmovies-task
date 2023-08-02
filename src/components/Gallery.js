import React, {useState, useEffect, useCallback} from "react";
import "../styles/_gallery.css";
import Icon from "../utils/Icon";

const Gallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const autoSlideTime = 5000;

  const nextImage = useCallback(() => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  }, [images.length])

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextImage, autoSlideTime);
    return () => clearInterval(timer);
  }, [currentImage, nextImage]);

  return (
    <div className="gallery-container">
      <div
        className="gallery-images"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt="" className="gallery-image" />
        ))}
      </div>
      <div className="gallery-arrows">
        <button onClick={prevImage} className="gallery-arrow">
          <Icon name='angleRight' size='28'/>
        </button>
        <button onClick={nextImage} className="gallery-arrow">
          <Icon name='angleRight' size='28'/>
        </button>
      </div>
      <div className="gallery-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`gallery-dot ${currentImage === index ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
