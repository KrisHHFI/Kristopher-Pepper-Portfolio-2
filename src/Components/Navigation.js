import React from 'react';
import KPText from '../Images/KP.png';
import PortfolioText from '../Images/Portfolio.png';

export default function Navigation({ activeLink, onLinkClick }) {
    
    return (
        <div className="Navigation-Container">
            <div className="Navigation-Child-1 Navigation-Child">
                <img src={KPText} alt="Company Logo" className="Navigation-KPText" />
            </div>
            <div className="Navigation-Child Navigation-Child-Hidden">
                <img src={PortfolioText} alt="Company Text" className="Navigation-PortfolioText" />
            </div>
            <div className="Navigation-Child-3 Navigation-Child">
                <div className="Navigation-Item-Container">
                    <div className={`Navigation-Child-Item ${activeLink === 'Coding' ? 'Navigation-Child-Item-active' : ''}`}>
                        <a href="#" onClick={() => onLinkClick('Coding')}>Coding</a>
                    </div>
                    <div className={`Navigation-Child-Item ${activeLink === 'Photography' ? 'Navigation-Child-Item-active' : ''}`}>
                        <a href="#" onClick={() => onLinkClick('Photography')}>Photography</a>
                    </div>
                    <div className={`Navigation-Child-Item ${activeLink === 'About' ? 'Navigation-Child-Item-active' : ''}`}>
                        <a href="#" onClick={() => onLinkClick('About')}>About</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
