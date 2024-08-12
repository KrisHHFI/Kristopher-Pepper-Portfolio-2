import React, { useState } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import { AboutPageContent, CodingPageContent, PhotographyPageContent } from './Constants/PageContent.js';
import SocialIcons from './Components/SocialIcons';

function App() {
  const [activeLink, setActiveLink] = useState('Coding');

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const renderContent = () => {
    switch (activeLink) {
      case 'Coding':
        return <CodingPageContent />;
      case 'Photography':
        return <PhotographyPageContent />;
      case 'About':
        return <AboutPageContent />;
      default:
        return <CodingPageContent />;
    }
  };

  return (
    <div className="Wrapper">
      <Navigation activeLink={activeLink} onLinkClick={handleLinkClick} />
      <div className="Content-Container">
        {renderContent()}
      </div>
      <div className="Page-Social-Icon-Container">
        <SocialIcons />
      </div>
    </div>
  );
}

export default App;