import React from 'react';

export default function AboutItem3({ AboutItem3Title, AboutItem3Text }) {

    return (
        <div class="About-Item About-Item-3">
            <div class="About-Text-Box About-Item-3-Text-Box">
                <div class="About-Text-Title">
                    {AboutItem3Title}
                </div>
                <div>
                    {AboutItem3Text}
                </div>
            </div>
        </div>
    );
}
