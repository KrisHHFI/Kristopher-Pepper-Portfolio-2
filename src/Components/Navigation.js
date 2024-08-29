import React from 'react';
import { NavigationImageSources } from '../Constants/ImageSources';
import SocialIcons from './SocialIcons';

export default function Navigation({ activeLink, onLinkClick }) {
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
                        <a href="#" onClick={() => onLinkClick('Coding')}>Coding</a>
                    </div>
                    <div className={`Navigation-Child-Item ${activeLink === 'Photography' ? 'Navigation-Child-Item-active' : ''}`}>
                        <a href="#" onClick={() => onLinkClick('Photography')}>Photos</a>
                    </div>
                    <div className={`Navigation-Child-Item ${activeLink === 'About' ? 'Navigation-Child-Item-active' : ''}`}>
                        <a href="#" onClick={() => onLinkClick('About')}>About</a>
                    </div>
                </div>
            </div>
            <div className="Navigation-Social-Icon-Container">
                <SocialIcons />
            </div>

            <img src={NavigationImageSources.menuIcon} alt="Menu icon" className="Menu-Icon" />

            <div className="Mobile-Nav-Menu Hidden-By-Default">
                <div className="Mobile-Nav-Links-Container">
                    <div className={`Mobile-Nav-Link`}>
                        <a href="#" onClick={() => onLinkClick('Coding')}>Coding</a>
                    </div>
                    <div className={`Mobile-Nav-Link`}>
                        <a href="#" onClick={() => onLinkClick('Photography')}>Photos</a>
                    </div>
                    <div className={`Mobile-Nav-Link`}>
                        <a href="#" onClick={() => onLinkClick('About')}>About</a>
                    </div>
                </div>
            </div>
        </div>
    );
}