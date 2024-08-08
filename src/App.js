import React, { useState } from 'react';
// Stylesheets
import './StyleSheets/Common.css';
import './StyleSheets/Styling.css';
import './StyleSheets/Content.css';
import './StyleSheets/Products.css';
import './StyleSheets/About.css';
import './StyleSheets/Contact.css';
// Components
import Navigation from './Components/Navigation';
import Coding from './Components/Coding/CodingPage';
import Photography from './Components/Photography/PhotographyPage';
import About from './Components/About/About';

function App() {
  const [activeLink, setActiveLink] = useState('Coding');

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const renderContent = () => {
    switch (activeLink) {
      case 'Coding':
        return <Coding />;
      case 'Photography':
        return <Photography />;
      case 'About':
        return <About />;
      default:
        return <Coding />;
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