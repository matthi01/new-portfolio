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
                    text="this is some random text which has to be relatively long so I can see how I should style it best... blah blah blah, something something something. I think this might be long enough" />
                <TitleTextHorizontal 
                    title="Present" 
                    text="this is some random text which has to be relatively long so I can see how I should style it best... blah blah blah, something something something. I think this might be long enough" />
                <TitleTextHorizontal 
                    title="Future" 
                    text="this is some random text which has to be relatively long so I can see how I should style it best... blah blah blah, something something something. I think this might be long enough" />
                <TitleTextVertical 
                    title="Interests" 
                    text="this is some random text which has to be relatively long so I can see how I should style it best... blah blah blah, something something something. I think this might be long enough" />
            </div>
        </div>
    )
}

export default about