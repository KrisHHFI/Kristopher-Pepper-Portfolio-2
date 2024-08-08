import React from 'react';
import AboutItem from './About-Item-1';
import OfficeInterior from '../../Images/About/OfficeInterior.png';
import Who from '../../Images/About/Who.png';

import { BandImageSources, BWPortraitImageSources, ColourPortraitSources, CityscapeImage } from '../../Constants/ImageSources';
import Carousel from '../Carousel';


export default function About() {
    const titleText1 = `Tempor incididunt ut labore!`;
    const text1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua.`;

    return (
        <div class="About-Container">
            <Carousel
                imageSources={BWPortraitImageSources}
                carouselTitle={"BW PORTRAITS"}
            />
            <Carousel
                imageSources={ColourPortraitSources}
                carouselTitle={"COLOUR PORTRAITS"}
            />
            <Carousel
                imageSources={BandImageSources}
                carouselTitle={"BAND PORTRAITS"}
            />

            <Carousel
                imageSources={CityscapeImage}
                carouselTitle={"BACKGROUND"}
                noArrows={true}
            />
            <AboutItem
                coverImage={OfficeInterior}
                titleImage={Who}
                titleText={titleText1}
                text={text1}
            />
        </div>
    );
}
