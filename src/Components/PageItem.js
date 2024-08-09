import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ComponentImageSources } from '../Constants/ImageSources.js';

const PageItem = ({ imageSources = {}, PageItemTitle, noArrows, text, textTitle }) => {
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
        {PageItemTitle && <div className="PageItemTitle">{PageItemTitle}</div>}
        
        {text && (
          <div className="page-Item-Text-Box">
            {textTitle && <div className="page-Item-Text-Title">{textTitle}</div>}
            <div>{text}</div>
          </div>
        )}

        {!noArrows && images.length > 1 && (
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
        {!noArrows && images.length > 1 && (
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

PageItem.propTypes = {
  imageSources: PropTypes.object,
  hasSplitLayout: PropTypes.bool,
  PageItemTitle: PropTypes.string,
  noArrows: PropTypes.bool,
  text: PropTypes.string,
  textTitle: PropTypes.string
};

PageItem.defaultProps = {
  imageSources: {},
  hasSplitLayout: false,
  PageItemTitle: '',
  noArrows: false,
  text: '',
  textTitle: ''
};

export default PageItem;
