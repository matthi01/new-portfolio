import React from "react"

import "./projects.scss"
import Project from "./project/project"
import SectionGradientFooter from "../../ui/section-gradient-footer/section-gradient-footer"

const projects = () => {

    const arrProjects = [
        {
            title: "first project",
            image: "image-path",
            description: "desciption"
        },
        {
            title: "second project",
            image: "image-path",
            description: "desciption"
        },
        {
            title: "third project",
            image: "image-path",
            description: "desciption"
        }
    ]

    const projectElements = arrProjects.map((project) => {
        return (
            <Project title={ project.title } image={ project.image } description={ project.description } />
        )
    })

    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            { projectElements }
            <SectionGradientFooter />
        </div>
    )
}

export default projects