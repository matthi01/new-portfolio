import React from "react"

import Timeline from "./timeline/timeline"
import SectionGradientHeader from "../../ui/section-gradient-header/section-gradient-header"
import "./history.scss"

const history = () => {

    const arrHistoryBullets = [
        {
            title: "Camosun",
            date: "2012",
            description: "add some wording here"
        }, {
            title: "Royal Roads",
            date: "2012",
            description: "add some wording here",
        }, {
            title: "Fast Enterprises",
            date: "2012 - 2018",
            description: "add some wording here",
        }, {
            title: "Blockstream",
            date: "2018 - present",
            description: "add some wording here",
        }
    ]

    return (
        <div className="history">
            <SectionGradientHeader />
            <h1>This is the History component</h1>
            <Timeline bullets={ arrHistoryBullets } />

        </div>
    )
}

export default history