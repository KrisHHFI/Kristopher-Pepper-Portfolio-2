import React from 'react';
import { BandImageSources, BWPortraitImageSources, ColourPortraitSources, CityscapeImage } from '../../Constants/ImageSources';
import PageItem from '../PageItem';

export default function About() {

    return (
        <div class="About-Container">
            <PageItem
                imageSources={BWPortraitImageSources}
                PageItemTitle={"BW PORTRAITS"}
            />
            <PageItem
                imageSources={ColourPortraitSources}
                PageItemTitle={"COLOUR PORTRAITS"}
            />
            <PageItem
                imageSources={BandImageSources}
                PageItemTitle={"BAND PORTRAITS"}
            />
            <PageItem
                PageItemTitle={"BACKGROUND"}
                noArrows={true}
                text={`I was lucky to have the opportunity to go backpacking when I was 19 years old. Whilst travelling down the East Coast of Australia, I took snapshots on my phone. I found myself slowly trying to improve the composition and take better photos. This is where I discovered an interest in photography.
        
From 2016 to 2018, I studied photography in London. On the side, I was working as a waiter and photographing walking tours. I found myself gravitating towards head shots and portraits, because I liked meeting new people and breaking the ice.
        
cat
            `}
                textTitle={"Studies"}
            />
        </div>
    );
}
