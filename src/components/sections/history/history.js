import React from "react"
import Timeline from "./timeline/timeline"
import SectionGradientHeader from "../../ui/section-gradient-header/section-gradient-header"
import "./history.scss"

const history = () => {

    const arrHistoryBullets = [
        {
            title: "Camosun",
            date: "2012",
            description: "Diploma in Computer Systems Technology"
        }, {
            title: "Royal Roads",
            date: "2012",
            description: "Co-op working with PHP to create search algorithms / first introduction to Drupal... it wasn't great",
        }, {
            title: "Fast Enterprises",
            date: "2012 - 2018",
            description: "Team Lead for eTaxBC, developer for discovery, audit, and data warehousing",
        }, {
            title: "Blockstream",
            date: "2018 - present",
            description: "Web Developer / Junior iOS Developer",
        }
    ]

    return (
        <div className="history" id="history">
            <SectionGradientHeader />
            <h1>History</h1>
            <Timeline bullets={ arrHistoryBullets } />

        </div>
    )
}

export default history