import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ComponentImageSources } from '../Constants/ImageSources.js';

const PageItem = ({ imageSources = {}, PageItemTitle, noArrows, textSections = [], noItemBottomPadding }) => {
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
      <div className={`page-Item ${noItemBottomPadding ? 'page-Item-No-Padding' : ''}`}>
        {PageItemTitle && <div className="PageItemTitle">{PageItemTitle}</div>}
        {images.length === 0 && textSections.length > 0 && (
          <>
            <div>
              {textSections.map((section, index) => (
                <div className="page-Item-Text-Box" key={index}>
                  {section.title && <div className="page-Item-Text-Title">{section.title}</div>}
                  {Array.isArray(section.text) ? (
                    section.text.map((text, textIndex) => (
                      <div key={textIndex}>{text}</div>
                    ))
                  ) : (
                    <div>{section.text}</div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
        {!noArrows && images.length > 1 && (
          <img
            src={ComponentImageSources.leftArrow}
            alt="Left Arrow"
            className="carouselArrowImage carouselLeftArrowImage"
            onClick={handlePrev}
          />
        )}
        {images.length > 0 && (
          <img src={images[currentImageIndex]} alt="carousel" className="carouselImage" />
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
  PageItemTitle: PropTypes.string,
  noArrows: PropTypes.bool,
  noItemBottomPadding: PropTypes.bool,
  textSections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
      ])
    })
  )
};

PageItem.defaultProps = {
  imageSources: {},
  PageItemTitle: '',
  noArrows: false,
  noItemBottomPadding: false,
  textSections: []
};

export default PageItem;
