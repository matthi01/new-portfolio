import React from "react"
import SectionGradientHeader from "../../ui/section-gradient-header/section-gradient-header"
import SkillContainer from "./skill-container/skill-container"
import { useStaticQuery, graphql } from "gatsby"
import "./skills.scss"

const skills = () => {

    const data = useStaticQuery(graphql`
        query SkillsQuery {
            allSkillsJson {
                edges {
                    node {
                        skills {
                            title 
                            skills {
                                type
                                items
                            }
                        }
                    }
                }
            }
        }
    `)

    const skillsContainers = data.allSkillsJson.edges[0].node.skills.skills.map((element) => {
        return (
            <SkillContainer key={ element.type } title={ element.type } skills={ element.items } />
        )
    })

    return (
        <div className="skills" id="skills">
            <h1>{ data.allSkillsJson.edges[0].node.skills.title }</h1>
            <div className="skills_wrapper">
                { skillsContainers }
            </div>
            <SectionGradientHeader />
        </div>
    )
}

export default skills