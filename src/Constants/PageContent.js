import React from 'react';
import PageItem from '../Components/PageItem';
import { BandImageSources, BWPortraitImageSources, CppPasswordGenerator, ColourPortraitSources, ClockProjectImage, StockPlotterPro, TicTacFarmImage, WeatherAppImage, ProjectPorfolio, NextjsTailwindSite } from '../Constants/ImageSources';

export const AboutPageContent = () => {
    return (
        <>
            <div className="Page-Container">
                <PageItem
                bottomDividerIsWhite={true}
                    hasBottomDivider={true}
                    PageItemTitle={"BACKGROUND"}
                    textBoxTopPadding={true}
                    noArrows={true}
                    textSections={[
                        {
                            title: "Photography",
                            text: `My name's Kris and I'm from the UK. I was lucky to have the opportunity to go backpacking when I was 19 years old. While travelling down the East Coast of Australia, I took snapshots on my phone. I found myself slowly trying to improve the composition and take better photos. This is where I discovered an interest in photography.\n\nFrom 2016 to 2018, I studied photography in London. On the side, I was working as a waiter and photographing walking tours. I found myself gravitating towards headshots and portraits, because I liked meeting new people and breaking the ice.\n\n`
                        },
                    ]}
                />
                <PageItem
                    hasBottomDivider={true}
                    noArrows={true}
                    textSections={[
                        {
                            title: "Finland",
                            text: `After finishing my studies in London I moved to Finland during the end of 2018. I aimed to become a professional photographer in Helsinki. The photography business was very slow, so I collaborated with models and worked in hospitality.\n\nThe photography had been slow for a couple years and then the pandemic happened. It disrupted my work and my photography. During the first lockdown I pivoted away from hospitality to helping people move house. During this time I also discovered coding. I can't remember entirely how/why, but I saw it as a creative outlet, similar to photography.`
                        },
                    ]}
                />
                <PageItem
                    noArrows={true}
                    textSections={[
                        {
                            title: "Coding",
                            text: `I then decided to study coding at Haaga-Helia. During my studies and with personal projects, I naturally pursued front end coding. I think, due to the aesthetic nature of front end development. However, I am interested in back end development and I have undertaken back end courses and projects.\n\nFor my internship I worked at the Game Development World Championship (GDWC) as a web developer. There I worked mainly on there website updating/renewing content. After graduating I worked at Taika Tech as a software developer. There I made a cross platform mobile application for customers to configure their Taika Ring. In the near future I aim to continue building my skills and experience as a developer.`
                        },
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
                    PageItemTitle={"Tic Tac Farm"}
                    projectURL={"https://github.com/KrisHHFI/Tic-Tac-Farm-Android-App"}
                    imageSources={TicTacFarmImage}
                    noArrows={true}
                    noItemBottomPadding={true}
                />
                <PageItem
                    hasBottomDivider={true}
                    noArrows={true}
                    textSections={[
                        {
                            text: `A farm themed Tic-tac-toe game published on the Google Play Store. The game works on both Android and IOS, and it currently has over 2000 unique installs.\n\nTechnologies: CSS, Expo Go, JavaScript, React Native.`
                        },
                    ]}
                />
                {/* Divider */}
                <PageItem
                    PageItemTitle={"React Weather App"}
                    projectURL={"https://github.com/KrisHHFI/React-Weather-App"}
                    imageSources={WeatherAppImage}
                    noArrows={true}
                    noItemBottomPadding={true}
                />
                <PageItem
                    hasBottomDivider={true}
                    noArrows={true}
                    textSections={[
                        {
                            text: `A browser based weather app. Enables the user to discover the current and forecasted weather, of places around the world.\n\nTechnologies: CSS, TypeScript, React Native, REST API.`
                        },
                    ]}
                />
                {/* Divider */}
                <PageItem
                    PageItemTitle={"Clock App"}
                    projectURL={"https://github.com/KrisHHFI/NextJS-Clock-App"}
                    imageSources={ClockProjectImage}
                    noArrows={true}
                    noItemBottomPadding={true}
                />
                <PageItem
                    hasBottomDivider={true}
                    noArrows={true}
                    textSections={[
                        {
                            text: `A browser based clock app. Within the Next.js framework I built ontop of a previous clock project. The clock can be clicked, which reveals the working gears beneath. Works with all screen dimensions.\n\nTechnologies: CSS, HTML, JavaScript, Next.js.`
                        },
                    ]}
                />
                {/* Divider */}
                <PageItem
                    PageItemTitle={"NextJS Tailwind CSS Site"}
                    projectURL={"https://github.com/KrisHHFI/NextJS-Tailwind-CSS-Site"}
                    imageSources={NextjsTailwindSite}
                    noArrows={true}
                    noItemBottomPadding={true}
                />
                <PageItem
                    hasBottomDivider={true}
                    noArrows={true}
                    textSections={[
                        {
                            text: `A light-hearted browser app.\n\nTechnologies: Next.js, React, Tailwind CSS, TypeScript.`
                        },
                    ]}
                />
                {/* Divider */}
                <PageItem
                    PageItemTitle={"Stockplotter Pro"}
                    projectURL={"https://github.com/KrisHHFI/Stockplotter-Pro"}
                    imageSources={StockPlotterPro}
                    noArrows={true}
                    noItemBottomPadding={true}
                />
                <PageItem
                    hasBottomDivider={true}
                    noArrows={true}
                    textSections={[
                        {
                            text: `My final university project where I made a mobile app which enables the user to find and save listed US companies. Uses Polygon.io to get live stock data. Also, features a cork board, theme and language options.\n\nTechnologies: CSS, Expo Go, JavaScript, Polygon.io, React Native.`
                        },
                    ]}
                />
                {/* Divider */}
                <PageItem
                    PageItemTitle={"CPP Password Generator 3"}
                    projectURL={"https://github.com/KrisHHFI/CPP-Password-Generator-3"}
                    imageSources={CppPasswordGenerator}
                    noArrows={true}
                    noItemBottomPadding={true}
                />
                <PageItem
                    hasBottomDivider={true}
                    noArrows={true}
                    textSections={[
                        {
                            text: `My third iteration of creating a C++ password generator. Features a GUI and generates passwords consisting of characters, letters and symbols.\n\nTechnologies: C++.`
                        },
                    ]}
                />
                {/* Divider */}
                <PageItem
                    PageItemTitle={"This Project"}
                    projectURL={"https://github.com/KrisHHFI/Portfolio"}
                    imageSources={ProjectPorfolio}
                    noArrows={true}
                    noItemBottomPadding={true}
                />
                <PageItem
                    noArrows={true}
                    textSections={[
                        {
                            text: `I made this portfolio website using React and I am hosting it using GitHub Pages.\n\nTechnologies: CSS, JavaScript, React.`
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
                    hasBottomDivider={true}
                    imageSources={BWPortraitImageSources}
                    PageItemTitle={"BW PORTRAITS"}
                />
                <PageItem
                    hasBottomDivider={true}
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
