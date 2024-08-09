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
                imageSources={CityscapeImage}
                PageItemTitle={"BACKGROUND"}
                noArrows={true}
                text={'From 2016 to 2018 I studied photography in London. On the side, I was working as a waiter and photographing walking tours.'
                }
                textTitle={"Studies"}
            />
        </div>
    );
}
