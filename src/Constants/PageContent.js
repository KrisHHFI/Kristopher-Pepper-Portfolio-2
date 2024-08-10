import React from 'react';
import PageItem from '../Components/PageItem';
import { BandImageSources, BWPortraitImageSources, ColourPortraitSources, TicTacFarmImage, WeatherAppImage } from '../Constants/ImageSources';

export const AboutPageContent = () => {
    return (
        <>
            <div className="Page-Container">
                <PageItem
                    PageItemTitle={"BACKGROUND"}
                    noArrows={true}
                    textSections={[
                        {
                            title: "Photography",
                            text: `I was lucky to have the opportunity to go backpacking when I was 19 years old. Whilst travelling down the East Coast of Australia, I took snapshots on my phone. I found myself slowly trying to improve the composition and take better photos. This is where I discovered an interest in photography.\n\nFrom 2016 to 2018, I studied photography in London. On the side, I was working as a waiter and photographing walking tours. I found myself gravitating towards head shots and portraits, because I liked meeting new people and breaking the ice.\n\n`
                        },
                        {
                            title: "Finland",
                            text: `After finishing my studies in London I moved to Finland during the end of 2018. I aimed to become a professional photographer in Helsinki. The photography business was very slow, so I collaborated with models and worked in hospitality.\n\n The photography had been slow for a couple years and then the pandemic happened. It disrupted my work and my photography. During the first lockdown I pivoted away from hospitality to helping people move house. During this time I also discovered coding. I can't remember entirely how/why, but I saw it as a creative outlet, similar to photography.\n\n I then decided to study coding at Haaga-Helia. Once my studies began I had very little time for photography. However, I have now graduated and I once again have time for it. I was able to use it at my previous work (Taika Tech) to photograph their product, which was very enjoyable. In the future I hope to continue shooting and learning new things. I do not see it as a realistic career, but rather a passion project.`
                        }
                    ]}
                />
            </div>
        </>
    );
};

export const CodingPageContent = () => {
    return (
        <>
            <div className="Page-Container">
                <PageItem
                    PageItemTitle={"TIC TAC FARM"}
                    imageSources={TicTacFarmImage}
                    noArrows={true}
                    noItemBottomPadding={true}
                />
                <PageItem
                    hasButton={true}
                    projectURL={"https://github.com/KrisHHFI/Tic-Tac-Farm-Android-App"}
                    noArrows={true}
                    textSections={[
                        {
                            text: `A farm themed Tic-tac-toe game published on the Google Play Store. The game works on both Android and IOS, and it currently has over 2000 unique installs.\n\nTechnologies: CSS, Expo Go, JavaScript, React Native.`
                        },
                    ]}
                />
                {/* Divider */}
                <PageItem
                    PageItemTitle={"REACT WEATHER APP"}
                    imageSources={WeatherAppImage}
                    noArrows={true}
                    noItemBottomPadding={true}
                />
                <PageItem
                    hasButton={true}
                    projectURL={"https://github.com/KrisHHFI/React-Weather-App"}
                    noArrows={true}
                    textSections={[
                        {
                            text: `A browser based weather app. Enables the user to discover the current and forecasted weather, of places around the world.\n\nTechnologies: CSS, TypeScript, React Native, REST API.`
                        },
                    ]}
                />
            </div>
        </>
    );
};

export const PhotographyPageContent = () => {
    return (
        <>
            <div className="Page-Container">
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
            </div>
        </>
    );
};
