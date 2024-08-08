import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ComponentImageSources } from '../Constants/ImageSources.js';

const Carousel = ({ imageSources = {}, carouselTitle }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = Object.values(imageSources);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className={`carouselContainer`}>
      {carouselTitle && <div className="carouselTitle">{carouselTitle}</div>}

        {images.length > 1 && (
          <img
            src={ComponentImageSources.leftArrow}
            alt="Left Arrow"
            className="carouselArrowImage carouselLeftArrowImage"
            onClick={handlePrev}
          />
        )}
        {images.length > 0 ? (
          <img src={images[currentImageIndex]} alt="carousel" className="carouselImage" />
        ) : (
          <p>No images available</p>
        )}
        {images.length > 1 && (
          <img
            src={ComponentImageSources.rightArrow}
            alt="Right Arrow"
            className="carouselArrowImage carouselRightArrowImage"
            onClick={handleNext}
          />
        )}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  imageSources: PropTypes.object,
  hasSplitLayout: PropTypes.bool,
  carouselTitle: PropTypes.string
};

Carousel.defaultProps = {
  imageSources: {},
  hasSplitLayout: false,
  carouselTitle: ''
};

export default Carousel;
