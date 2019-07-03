import React from "react"
import SectionGradientHeader from "../../ui/section-gradient-header/section-gradient-header"
import TitleTextHorizontal from "./title-text-horizontal/title-text-horizontal"
import TitleTextVertical from "./title-text-vertical/title-text-vertical"

import "./about.scss"

const about = () => {
    return (
        <div className="about" id="about">
            <SectionGradientHeader />
            <h1>About Me</h1>
            <div className="about_content">
                <TitleTextHorizontal 
                    title="Past" 
                    text="After graduating from Camosun, I started working for Fast Enterprises as an Implementation Consultant on tax software implementations. I got some good experience, but as the company grew, I grew into more of a consultant / business analyst role. After 6 years I realized I needed to make a change or risk my development skills fading. My interest in blockchain and cryptocurrencies led me to Blockstream." />
                <TitleTextHorizontal 
                    title="Present" 
                    text="Consultant in recovery. Currently working at Blockstream as a web developer and junior iOS developer. Always looking for opportunities to expand my skillset." />
                <TitleTextHorizontal 
                    title="Future" 
                    text="Going forward I will be working on expanding my skillset in both front-end and back-end development as well as mobile development for iOS. I will continue on side projects involving blockchain development and will be diving into the world of machine learning." />
                <TitleTextVertical 
                    title="Interests" 
                    text="The research topics I am most interested in lately revolve around climate change, reneable energy, and emerging technologies such as blockchain, cryptocurrencies, machine learning, and the ever changing world of development in general. In my free time I like to work on side projects, and work on online courses to expose myself to new technologies. " />
            </div>
        </div>
    )
}

export default about