import React from 'react';

export default function AboutItem({ coverImage, titleImage, titleText, text }) {

    return (
        <div class="About-Item">
            <img src={coverImage} alt="Cover image" className="CoverImage" />
            <img src={titleImage} alt="Title Image" className="AboutImageTitle" />
            <div class="About-Text-Box">
                <div class="About-Text-Title">
                    {titleText}
                </div>
                <div>
                    {text}
                </div>
            </div>
        </div>
    );
}
