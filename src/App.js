import React, { useState } from 'react';
// Stylesheets
import './StyleSheets/Common.css';
import './StyleSheets/Header.css';
import './StyleSheets/Content.css';
import './StyleSheets/Products.css';
import './StyleSheets/About.css';
import './StyleSheets/Contact.css';
// Components
import Navigation from './Components/Navigation';
import Products from './Components/Coding/Products';
import About from './Components/Photography/About';
import Contact from './Components/About';

function App() {
  const [activeLink, setActiveLink] = useState('Products');

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const renderContent = () => {
    switch (activeLink) {
      case 'Products':
        return <Products />;
      case 'About':
        return <About />;
      case 'Contact':
        return <Contact />;
      default:
        return <Products />;
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