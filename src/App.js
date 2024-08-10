import React, { useState } from 'react';
// Stylesheets
import './StyleSheets/Common.css';
import './StyleSheets/Styling.css';
import './StyleSheets/Content.css';
import './StyleSheets/Products.css';
import './StyleSheets/About.css';
import './StyleSheets/Contact.css';
import Navigation from './Components/Navigation';

import { AboutPageContent, CodingPageContent, PhotographyPageContent } from './Constants/PageContent.js';

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
    </div>
  );
}

export default App;