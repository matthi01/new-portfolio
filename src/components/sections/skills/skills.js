import React from "react"

import SectionGradientFooter from "../../ui/section-gradient-footer/section-gradient-footer"
import SectionGradientHeader from "../../ui/section-gradient-header/section-gradient-header"
import SkillContainer from "./skill-container/skill-container"

import "./skills.scss"

const skills = () => {

    const arrLanguages = ["Javascript", "HTML", "CSS", "Swift", "Python", "SQL"]
    const arrFrameworks = ["React", "Gatsby", "Redux", "Jekyll", "xCode", "Solidity", "Node", "SQLServer", "MongoDB"]
    const arrSoft = ["Business Analysis", "Consulting", "Public Speaking / Presentations", "Computer Science background, solid understanding of fundamental principles", "Determination to learn"]

    return (
        <div className="skills" id="skills">
            <h1>Skills</h1>
            <div className="skills_wrapper">
                <SkillContainer title="Languages" skills={arrLanguages} />
                <SkillContainer title="Frameworks / Libraries" skills={arrFrameworks} />
                <SkillContainer title="Soft Skills" skills={arrSoft} />
            </div>
            <SectionGradientHeader />
        </div>
    )
}

export default skills