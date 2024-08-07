import React, { useState } from 'react';
// Stylesheets
import './StyleSheets/Common.css';
import './StyleSheets/Header.css';
import './StyleSheets/Content.css';
import './StyleSheets/Products.css';
import './StyleSheets/About.css';
import './StyleSheets/Contact.css';
// Components
import Header from './Components/Header';
import Products from './Components/Products/Products';
import About from './Components//About/About';
import Contact from './Components/Contact';

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
      <Header activeLink={activeLink} onLinkClick={handleLinkClick} />
      <div className="Content-Container">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;