import React from "react"

import "./projects.scss"
import Project from "./project/project"
import SectionGradientFooter from "../../ui/section-gradient-footer/section-gradient-footer"
import SectionGradientHeader from "../../ui/section-gradient-header/section-gradient-header"

import imgBlockstream from "../../../images/blockstream.png"
import imgBlockExplorer from "../../../images/block-explorer.png"
import imgETax from "../../../images/etax.png"
import imgBlockstreamStore from "../../../images/blockstream-store.png"
import imgSatellite from "../../../images/satellite.png"
import imgVolkfi from "../../../images/volkfi.png"
import imgGreen from "../../../images/green.png"
import imgGentax from "../../../images/gentax.png"
import imgAmazon from "../../../images/amazon.png"

const projects = () => {

    const arrProjects = [
        {
            title: "blockstream.com",
            image: imgBlockstream,
            description: "Main Blockstream landing page. Built with Jekyll from the ground up.",
            link: "https://www.blockstream.com",
            alt: "blockstream.com"
        },
        {
            title: "blockstream.info",
            image: imgBlockExplorer,
            description: "Blockstream block explorer, build using react.",
            link: "https://www.blockstream.info",
            alt: "blockstream.info"
        },
        {
            title: "store.blockstream.com",
            image: imgBlockstreamStore,
            description: "Blockstream store using lightning payment technology.",
            link: "https://store.blockstream.com",
            alt: "store.blockstream.com"
        },
        {
            title: "volkfi.com",
            image: imgVolkfi,
            description: "Volkfi landing page.",
            link: "https://www.volkfi.com",
            alt: "volkfi.com"
        },
        {
            title: "Blockstream Green (iOS)",
            image: imgGreen,
            description: "Blockstream Green iOS wallet app.",
            link: "https://www.blockstream.com/green",
            alt: "Blockstream Green (iOS)"
        }, 
        {
            title: "Blockstream Satellite Transmissions App",
            image: imgSatellite,
            description: "Blockstream Satellite transmissions app",
            link: "https://www.blockstream.com/satellite/",
            alt: "Blockstream Satellite Transmissions App"
        },
        {
            title: "eTaxBC",
            image: imgETax,
            description: "British Columbia's online tax portal.",
            link: "https://www.etax.gov.bc.ca/btp/eservices/_/",
            alt: "eTaxBC"
        },
        {
            title: "Gentax",
            image: imgGentax,
            description: "Back end system for British Columbia's tax administration software",
            link: "https://fastenterprises.com",
            alt: "Gentax"
        },
        {
            title: "In a Nutshell: Bitcoin and the Blockchain",
            image: imgAmazon,
            description: "Introductory book on bitcoin and the blockchain, available as ebook and print on amazon",
            link: "https://www.amazon.com/Nutshell-Bitcoin-Blockchain-M-Schulz/dp/1976722276/ref=sr_1_2?keywords=bitcoin+in+a+nutshell&qid=1562007175&s=books&sr=1-2",
            alt: "In a Nutshell: Bitcoin and the Blockchain"
        }
    ]

    const projectElements = arrProjects.map((project) => {
        return (
            <Project    
                title={ project.title } 
                image={ project.image } 
                description={ project.description }
                link={ project.link } />
        )
    })

    return (
        <div className="projects" id="projects">
            <SectionGradientHeader />
            <h1>Projects, Previous Work</h1>
            <div className="projects_container">
                { projectElements } 
            </div>
            <SectionGradientFooter />
        </div>
    )
}

export default projects