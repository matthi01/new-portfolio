import React from "react"

import SectionGradientFooter from "../../ui/section-gradient-footer/section-gradient-footer"
import SkillContainer from "./skill-container/skill-container"

import "./skills.scss"

const skills = () => {
    return (
        <div className="skills">
            <h1>Skills</h1>
            <div className="skills_wrapper">
                <SkillContainer title="Languages" skills={["skill1", "skill2", "skill3"]} />
                <SkillContainer title="Frameworks / Libraries" skills={["skill1", "skill2", "skill3"]} />
                <SkillContainer title="Soft Skills" skills={["skill1", "skill2", "skill3"]} />
            </div>
            <SectionGradientFooter />
        </div>
    )
}

export default skills