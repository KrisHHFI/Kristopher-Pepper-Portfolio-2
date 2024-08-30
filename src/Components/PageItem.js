import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ComponentImageSources } from '../Constants/ImageSources.js';

const PageItem = ({
  imageSources = {},
  PageItemTitle,
  noArrows,
  textSections = [],
  projectURL,
  textBoxTopPadding,
  hasBottomDivider,
  bottomDividerIsWhite
}) => {
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
      <div className={`page-Item`}>
        {PageItemTitle && (
          <div className="PageItemTitleContainer">
            {PageItemTitle}
            {projectURL && (
              <a href={projectURL} target="_blank" rel="noopener noreferrer">
                <img
                  src={ComponentImageSources.link}
                  alt="Link icon"
                  className="link-Icon"
                />
              </a>
            )}
          </div>
        )}
        {images.length === 0 && textSections.length > 0 &&
          textSections.map((section, index) => (
            <div
              className={`page-Item-Text-Box ${index === 0 && textBoxTopPadding ? 'page-Item-Top-Padding' : ''}`}
              key={index}
            >
              {section.title && <div>{section.title}</div>}
              {Array.isArray(section.text) ? (
                section.text.map((text, textIndex) => (
                  <div key={textIndex}>{text}</div>
                ))
              ) : (
                <div>{section.text}</div>
              )}
            </div>
          ))
        }
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
        {hasBottomDivider && (
          <div className={`page-Item-Bottom-Divider ${bottomDividerIsWhite ? 'white-Divider' : ''}`}></div>
        )}
      </div>
    </div>
  );
};

PageItem.propTypes = {
  imageSources: PropTypes.object,
  PageItemTitle: PropTypes.string,
  noArrows: PropTypes.bool,
  projectURL: PropTypes.string,
  textSections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
      ])
    })
  ),
  textBoxTopPadding: PropTypes.bool,
  hasBottomDivider: PropTypes.bool,
  bottomDividerIsWhite: PropTypes.bool
};

PageItem.defaultProps = {
  imageSources: {},
  PageItemTitle: '',
  noArrows: false,
  projectURL: '',
  textSections: [],
  textBoxTopPadding: false,
  hasBottomDivider: false,
  bottomDividerIsWhite: false
};

export default PageItem;
