import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ComponentImageSources } from '../Constants/ImageSources.js';

const Carousel = ({ imageSources }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = Object.values(imageSources);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div
      className={`carouselContainer`}
    >
      {images.length > 1 && (
        <img
          src={ComponentImageSources.leftArrow}
          alt="Left Arrow"
          className="carouselArrowImage carouselLeftArrowImage"
          onClick={handlePrev}
        />
      )}
      <img src={images[currentImageIndex]} alt="carousel" className="carouselImage" />
      {images.length > 1 && (
        <img
          src={ComponentImageSources.rightArrow}
          alt="Right Arrow"
          className="carouselArrowImage carouselRightArrowImage"
          onClick={handleNext}
        />
      )}
    </div>
  );
};

Carousel.propTypes = {
  imageSources: PropTypes.object.isRequired,
  hasSplitLayout: PropTypes.bool
};

Carousel.defaultProps = {
  hasSplitLayout: false
};

export default Carousel;
