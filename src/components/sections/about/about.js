import React from "react"

import SectionGradientHeader from "../../ui/section-gradient-header/section-gradient-header"
import SectionGradientFooter from "../../ui/section-gradient-footer/section-gradient-footer"

import TitleTextBlock from "./title-text-block/title-text-block"

import "./about.scss"

const about = () => {
    return (
        <div className="about" id="about">
            <SectionGradientHeader />
            <h1>About Me</h1>
            <div className="about_content">
                <TitleTextBlock 
                    title="Past" 
                    text="this is some random text which has to be relatively long so I can see how I should style it best... blah blah blah, something something something. I think this might be long enough" />
                <TitleTextBlock 
                    title="Present" 
                    text="this is some random text which has to be relatively long so I can see how I should style it best... blah blah blah, something something something. I think this might be long enough" />
                <TitleTextBlock 
                    title="Future" 
                    text="this is some random text which has to be relatively long so I can see how I should style it best... blah blah blah, something something something. I think this might be long enough" />
            </div>
            <SectionGradientFooter />
        </div>
    )
}

export default about