import React from "react"

import SectionGradientHeader from "../../ui/section-gradient-header/section-gradient-header"
import SectionGradientFooter from "../../ui/section-gradient-footer/section-gradient-footer"

import "./about.scss"

const about = () => {
    return (
        <div className="about" id="about">
            <SectionGradientHeader />
            <h1>About</h1>
            <SectionGradientFooter />
        </div>
    )
}

export default about