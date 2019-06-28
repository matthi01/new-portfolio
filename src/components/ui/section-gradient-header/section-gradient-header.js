import React from "react"

import "./section-gradient-header.scss"

const sectionGradientHeader = () => {
    return (
        <div style={{ zIndex: "-1" }}>
            <div className="section-gradient-header_divider"></div>
            <div className="section-gradient-header_gradient"></div>
        </div>
    )
}

export default sectionGradientHeader