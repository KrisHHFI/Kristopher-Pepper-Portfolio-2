import React from 'react';

export default function Product({ imageSrc, imageLogoSrc, text }) {
    return (
        <div className="Product">
            <img src={imageSrc} alt="Product Image" className="CoverImage" />
            <div className="Product-Section Product-Section-1">
                <img src={imageLogoSrc} alt="Product Image Logo" className="CoverImageLogo" />
            </div>
            <div className="Product-Section Product-Section-2">
                <div className="Product-Section-Divider">
                    <div className="Product-Text">{text}</div>
                </div>
                <div className="Product-Section-Divider">
                    <a className="Product-Link" href="#">Lorem</a>
                </div>
            </div>
        </div>
    );
}
