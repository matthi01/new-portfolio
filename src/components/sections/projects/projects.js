import React from "react"

import "./projects.scss"
import Project from "./project/project"
import SectionGradientFooter from "../../ui/section-gradient-footer/section-gradient-footer"
import SectionGradientHeader from "../../ui/section-gradient-header/section-gradient-header"

const projects = () => {

    const arrProjects = [
        {
            title: "blockstream.com",
            image: "construction-placeholder.png",
            description: "Main Blockstream landing page. Built with Jekyll from the ground up.",
            link: "https://www.blockstream.com"
        },
        {
            title: "blockstream.info",
            image: "image-path",
            description: "Blockstream block explorer, build using react.",
            link: "https://www.blockstream.info"
        },
        {
            title: "store.blockstream.com",
            image: "image-path",
            description: "Blockstream store using lightning payment technology.",
            link: "https://www.store.blockstream.com"
        },
        {
            title: "volkfi.com",
            image: "image-path",
            description: "Volkfi landing page.",
            link: "https://www.volkfi.com"
        },
        {
            title: "Blockstream Green (iOS)",
            image: "image-path",
            description: "Blockstream Green iOS wallet app.",
            link: "https://www.blockstream.com/green"
        }, 
        {
            title: "Blockstream Satellite Transmissions App",
            image: "image-path",
            description: "Blockstream Satellite transmissions app",
            link: "https://www.blockstream.com/satellite/"
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
            <h1>Projects</h1>
            <div className="projects_container">
                { projectElements } 
            </div>
            <SectionGradientFooter />
        </div>
    )
}

export default projects