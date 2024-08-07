import React from 'react';
import AboutItem from './About-Item-1';
import AboutItem2 from './About-Item-2';
import AboutItem3 from './About-Item-3';
import OfficeInterior from '../../Images/About/OfficeInterior.png';
import ConstructionSite from '../../Images/About/ConstructionSite.png';
import HelsinkiSkyline from '../../Images/About/HelsinkiSkyline.jpg';
import Who from '../../Images/About/Who.png';
import WhatWeDo from '../../Images/About/WhatWeDo.png';
import Office from '../../Images/About/Office.png';
import OurStory from '../../Images/About/OurStory.png';

export default function About() {
    const titleText1 = `Tempor incididunt ut labore!`;
    const text1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua.`;
    const titleText2 = `Cillum dolore eu fugiat!`;
    const text2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;
    const text3 = `${text2} ${text1}`;

    const AboutItem2Number = `8`;
    const AboutItem2Text = `Years`;
    const AboutItem2Number2 = `14`;
    const AboutItem2Text2 = `Countries`;
    const AboutItem2Number3 = `40,000`;
    const AboutItem2Text3 = `Customers`;
    const AboutItem2Number4 = `16`;
    const AboutItem2Text4 = `Awards`;

    return (
        <div class="About-Container">
            <AboutItem
                coverImage={OfficeInterior}
                titleImage={Who}
                titleText={titleText1}
                text={text1}
            />
            <AboutItem
                coverImage={ConstructionSite}
                titleImage={WhatWeDo}
                titleText={titleText2}
                text={text2}
            />
            <AboutItem
                coverImage={HelsinkiSkyline}
                titleImage={Office}
                titleText={titleText1}
                text={text1}
            />
            <div class="About-Item About-Item-2-Container">
                <img src={OurStory} alt="Our Story Title" className="AboutImageTitle" />
                <div class = "About-Stats-Container">
                    <AboutItem2
                        AboutItem2Number={AboutItem2Number}
                        AboutItem2Text={AboutItem2Text}
                    />
                    <AboutItem2
                        AboutItem2Number={AboutItem2Number2}
                        AboutItem2Text={AboutItem2Text2}
                    />
                    <AboutItem2
                        AboutItem2Number={AboutItem2Number3}
                        AboutItem2Text={AboutItem2Text3}
                    />
                    <AboutItem2
                        AboutItem2Number={AboutItem2Number4}
                        AboutItem2Text={AboutItem2Text4}
                    />
                </div>
            </div>
            <AboutItem3
                AboutItem3Title={titleText1}
                AboutItem3Text={text3}
            />
        </div>
    );
}
