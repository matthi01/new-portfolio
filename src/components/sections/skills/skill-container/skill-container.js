import React from "react"

import "./skill-container.scss"

const skillContainer = (props) => {

    const elSkills = props.skills.map((skill) => {
        return (
                    <div className="skill-container_skill">
                        { skill }
                    </div>
                )
    })

    return (
        <div className="skill-container">
            <div className="skill-container_title">
                { props.title }
            </div>
            { elSkills }
        </div>
    )
}

export default skillContainer