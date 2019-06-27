import React from "react"

import "./section-gradient-header.scss"

const sectionGradientHeader = () => {
    return (
        <div style={{ zIndex: "-1" }}>
            <div className="divider"></div>
            <div className="gradient"></div>
        </div>
    )
}

export default sectionGradientHeader