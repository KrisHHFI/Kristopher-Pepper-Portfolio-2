import React from 'react';
import '../App.css';
import { SocialIconImageSources } from '../Constants/ImageSources';
import { MobileNavSocialIconImageSources } from '../Constants/ImageSources';

const SocialIcons = ({ mobileNav = false }) => {
  return (
    <div>
      {mobileNav ? (
        <div className="Mobile-Nav-Social-Icon-Container">
          {MobileNavSocialIconImageSources.map((icon, index) => (
            <a key={index} href={icon.href} target="_blank" rel="noopener noreferrer">
              <img
                src={icon.src}
                alt={icon.alt}
                className="socialIcon"
              />
            </a>
          ))}
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default SocialIcons;
