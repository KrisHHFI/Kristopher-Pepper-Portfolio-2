import React from 'react';
import CompanyLogo from '../Images/Company-Logo.png';
import CompanyText from '../Images/Company-Text.png';

export default function Header({ activeLink, onLinkClick }) {
    
    return (
        <div className="Header-Container">
            <div className="Header-Item-1 Header-Item">
                <img src={CompanyLogo} alt="Company Logo" className="CompanyLogo" />
            </div>
            <div className="Header-Item hidden">
                <img src={CompanyText} alt="Company Text" className="CompanyText" />
            </div>
            <div className="Header-Item-3 Header-Item">
                <div className="Nav-Bar">
                    <div className={`Nav-Item ${activeLink === 'Products' ? 'active' : ''}`}>
                        <a href="#" onClick={() => onLinkClick('Products')}>Products</a>
                    </div>
                    <div className={`Nav-Item ${activeLink === 'About' ? 'active' : ''}`}>
                        <a href="#" onClick={() => onLinkClick('About')}>About</a>
                    </div>
                    <div className={`Nav-Item ${activeLink === 'Contact' ? 'active' : ''}`}>
                        <a href="#" onClick={() => onLinkClick('Contact')}>Contact</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
