import React from 'react';
import Product from './Product';
import Product1 from '../../Images/Products/Product-1.jpg';
import Product1Logo from '../../Images/Products/Product-1-Logo.png';
import Product2 from '../../Images/Products/Product-2.jpg';
import Product2Logo from '../../Images/Products/Product-2-Logo.png';
import Product3 from '../../Images/Products/Product-3.jpg';
import Product3Logo from '../../Images/Products/Product-3-Logo.png';
import Product4 from '../../Images/Products/Product-4.jpg';
import Product4Logo from '../../Images/Products/Product-4-Logo.png';
import Product5 from '../../Images/Products/Product-5.jpg';
import Product5Logo from '../../Images/Products/Product-5-Logo.png';
import Product6 from '../../Images/Products/Product-6.jpg';
import Product6Logo from '../../Images/Products/Product-6-Logo.png';

import AboutItem2 from '../Photography/About-Item-2';
import AboutItem3 from '../Photography/About-Item-3';
import OurStory from '../../Images/About/OurStory.png';


export default function Products() {

    const Product1Text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua.`;
    const Product2Text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`;
    const Product3Text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

    const titleText1 = `Tempor incididunt ut labore!`;
    const text1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua.`;
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
        <div class="Product-Container">
            <div className="Product-Item">
                <Product
                    imageSrc={Product1}// Credit to Mark Stebnicki, Pexels
                    imageLogoSrc={Product1Logo}
                    text={Product1Text}
                />
            </div>
            <div class="Product-Item">
                <Product
                    imageSrc={Product2}// Credit to Holger Schué, Pexels
                    imageLogoSrc={Product2Logo}
                    text={Product2Text}
                />
            </div>
            <div class="Product-Item">
                <Product
                    imageSrc={Product3}// Credit to Quang Nguyen Vinh, Pexels
                    imageLogoSrc={Product3Logo}
                    text={Product3Text}
                />
            </div>
            <div class="Product-Item">
                <Product
                    imageSrc={Product4}// Credit to Claudio, Pexels
                    imageLogoSrc={Product4Logo}
                    text={Product1Text}
                />
            </div>
            <div class="Product-Item">
                <Product
                    imageSrc={Product5}// Credit to Ron Lach, Pexels
                    imageLogoSrc={Product5Logo}
                    text={Product2Text}
                />
            </div>
            <div class="Product-Item">
                <Product
                    imageSrc={Product6}// Credit to Emiliano Arano, Pexels
                    imageLogoSrc={Product6Logo}
                    text={Product3Text}
                />
            </div>
            <div class="About-Item About-Item-2-Container">
                <img src={OurStory} alt="Our Story Title" className="AboutImageTitle" />
                <div class="About-Stats-Container">
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
