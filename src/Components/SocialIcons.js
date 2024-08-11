import React from 'react';
import '../App.css';
import { SocialIconImageSources } from '../Constants/ImageSources';

const SocialIcons = () => {
  return (
    <div className="socialIconsContainer">
      {SocialIconImageSources.map((icon, index) => (
        <a key={index} href={icon.href} target="_blank" rel="noopener noreferrer">
          <img
            src={icon.src}
            alt={icon.alt}
            className="socialIcon"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
