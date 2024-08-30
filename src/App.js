import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import { AboutPageContent, CodingPageContent, PhotographyPageContent } from './Constants/PageContent.js';
import SocialIcons from './Components/SocialIcons';

function App() {
  const [activeLink, setActiveLink] = useState('Coding');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Trigger loading state
    setLoading(true);

    // Set the document title based on the active link
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

    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second delay

    // Clean up the timer
    return () => clearTimeout(timer);
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
    <div className="Wrapper" style={{ fontFamily: 'Arial, sans-serif' }}>
      <Navigation activeLink={activeLink} onLinkClick={handleLinkClick} />
      <div className="Content-Container">
        {loading ? (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: "100%",
          }}>
            Loading...
          </div>
        ) : (
          renderContent()
        )}
      </div>
      <div className="Page-Social-Icon-Container">
        <SocialIcons />
      </div>
    </div>
  );
}

export default App;
