import React, { useState, useEffect } from 'react';
import { NavigationImageSources } from '../Constants/ImageSources';
import SocialIcons from './SocialIcons';

export default function Navigation({ activeLink, onLinkClick }) {
    // State to manage the visibility of the mobile menu
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    // Function to handle link clicks and hide the mobile menu
    const handleLinkClick = (link) => {
        onLinkClick(link); // Trigger the parent onLinkClick function
        setIsMenuVisible(false); // Hide the mobile menu
    };

    // Effect to hide the mobile menu if the screen width exceeds a certain value
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 900) {
                setIsMenuVisible(false);
            }
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="Navigation-Container">
            <div className="Navigation-Child-1 Navigation-Child">
                <img src={NavigationImageSources.kpBlack} alt="Company Logo" className="Navigation-KPText Hidden-In-Mobile-View" />
                <img src={NavigationImageSources.kpWhite} alt="Company Logo" className="Mobile-Navigation-Logo Hidden-By-Default" />
            </div>
            <div className="Navigation-Child Navigation-Child-Hidden">
                <img src={NavigationImageSources.portfolioText} alt="Company Text" className="Navigation-PortfolioText" />
            </div>
            <div className="Navigation-Child-3 Navigation-Child Navigation-Child-Hidden">
                <div className="Navigation-Item-Container">
                    <div className={`Navigation-Child-Item ${activeLink === 'Coding' ? 'Navigation-Child-Item-active' : ''}`}>
                        <a href="#" onClick={() => handleLinkClick('Coding')}>Coding</a>
                    </div>
                    <div className={`Navigation-Child-Item ${activeLink === 'Photography' ? 'Navigation-Child-Item-active' : ''}`}>
                        <a href="#" onClick={() => handleLinkClick('Photography')}>Photos</a>
                    </div>
                    <div className={`Navigation-Child-Item ${activeLink === 'About' ? 'Navigation-Child-Item-active' : ''}`}>
                        <a href="#" onClick={() => handleLinkClick('About')}>About</a>
                    </div>
                </div>
            </div>
            <div className="Navigation-Social-Icon-Container Hidden-In-Mobile-View">
                <SocialIcons />
            </div>
            <img
                src={NavigationImageSources.menuIcon}
                alt="Menu icon"
                className="Menu-Icon"
                onClick={() => setIsMenuVisible(!isMenuVisible)}
            />
            <div
                className="Mobile-Nav-Menu Hidden-By-Default"
                style={{ display: isMenuVisible ? 'block' : 'none' }}
            >
                <div className="Mobile-Nav-Links-Container">
                    <div className="Mobile-Nav-Link">
                        <a href="#" onClick={() => handleLinkClick('Coding')}>Coding</a>
                    </div>
                    <div className="Mobile-Nav-Link">
                        <a href="#" onClick={() => handleLinkClick('Photography')}>Photos</a>
                    </div>
                    <div className="Mobile-Nav-Link">
                        <a href="#" onClick={() => handleLinkClick('About')}>About</a>
                    </div>
                </div>
                <SocialIcons mobileNav={true} />
            </div>
        </div>
    );
}
