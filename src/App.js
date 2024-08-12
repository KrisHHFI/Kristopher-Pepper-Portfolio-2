import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import { AboutPageContent, CodingPageContent, PhotographyPageContent } from './Constants/PageContent.js';
import SocialIcons from './Components/SocialIcons';

function App() {
  const [activeLink, setActiveLink] = useState('Coding');

  useEffect(() => {
    switch (activeLink) {
      case 'Coding':
        document.title = 'Coding - My Portfolio';
        break;
      case 'Photography':
        document.title = 'Photography - My Portfolio';
        break;
      case 'About':
        document.title = 'About - My Portfolio';
        break;
      default:
        document.title = 'React App';
    }
  }, [activeLink]);

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
