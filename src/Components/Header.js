import React from 'react';
import KPText from '../Images/KP.png';
import PortfolioText from '../Images/Portfolio.png';

export default function Header({ activeLink, onLinkClick }) {
    
    return (
        <div className="Header-Container">
            <div className="Header-Item-1 Header-Item">
                <img src={KPText} alt="Company Logo" className="KPText" />
            </div>
            <div className="Header-Item hidden">
                <img src={PortfolioText} alt="Company Text" className="PortfolioText" />
            </div>
            <div className="Header-Item-3 Header-Item">
                <div className="Nav-Bar">
                    <div className={`Nav-Item ${activeLink === 'Products' ? 'active' : ''}`}>
                        <a href="#" onClick={() => onLinkClick('Products')}>Coding</a>
                    </div>
                    <div className={`Nav-Item ${activeLink === 'About' ? 'active' : ''}`}>
                        <a href="#" onClick={() => onLinkClick('About')}>Photography</a>
                    </div>
                    <div className={`Nav-Item ${activeLink === 'Contact' ? 'active' : ''}`}>
                        <a href="#" onClick={() => onLinkClick('Contact')}>About</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
