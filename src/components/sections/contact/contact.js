import React from "react"

import "./contact.scss"
import SectionGradientHeader from "../../ui/section-gradient-header/section-gradient-header"
import SectionGradientFooter from "../../ui/section-gradient-footer/section-gradient-footer"

const contact = () => {
    return (
        <div className="contact">
            <SectionGradientHeader />
            <h1>Contact</h1>
            <SectionGradientFooter />
        </div>
    )
}

export default contact